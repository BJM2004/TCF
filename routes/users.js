const express=require('express');
const router=express.Router();
const userSController=require('../controllers/users');
//Afficher tous les utilisateurs
router.get('/',userSController.list);
//Afficher un utilisateur en particulier
router.get("/:id",userSController.read);
//Creer un utilisateur
router.post("/",userSController.create);
//Modifier un utilisateur
router.put("/:id",userSController.update);
//Supprimer un utilisateur
router.delete("/:id",userSController.remove);
module.exports=router;