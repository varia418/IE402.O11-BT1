require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
  
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
  ], function (esriConfig, Map, MapView, Graphic, GraphicsLayer, FeatureLayer) {
    esriConfig.apiKey = "YOUR_API_KEY";
    const map = new Map({
      basemap: "hybrid", //Basemap layer service
    });
  
    const view = new MapView({
      map: map,
      center: [106.721991, 10.736150], //Longitude, latitude
      zoom: 13,
      container: "viewDiv",
    });
  
    let color = {
      red: [255, 0, 0, 0.6],
      green: [124, 252, 0, 0.6],
      blue: [0, 255, 255, 0.6],
      yellow: [255, 255, 153, 0.6],
      orange: [255, 165, 0, 0.6],
      purple: [159, 90, 253, 0.6],
      brown: [128, 0, 0, 0.6],
      pink: [255, 192, 203, 0.6],
      black: [0, 0, 0, 0.6],
    };
  
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    fetch("http://127.0.0.1:5500/streetData.json")
    .then(async function (response) {
      let streetData = await response.json();
      let streetList = {
        NVL: {
          name: "Duong Nguyen Van Linh",
          length: "18 km",
          paths: [...streetData.NVL],
        }
      };
      for (let street in streetList) {
        // Create a line geometry
        const polyline = {
          type: "polyline",
          paths: streetList[street].paths,
        };
        const simpleLineSymbol = {
          type: "simple-line",
          color: color.red,
          width: 2,
        };
        const popupTemplate = {
          title: "{Name}",
          content: "{Description}",
        };
        const attributes = {
          Name: `${streetList[street].name}`,
          Description: `Length: ${streetList[street].length}`,

        };
        const polylineGraphic = new Graphic({
          geometry: polyline,
          symbol: simpleLineSymbol,
          attributes: attributes,
          popupTemplate: popupTemplate,
        });
        graphicsLayer.add(polylineGraphic);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  fetch("http://127.0.0.1:5500/lineData.json")
    .then(async function (response) {
      let lineData = await response.json();

      //Define Polygon
      let wards = {
        TanKieng: {
          name: "Phuong Tan Kieng",
          acreage: "1 km²",
          rings: [...lineData.PTK],
          color: color.orange,
        },
        TanHung:{
          name: "Phuong Tan Hung",
          acreage: "2,20 km²",
          rings: [...lineData.PTH],
          color: color.blue,
        }
      };

      // Create a polygon geometry
      for (let i in wards) {
        const polygon = {
          type: "polygon",
          rings: wards[i].rings,
        };

        const simpleFillSymbol = {
          type: "simple-fill",
          color: wards[i].color,
          outline: {
            color: [255, 255, 255],
            width: 1,
          },
        };

        const popupTemplate = {
          title: "{Name}",
          content: "{Description}",
        };
        const attributes = {
          Name: `${wards[i].name}`,
          Description: `Acreage: ${wards[i].acreage}`,
        };

        const polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: simpleFillSymbol,
          attributes: attributes,
          popupTemplate: popupTemplate,
        });
        graphicsLayer.add(polygonGraphic);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  fetch("http://127.0.0.1:5500/schoolData.json")
  .then(async function (response) {
    let listSchool = await response.json();
    for (let school in listSchool) {
      const point = {
        type: "point",
        longitude: listSchool[school].longitude,
        latitude: listSchool[school].latitude,
      };
      const simpleSchoolSymbol = {
        type: "picture-marker",
        url: "./education.png",
        width: "20px",
        height: "20px",
      };
      const popupTemplate = {
        title: "{Name}",
        content: "{Description}",
      };
      const attributes = {
        Name: `${listSchool[school].name}`,
        Description: `Địa chỉ: ${listSchool[school].address}
                      SĐT: ${listSchool[school].phone}`
      };
      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleSchoolSymbol,
        attributes: attributes,
        popupTemplate: popupTemplate,
      });
      graphicsLayer.add(pointGraphic);
    }
  })
  .catch((err) => {
    console.log(err);
  });
  });
  