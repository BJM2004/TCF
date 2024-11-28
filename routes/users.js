const express=require('express');
const router=express.Router();
const userSController=require('../controllers/users');
//Afficher tous les utilisateurs
router.get('/',userSController.list);
//Afficher un utilisateur en particulier
router.get("/:id",userSController.read);
//Creer un utilisateur
router.post("/register",userSController.create);
//Se connecter
router.post("/login",userSController.login);
//Modifier un utilisateur
router.put("/:id/update",userSController.update);
//Supprimer un utilisateur
router.delete("/:id/delete",userSController.remove);
module.exports=router;