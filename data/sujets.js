const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const sujetSchema= new Schema({
    name:{type:String, require:true},
    description:{type:String,require:true}}
);
const Sujet=model('Sujet', sujetSchema);
module.exports=Sujet;