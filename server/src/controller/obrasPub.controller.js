const obrasPub = require('../utilities/obrasPub.utils');
const geojson = require('../utilities/geojson.utils');
const obrasPubModel = require('../model/obrasPub');

exports.CreateObrasPub = async (req, res, next) => {
    try {
        for (const obra of await obrasPub.getData()) {
            await obrasPubModel.create(obra, 'obrasPub');
        }
        res.status(200).send({message: "Table created"});
    } catch (error) {
        res.status(500).send({message: "Error creating table"});
    }  
};

exports.UpdateObrasPub = async (req, res) => {
    try {
        for (const obra of await obrasPub.getData()) {
            await obrasPubModel.update(obra, 'obrasPub');
        }
        res.status(200).send({message: "Table updated"});
    } catch (error) {
        res.status(500).send({message: "Error updating table"});
    } 
};

exports.CreateGeojsonObrasPub = async (req, res) => {
    try {
        const geojsonObrasPub = await geojson.geojsonObrasPub();
        res.status(200).send(geojsonObrasPub);
    } catch (error) {
        res.status(500).send({message: "Error creating geojson"});
    }  
};