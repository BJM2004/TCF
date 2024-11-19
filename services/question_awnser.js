const QuestionAwnser = require('../data/question_awnser');
async function findAll(){
    return await QuestionAwnser.find().populate('sujet');
}
async function find(questionAwnserId){
    return await QuestionAwnser.findById(questionAwnserId).populate('sujet');
}
async function create(data){
    const questionAwnser=new QuestionAwnser(data);
    return await questionAwnser.save();
}
async function update(questionAwnserId,data){
    return await QuestionAwnser.findByIdAndUpdate(questionAwnserId,data,{new:true}).populate('sujet');
}
async function remove(questionAwnserId){
    return await QuestionAwnser.findByIdAndRemove(questionAwnserId);
}
module.exports={
    findAll,find,create,update,remove};