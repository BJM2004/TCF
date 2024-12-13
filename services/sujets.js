const Sujet = require('../data/sujets');

async function createSujet(data) {
    const sujet = new Sujet(data);
    return await sujet.save();
}

async function findAllSujets() {
    return await Sujet.find();
}

async function findSujetById(sujetId) {
    return await Sujet.findById(sujetId);
}

async function updateSujet(sujetId, data) {
    return await Sujet.findByIdAndUpdate(sujetId, data, { new: true });
}

async function deleteSujet(sujetId) {
    return await Sujet.findByIdAndRemove(sujetId);
}

module.exports = {
    createSujet,
    findAllSujets,
    findSujetById,
    updateSujet,
    deleteSujet
};
