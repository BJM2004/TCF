const express=require('express');
const router=express.Router();
const sujetRouter=require('./sujets');
const userRouter=require('./users');
const question_awnserRouter=require('./question_awnser');
router.use("/sujets",sujetRouter);
router.use("/question_awnser",question_awnserRouter);
router.use('/users',userRouter);
module.exports=router;