const PhuongBinhThuan_CauPhuMy = (Graphic, view) => {
    //Trường THCS Nguyễn Hiền
    const point = {
        type: 'point',
        longitude: 106.72550974405523,
        latitude: 10.739990078368452,
    };

    const simpleMarkerSymbol = {
        type: 'picture-marker',
        url: 'location-icon.png',
        width: '48px',
        height: '48px',
    };

    const pointAtt = {
        Tên: 'Trường THCS Nguyễn Hiền',
        'Địa chỉ': '66 Số 1, Bình Thuận, Quận 7, Thành phố Hồ Chí Minh, Việt Nam',
        SĐT: '02837738316',
    };

    const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
        attributes: pointAtt,
        popupTemplate: {
            title: '{Tên}',
            content: [
                {
                    type: 'fields',
                    fieldInfos: [
                        {
                            fieldName: 'Tên',
                        },
                        {
                            fieldName: 'Địa chỉ',
                        },
                        {
                            fieldName: 'SĐT',
                        },
                    ],
                },
            ],
        },
    });

    //Trường THCS Huỳnh Tấn Phát
    const point2 = {
        type: 'point',
        longitude: 106.72929818923186,
        latitude: 10.743229275193004,
    };

    const pointAtt2 = {
        Tên: 'Trường THCS Huỳnh Tấn Phát',
        'Địa chỉ': '488 Huỳnh Tấn Phát, Bình Thuận, Quận 7, Thành phố Hồ Chí Minh, Việt Nam',
        SĐT: '02837731707',
    };

    const pointGraphic2 = new Graphic({
        geometry: point2,
        symbol: simpleMarkerSymbol,
        attributes: pointAtt2,
        popupTemplate: {
            title: '{Tên}',
            content: [
                {
                    type: 'fields',
                    fieldInfos: [
                        {
                            fieldName: 'Tên',
                        },
                        {
                            fieldName: 'Địa chỉ',
                        },
                        {
                            fieldName: 'SĐT',
                        },
                    ],
                },
            ],
        },
    });

    //Cầu Phú Mỹ
    const polyline = {
        type: 'polyline',
        paths: [
            [106.72252834560807, 10.733800087889444],
            [106.72576684222459, 10.733557293614446],
            [106.72779054971556, 10.734412475461637],
            [106.73089932036329, 10.737940670846555],
            [106.75443474776307, 10.749922096658763],
        ],
    };

    const lineSymbol = {
        type: 'simple-line',
        color: [226, 119, 40],
        width: 4,
    };

    const lineAtt = {
        Tên: 'Cầu Phú Mỹ',
        'Chiều dài': 'hơn 2000m',
        'Chiều rộng': '3',
        'Nhà thầu': 'Bilfinger Berger',
    };

    const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: lineSymbol,
        attributes: lineAtt,
        popupTemplate: {
            title: '{Tên}',
            content: [
                {
                    type: 'fields',
                    fieldInfos: [
                        {
                            fieldName: 'Tên',
                        },
                        {
                            fieldName: 'Chiều dài',
                        },
                        {
                            fieldName: 'Nhà thầu',
                        },
                    ],
                },
            ],
        },
    });

    //Phường Bình Thuận
    const polygon = {
        type: 'polygon',
        rings: [
            [106.7158691, 10.7455319],
            [106.7164316, 10.7455269],
            [106.7168999, 10.7455226],
            [106.7175402, 10.7455118],
            [106.717882, 10.745613],
            [106.7180814, 10.7458988],
            [106.718788, 10.7464247],
            [106.7191701, 10.7467332],
            [106.7195354, 10.7469745],
            [106.7200663, 10.7471449],
            [106.7205219, 10.7472401],
            [106.7209624, 10.7471809],
            [106.721447, 10.7470441],
            [106.7218108, 10.7467864],
            [106.723744, 10.7469716],
            [106.7248567, 10.7471025],
            [106.7249005, 10.7477667],
            [106.7266864, 10.7480485],
            [106.7273919, 10.7481233],
            [106.7274409, 10.7481854],
            [106.7277561, 10.7482158],
            [106.7288396, 10.748297],
            [106.7289092, 10.7476811],
            [106.7304136, 10.7376029],
            [106.7300736, 10.7375831],
            [106.7216412, 10.7380265],
            [106.7159346, 10.7383735],
            [106.7158906, 10.7444334],
            [106.7158766, 10.7451485],
            [106.7158691, 10.7455319],
        ],
    };

    const fillSymbol = {
        type: 'simple-fill',
        color: [227, 139, 79, 0.3],
        outline: {
            color: [255, 255, 255],
            width: 1,
        },
    };

    const polygonAtt = {
        Tên: 'Phường Bình Thuận',
        'Thành lập': '1997',
        'Diện tích': '1,62 km²',
        'Dân số': '33.055',
    };

    const polygonGraphic = new Graphic({
        geometry: polygon,
        symbol: fillSymbol,
        attributes: polygonAtt,
        popupTemplate: {
            title: '{Tên}',
            content: [
                {
                    type: 'fields',
                    fieldInfos: [
                        {
                            fieldName: 'Tên',
                        },
                        {
                            fieldName: 'Thành lập',
                        },
                        {
                            fieldName: 'Diện tích',
                        },
                        {
                            fieldName: 'Dân số',
                        },
                    ],
                },
            ],
        },
    });

    view.graphics.addMany([pointGraphic, pointGraphic2, polylineGraphic, polygonGraphic]);
}

export default PhuongBinhThuan_CauPhuMy;