const express=require('express');
const authMiddleware=require('../middleware/authMiddleware');
const router=express.Router();
const sujetController=require('../controllers/sujets');
//Afficher tous les sujets
router.get('/',sujetController.list);
//Afficher un sujet en particulier
router.get("/:id",sujetController.read);
//Creer un sujet
router.post("/created",authMiddleware.authenticateToken,sujetController.create);
//Modifier un sujet
router.put("/:id/update",authMiddleware.authenticateToken,sujetController.update);
//Supprimer un sujet
router.delete("/:id/delete",authMiddleware.authenticateToken,sujetController.remove);
module.exports=router;