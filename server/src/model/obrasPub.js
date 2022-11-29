const db = require('./knex')();

exports.create = async function(obj, table){

    await db(table).insert(obj);
    return obj;
}

//check if the object exists. If exist check if the object is different. If different update the object
//else do nothing. If not exist create the object
//TODO:change function to delete and create all the objects.
exports.update = async function(obj, table){
    const codigo = obj.codigo;
    const objDB = await db(table).where({codigo: codigo}).first();
    if(objDB){
        if(objDB != obj){
            await db(table).where({codigo: codigo}).update(obj);
        } else {
            return obj;
        }
    } else {
        await db(table).insert(obj);
        console.log('inserted');
    }
    return obj;
}