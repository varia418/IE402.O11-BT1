const PhuongTanPhong_DuongNguyenThiThap = (Graphic, view) => {
    const TanPhongWardAtt = {
        Tên: "Phường Tân Phong",
        "Dân số": "36.572 người",
        "Mật độ": "8.163 người/km²",
        color: [0, 0, 255, 0.2],
        OSMId: 2766952,
      };
  
      const NguyenThiThapAtt = {
        Tên: "Nguyễn Thị Thập",
        "Chiều dài": "3.750m",
        color: [0, 255, 0, 0.8],
        coords: [
          [106.6942781, 10.74066594],
          [106.6960216, 10.74119298],
          [106.7009139, 10.74039188],
          [106.7035693, 10.739907],
          [106.7043391, 10.7397726],
          [106.7112136, 10.73874486],
          [106.712442, 10.73859202],
          [106.7137107, 10.73850505],
          [106.7159289, 10.7383812],
          [106.718308, 10.73820464],
          [106.7232701, 10.73794902],
          [106.7296028, 10.73759062],
        ],
      };
  
      const THPTTanPhong = {
        type: "point", // autocasts as new Point()
        longitude: 106.69277206783194,
        latitude: 10.727185406736288,
      };
  
      const THPTTanPhongAtt = 
      {
        "Tên": "Trường THPT Tân Phong",
        "Địa chỉ": "19 lô F khu định cư, Ven sông, P. Tân Phong, Quận 7, Thành phố Hồ Chí Minh",
        "SĐT": "028 3776 0138"
      }
  
      async function getGeo(OSMId) {
        const response = await fetch(
          `http://polygons.openstreetmap.fr/get_geojson.py?id=${OSMId}&params=0`
        );
        const result = await response.json();
        return result.coordinates[0];
      }
  
      async function addWardPolygonGraphic(attributes) {
        const coordinates = await getGeo(attributes["OSMId"]);
        const wardPolygon = {
          type: "polygon",
          rings: coordinates,
        };
  
        const fillSymbol = {
          type: "simple-fill",
          color: attributes["color"],
          outline: {
            color: [255, 255, 255],
            width: 1,
          },
        };
  
        const wardPolygonGraphic = new Graphic({
          geometry: wardPolygon,
          symbol: fillSymbol,
          attributes: attributes,
          popupTemplate: {
            title: "{Tên}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "Tên",
                  },
                  {
                    fieldName: "Dân số",
                  },
                  {
                    fieldName: "Mật độ",
                  },
                ],
              },
            ],
          },
        });
  
        view.graphics.add(wardPolygonGraphic);
      }
  
      function addRoadsPolyLineGraphic(attributes) {
        const polyline = {
          type: "polyline", // autocasts as new Polyline()
          paths: attributes["coords"],
        };
  
        const lineSymbol = {
          type: "simple-line", // autocasts as SimpleLineSymbol()
          color: attributes["color"],
          width: 4,
        };
  
        // Add the geometry and symbol to a new graphic
        const polylineGraphic = new Graphic({
          geometry: polyline,
          symbol: lineSymbol,
          attributes: attributes,
          popupTemplate: {
            // autocasts as new PopupTemplate()
            title: "{Tên}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "Tên",
                  },
                  {
                    fieldName: "Chiều dài",
                  },
                ],
              },
            ],
          },
        });
        view.graphics.add(polylineGraphic);
      }
  
      function addPointGraphic(point, attributes) {
        const simpleMarkerSymbol = {
          type: "picture-marker",
          url: "school.png", // cẩn thận khi dùng absolute URL
          width: "48px",
          height: "48px",
        };
  
        const markerSymbol = {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [226, 119, 40],
          outline: {
            // autocasts as new SimpleLineSymbol()
            color: [255, 255, 255],
            width: 2,
          },
        };
  
        const pointGraphic = new Graphic({
          geometry: point,
          symbol: simpleMarkerSymbol,
          attributes: attributes,
          popupTemplate: {
            title: "{Tên}",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "Tên",
                  },
                  {
                    fieldName: "Địa chỉ",
                  },
                  {
                    fieldName: "SĐT",
                  },
                ],
              },
            ],
          },
        });
        view.graphics.add(pointGraphic);
      }
  
      addPointGraphic(THPTTanPhong, THPTTanPhongAtt);
      addWardPolygonGraphic(TanPhongWardAtt);
      addRoadsPolyLineGraphic(NguyenThiThapAtt);
}
    
export default PhuongTanPhong_DuongNguyenThiThap;