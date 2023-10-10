const PhuongTanQuy_DuongHuynhTanPhat = (Graphic, view) => {
    const tanQuyWardOSMId = 2766954;
    const tanQuyWardAttributes = {
        "Tên": "Phường Tân Quy",
        "Dân số": "27.689 người",
        "Mật độ": "32.196 người/km²",
    }

    async function getGeo(OSMId) {
        const response = await fetch(`http://polygons.openstreetmap.fr/get_geojson.py?id=${OSMId}&params=0`);
        const result = await response.json();
        return result.coordinates[0];
    }

    const fillSymbol = {
        type: "simple-fill",
        color: [227, 139, 79, 0.6],
        outline: {
            color: [255, 255, 255],
            width: 1
        }
    };

    async function addWardPolygonGraphic(OSMId, attributes) {
        const coordinates = await getGeo(OSMId);
        const wardPolygon = {
            type: "polygon",
            rings: coordinates
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
                                fieldName: "Tên"
                            },
                            {
                                fieldName: "Dân số"
                            },
                            {
                                fieldName: "Mật độ"
                            }
                        ]
                    }
                ]
            }
        });

        view.graphics.add(wardPolygonGraphic);
    }

    addWardPolygonGraphic(tanQuyWardOSMId, tanQuyWardAttributes);

    const HuynhTanPhatStreetPolyline = {
        type: "polyline",
        paths: [[106.72114881349184, 10.755662136851955], [106.7212882883606, 10.75588348415094], [106.72166379762264, 10.755820242082084], [106.72777923417608, 10.754471074787842], [106.72802599740544, 10.754323509248914], [106.72830494714296, 10.753933514262892], [106.72838004899538, 10.753617301741928], [106.72843369317552, 10.752710824011602], [106.72861608338852, 10.751045427595047], [106.72889503312592, 10.747746229074373], [106.7289808638144, 10.747113790733986], [106.72932418656832, 10.74479483881698], [106.73035415483015, 10.737943285938027], [106.73097642732169, 10.73364253951994], [106.73110517335441, 10.733305223487053], [106.73314365220585, 10.727381049310512], [106.73625501466326, 10.721541091435572], [106.73653396440082, 10.720803182599655], [106.7367270834499, 10.719854440023942], [106.73717769456442, 10.710978282115985], [106.7373493559414, 10.706656068293613], [106.73762830567897, 10.705053670918483], [106.73786434007226, 10.704484396127212], [106.7378857977444, 10.704041626105912], [106.73803600144923, 10.703008493541015], [106.7384329683835, 10.69980365175576], [106.73866900277679, 10.698928639723684], [106.73895868135038, 10.69807470988468], [106.73942002130097, 10.696767454609326], [106.7426494009547, 10.68804876125626], [106.74316438508554, 10.68725805721059], [106.74367936921635, 10.686541150429177], [106.74417289567505, 10.68582424195501], [106.74559983087076, 10.683810563510399], [106.74628647637851, 10.682808990725475], [106.74770268273815, 10.68077420637093], [106.74803527665597, 10.680436831481906], [106.74904378724548, 10.680025655329343], [106.75005229783501, 10.679635564618929], [106.75165089440773, 10.679045156104511], [106.75358208489833, 10.678307143848162], [106.7547300703566, 10.677885421754024], [106.7563393957654, 10.67723175135148], [106.75804528069872, 10.676546450226144], [106.76196098660257, 10.675090018156487], [106.76613450382939, 10.673561256598571], [106.76729321812373, 10.673940811909727]]
    }

    const lineSymbol = {
        type: "simple-line",
        color: [226, 119, 40],
        width: 4
    };

    const lineAtt = {
        "Tên": "Đường Huỳnh Tấn Phát",
        "Chiều dài": "12,7km"
    };

    const HuynhTanPhatStreetPolylineGraphic = new Graphic({
        geometry: HuynhTanPhatStreetPolyline,
        symbol: lineSymbol,
        attributes: lineAtt,
        popupTemplate: {
            title: "{Tên}",
            content: [
                {
                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "Tên"
                        },
                        {
                            fieldName: "Chiều dài"
                        }
                    ]
                }
            ]
        }
    });

    view.graphics.add(HuynhTanPhatStreetPolylineGraphic);

    const TanQuyPrimarySchool = {
        type: "point",
        longitude: 106.704582,
        latitude: 10.741036
    };

    const schoolMarker = {
        type: "picture-marker",
        url: "school.png",
        width: "48px",
        height: "48px",
    };

    const TanQuyPrimarySchoolAttributes = {
        "Tên": "Trường tiểu học Tân Quy",
        "Địa chỉ": "217/2 Lê Văn Lương - Tân Quy - Quận 7",
    };

    const TanQuyPrimarySchoolGraphic = new Graphic({
        geometry: TanQuyPrimarySchool,
        symbol: schoolMarker,
        attributes: TanQuyPrimarySchoolAttributes,
        popupTemplate: {
            title: "{Tên}",
            content: [
                {
                    type: "fields",
                    fieldInfos: [
                        {
                            fieldName: "Tên"
                        },
                        {
                            fieldName: "Địa chỉ"
                        }
                    ]
                }
            ]
        }
    });

    view.graphics.add(TanQuyPrimarySchoolGraphic);
}

export default PhuongTanQuy_DuongHuynhTanPhat;