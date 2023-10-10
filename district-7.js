import PhuongTanQuy_DuongHuynhTanPhat from "./19521933.js";
import PhuongBinhThuan_CauPhuMy from "./20521239.js";
import PhuongTanPhong_DuongNguyenThiThap from "./20521232.js";

require(["esri/Map", "esri/views/MapView", "esri/Graphic"], (Map, MapView, Graphic) => {
    const map = new Map({
        basemap: "hybrid"
    });

    const view = new MapView({
        map: map,
        center: [106.730573, 10.736569],
        zoom: 15,
        container: "viewDiv"
    });

    PhuongTanQuy_DuongHuynhTanPhat(Graphic, view);
    PhuongBinhThuan_CauPhuMy(Graphic, view);
    PhuongTanPhong_DuongNguyenThiThap(Graphic, view);
});