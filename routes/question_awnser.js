const express=require('express');
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware');
const upload=require('../middleware/upload');
const question_awnserController=require('../controllers/question_awnser');
//Afficher tous les sujets
router.get('/',question_awnserController.list);
//Afficher une question en particulier
router.get("/:id",question_awnserController.read);
//Creer un sujet
router.post("/create",authMiddleware.authenticateToken,upload.single('fichier'),question_awnserController.create);
//Modifier un sujet
router.put("/:id/update",upload.single('fichier'),question_awnserController.update);
//Supprimer une question
router.delete("/:id/delete",authMiddleware.authenticateToken,question_awnserController.remove);
module.exports=router;