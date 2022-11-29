const axios = require('axios');

// Get data from datos abiertos api. Obras públicas Manizales.
exports.getData = async () => {
    try {
        const response = await axios.get('https://www.datos.gov.co/resource/tbjp-ie7c.json', {
            headers: {
                'Accept-Encoding': '*',
              }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};