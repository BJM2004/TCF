const { default: mongoose } = require("mongoose")

const {Schema,model}=mongoose;
const question_anwserSchema= new Schema({
    question:{type:String, require:true},
    fichier:{type:String},
    anwser:{type:String,require:true},
    falseAnwser1:{type:String,require:true},
    falseAnwser2:{type:String,require:true},
    falseAnwser3:{type:String,require:true},
    sujet:{type:mongoose.Schema.Types.ObjectId,ref:'Sujet',require:true}
});
const QuestionAwnser=model('QuestionAwnser', question_anwserSchema);
module.exports=QuestionAwnser;