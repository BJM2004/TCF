const Sujet=require('../data/sujets');
async function findAll(){
    return await Sujet.find();
}
async function find(sujetId){
    return await Sujet.findById(sujetId);
}
async function create(data){
    const sujet=new Sujet(data);
    return await sujet.save();
}
async function update(sujetId,data){
    return await Sujet.findByIdAndUpdate(sujetId,data,{new:true});
}
async function remove(sujetId){
    return await Sujet.findByIdAndRemove(sujetId);
}
module.exports={
    findAll,find,create,update,remove
};