const question_awnserService=require('../services/question_awnser');

async function list(req,res){
    try{
        const question_awnser=await question_awnserService.findAll();
        res.status(200).json(question_awnser);
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la récupération des question-réponse",err})  
    }
}
async function read(req,res){
    const question_awnserId=req.params.id;
    try{
        const question_awnser=await question_awnserService.find(question_awnserId);
        if(question_awnser){
            res.status(200).json(question_awnser);
        }
        else{
            res.status(404).json({message:"Question-réponse non trouvé"})
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la récupération de la question-réponse",error:err});
    }

}
async function create(req,res){
    const data=req.body;
    const sujetId=req.params.id; // Assurez-vous que l'ID du sujet est passé dans les paramètres de la requête
    data.sujet=sujetId;
    try{
        const createdquestion_awnser=await question_awnserService.create(data);
        if(createdquestion_awnser){
            res.status(201).json({message:"Question et réponse créés"});
        }
        else{
            res.status(400).json({message:'Erreur lors de l\'insertion'});
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la création de la question-réponse",error:err});
    }
}
async function update(req,res){
    const question_awnserId=req.params.id;
    try{
        const data=req.body;
        const updatequestion_awnser=await question_awnserService.update(question_awnserId,data);
        if(updatequestion_awnser){
            res.status(200).json({message:"Question et réponse édités",question:updatedquestion_awnser});
        }
        else{
            res.status(400).json({message:"Erreur lors de l'édition"})
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de l'édition de la question-réponse",error:err});
    }
}
async function remove(req,res){
    const question_awnserId=req.params.id;
    try{
        const removequestion_awnser=await question_awnserService.remove(question_awnserId);
        if(removequestion_awnser){
            res.status(200).json({message:"Question et réponse supprimés"});
        }
        else{
            res.status(400).json({message:"Erreur lors de la suppression "})
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la suppression de la question-réponse",error:err});
    }
}
module.exports={
    list,read,create,update,remove
}