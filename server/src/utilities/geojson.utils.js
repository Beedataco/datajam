const obrasPub = require('./obrasPub.utils');

const geojsonPoint = (row) => {
    const coordinates = row.coordenadas.split(',').map(Number)
    return {
        type: 'Feature',
        geometry: {
        coordinates: coordinates.reverse(),
        type: 'Point', // [long, lat]
        },
        properties: {
        nombre: row.nombre,
        tipo: row.tipo_obra,
        contratista: row.contratista,
        avance: row.porcentaje_avance,
        },
    };
};

exports.geojsonObrasPub = async () => {
    try {
        const obrasPubData = await obrasPub.getData();
        const features = obrasPubData.map((row) => geojsonPoint(row));
        return {
            type: 'FeatureCollection',
            "features":features,
        };
    } catch (error) {
        console.error(error);
    } 
};

// geojsonObrasPub().then((data) => console.log(data));



// const geojsonLines = (row) => {
//     // TODO: Implement array of objects with coordinates.
//     return {
//         type: 'Feature',
//         geometry: {
//         type: 'LineString',
//         coordinates: [row.longitude, row.latitude],
//         },
//         properties: {
//         name: row.name,
//         description: row.description,
//         },
//     };
// }

// const geojsonPolygon = (row) => {
//     // TODO: Implement array of objects with coordinates.
//     return {
//         type: 'Feature',
//         geometry: {
//         type: 'Polygon',
//         coordinates: [row.longitude, row.latitude],
//         },
//         properties: {
//         name: row.name,
//         description: row.description,
//         },
//     };
// }