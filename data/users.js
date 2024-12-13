const mongoose=require('mongoose');
const{Schema,model}=mongoose;
const bcrypt=require("bcrypt");
const userSchema=new Schema({
    name:{type:String,require:true, unique:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    subscription: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' }
})
//HAcher le mot de pass avant de le sauvegarder
userSchema.pre('save',async function(next){
    if(this.isModified('password')|| this.isNew){
        const salt=await bcrypt.genSalt(10);
        this.password=bcrypt.hash(this.password, salt);
    }
    next();
});
const User=model('User',userSchema);
module.exports=User;