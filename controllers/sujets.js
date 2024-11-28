const sujetService=require('../services/sujets');

async function list(req,res){
    try{
        const sujets=await sujetService.findAll();
        res.status(200).json(sujets);
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la récupération des sujets",err})  
    }
}
async function read(req,res){
    const sujetId=req.params.id;
    try{
        const sujet=await sujetService.find(sujetId);
        if(sujet){
            res.status(200).json(sujet);
        }
        else{
            res.status(404).json({message:"Sujet non trouvé"})
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la récupération du sujet",error:err});
    }
}
async function create(req,res){
    const data=req.body;
    console.log('data:',data);
        
    try{
        const createdSujet=await sujetService.create(data);
        if(createdSujet){
            res.status(201).json({message:"Sujet créé"});
        }
        else{
            res.status(400).json({message:'Erreur lors de l\'insertion'});
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la création du sujet",error:err});
    }
}
async function update(req,res){
    const sujetId=req.params.id;
    try{
        const data=req.body;
        const updateSujet=await sujetService.update(sujetId,data);
        if(updateSujet){
            res.status(200).json({message:"Sujet édité"});
        }
        else{
            res.status(400).json({message:"Erreur lors de l'édition"})
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de l'édition du sujet",error:err});
    }
}
async function remove(req,res){
    const sujetId=req.params.id;
    try{
        const removeSujet=await sujetService.remove(sujetId);
        if(removeSujet){
            res.status(200).json({message:"Sujet supprimé"});
        }
        else{
            res.status(400).json({message:"Erreur lors de la suppression "})
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la suppression du sujet",error:err});
    }
}
module.exports={
    list,read,create,update,remove
}