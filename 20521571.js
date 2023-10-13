const PhuongPhuThuan_DuongNguyenLuongBang = (Graphic, view) => {
    const phuThuanWardOSMId = 2766949;
    const phuThuanWardAttributes = {
        Tên: "Phường Phú Thuận",
        "Dân số": "12,812 người",
        "Mật độ": "1,451 người/km²",
        "Diện tích": "8,83 km²",
    };

    async function getGeo(OSMId) {
        const response = await fetch(
            `http://polygons.openstreetmap.fr/get_geojson.py?id=${OSMId}&params=0`
        );
        const result = await response.json();
        return result.coordinates[0];
    }

    const fillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.6],
        outline: {
            color: [255, 255, 255],
            width: 1,
        },
    };

    async function addWardPolygonGraphic(OSMId, attributes) {
        const coordinates = await getGeo(OSMId);
        const wardPolygon = {
            type: "polygon",
            rings: coordinates,
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
                                fieldName: "Diện tích",
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

    addWardPolygonGraphic(phuThuanWardOSMId, phuThuanWardAttributes);

    const NguyenLuongBangStreetPolyline = {
        type: "polyline",
        paths: [
            [106.718053, 10.734744],
            [106.731336, 10.713106],

            [106.732291, 10.704589],
        ],
    };

    const lineSymbol = {
        type: "simple-line",
        color: [226, 119, 40],
        width: 4,
    };

    const lineAtt = {
        Tên: "Đường Nguyễn Lương Bằng",
        "Chiều dài": "3 km",
    };

    const NguyenLuongBangStreetPolylineGraphic = new Graphic({
        geometry: NguyenLuongBangStreetPolyline,
        symbol: lineSymbol,
        attributes: lineAtt,
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
                            fieldName: "Chiều dài",
                        },
                    ],
                },
            ],
        },
    });

    view.graphics.add(NguyenLuongBangStreetPolylineGraphic);

    const PhuThuanPrimarySchool = {
        type: "point",
        longitude: 106.7300794,
        latitude: 10.736772,
    };

    const schoolMarker = {
        type: "picture-marker",
        url: "school.png",
        width: "48px",
        height: "48px",
    };

    const PhuThuanPrimarySchoolAttributes = {
        Tên: "Trường tiểu học Phú Thuận",
        "Địa chỉ":
            "38B đường Nguyễn Văn Quỳ, Phú Thuận, Quận 7, Thành phố Hồ Chí Minh, Việt Nam",
    };

    const PhuThuanPrimarySchoolGraphic = new Graphic({
        geometry: PhuThuanPrimarySchool,
        symbol: schoolMarker,
        attributes: PhuThuanPrimarySchoolAttributes,
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
                    ],
                },
            ],
        },
    });

    view.graphics.add(PhuThuanPrimarySchoolGraphic);
}

export default PhuongPhuThuan_DuongNguyenLuongBang;