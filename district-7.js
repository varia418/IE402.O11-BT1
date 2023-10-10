import PhuongTanQuy_DuongHuynhTanPhat from "./19521933.js";
import PhuongBinhThuan_CauPhuMy from "./20521239.js";
import PhuongTanPhong_DuongNguyenThiThap from "./20521232.js";
import PhuongPhuMy_DuongLamVanBen from "./20522021.js";
import PhuongTanThuanDong_PhuongTanThuanTay_DuongNguyenHuuTho from "./19522009.js";

require(["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/geometry/Polyline",
    "esri/geometry/Polygon",
    "esri/PopupTemplate"], (Map, MapView, Graphic, Polyline, Polygon, PopupTemplate) => {
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
        PhuongPhuMy_DuongLamVanBen(Graphic, view);
        PhuongTanThuanDong_PhuongTanThuanTay_DuongNguyenHuuTho(Graphic, Polyline, Polygon, PopupTemplate, view);
    });