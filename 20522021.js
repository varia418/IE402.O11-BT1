const PhuongPhuMy_DuongLamVanBen = (Graphic, view) => {
    // Phường Phú Mỹ
    const PhuMyWardOSMId = 2766948;
    const PhuMyWardAttributes = {
        Tên: "Phường Phú Mỹ",
        "Diện tích": "3.95 km²",
        "Dân số": "33.792 người",
        "Mật độ": "8.538 người/km²",
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
        color: [227, 139, 79, 0.1],
        outline: {
            color: [255, 0, 0],
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

    addWardPolygonGraphic(PhuMyWardOSMId, PhuMyWardAttributes);
    // Trường THPT Ngô Quyền
    const point1 = {
        type: "point",
        longitude: 106.7342773,
        latitude: 10.7130293,
    };

    const simpleMarkerSymbol = {
        type: "picture-marker",
        url: "./images/school.png",
        width: "48px",
        height: "48px",
    };

    const pointAtt1 = {
        Tên: "Trường THPT Ngô Quyền",
        "Địa chỉ":
            "1360 Huỳnh Tấn Phát, Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh, Việt Nam",
        SĐT: "02837851221",
    };

    const school1pointGraphic = new Graphic({
        geometry: point1,
        symbol: simpleMarkerSymbol,
        attributes: pointAtt1,
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

    //Trường Tiểu học Phú Mỹ
    const point2 = {
        type: "point",
        longitude: 106.7328986,
        latitude: 10.7050525,
    };

    const pointAtt2 = {
        Tên: "Trường Tiểu học Phú Mỹ",
        "Địa chỉ": "76/5 Phạm Hữu Lầu, Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh",
        SĐT: "028.37851529",
    };

    const school2pointGraphic = new Graphic({
        geometry: point2,
        symbol: simpleMarkerSymbol,
        attributes: pointAtt2,
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

    const polyline = {
        type: "polyline",
        paths: [
            [106.7158374694132, 10.751849412306093],
            [106.71584551595846, 10.750431713669391],
            [106.7158669742854, 10.748685493563116],
            [106.71584909267366, 10.746363040053579],
            [106.71592899567314, 10.738381600993355],
        ],
    };

    const lineSymbol = {
        type: "simple-line",
        color: [226, 119, 40],
        width: 4,
    };

    const lineAtt = {
        Tên: "Đường Lâm Văn Bền",
        "Chiều dài": "1.5 km",
        "Các phường đi qua": "Tân Quy, Tân Kiểng, Tân Thuận Tây, Bình Thuận",
    };

    const LamVanBenWaypolylineGraphic = new Graphic({
        geometry: polyline,
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
                        {
                            fieldName: "Các phường đi qua",
                        },
                    ],
                },
            ],
        },
    });

    view.graphics.addMany([
        school1pointGraphic,
        school2pointGraphic,
        LamVanBenWaypolylineGraphic,
    ]);
}

export default PhuongPhuMy_DuongLamVanBen;