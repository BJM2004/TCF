const express=require('express');
const router=express.Router();
const sujetController=require('../controllers/sujets');
//Afficher tous les sujets
router.get('/',sujetController.list);
//Afficher un sujet en particulier
router.get("/:id",sujetController.read);
//Creer un sujet
router.post("/",sujetController.create);
//Modifier un sujet
router.put("/:id",sujetController.update);
//Supprimer un sujet
router.delete("/:id",sujetController.remove);
module.exports=router;