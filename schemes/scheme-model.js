const db = require("../data/dbConfig.js");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}

function find() {
    return db("scheme");
}

function findById(id) {
    return db("scheme").where({id}).first();
}

//lambda style function 
function findSteps(id) {
    return db("scheme")
    .where({id})    ///.first(); <---- may not need just the #1
}

function add(scheme) {
    return db("scheme")
    .insert(scheme, "id")
    .then(ids =>{
        return findById(ids[0]);
    });
}

function update(id, changes) {
    return db("users")
    .where({id})
    .update(changes);
}

function remove(id) {
    return db("users").where({id})
    .del()
}

