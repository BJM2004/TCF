const express=require('express');
const router=express.Router();
const question_awnserController=require('../controllers/question_awnser');
//Afficher tous les sujets
router.get('/',question_awnserController.list);
//Afficher un sujet en particulier
router.get("/:id",question_awnserController.read);
//Creer un sujet
router.post("/",question_awnserController.create);
//Modifier un sujet
router.put("/:id",question_awnserController.update);
//Supprimer un sujet
router.delete("/:id",question_awnserController.remove);
module.exports=router;