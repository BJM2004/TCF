const userService=require('../services/users');

async function list(req,res){
    try{
        const user=await userService.findAll();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la récupération des utilisateur",err})  }
}
async function read(req,res){
    const userId=req.params.id;
    try{
        const user=await userService.find(userId);
        if(sujet){
            res.status(200).json(sujet);
        }
        else{
            res.status(404).json({message:"Utilisateur non trouvé"})
        }
    
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la récupération de l'utilisateur",error:err});
    }

}
async function create(req,res){
    const data=req.body;
    try{
        const createdUser=await userService.create(data);
        if(createdUser){
            res.status(201).json({message:"Utilisateur créé"});
        }
        else{
            res.status(400).json({message:'Erreur lors de l\'insertion'});
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la création de l'utilisateur",error:err});
    }
}
async function login(req,res){
    const data=req.body;
    try{
        const user=await userService.login(data);
        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(404).json({message:"Utilisateur non trouvé"})
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la connexion",error:err});
    }
}
async function update(req,res){
    const userId=req.params.id;
    try{
        const data=req.body;
        const updateUser=await userService.update(userId,data);
        if(updateUser){
            res.status(200).json({message:"Utilisateur édité"});
        }
        else{
            res.status(400).json({message:"Erreur lors de l'édition"})
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de l'édition de l'utilisateur",error:err});
    }
}
async function remove(req,res){
    const userId=req.params.id;
    try{
        const removeUser=await userService.remove(userId);
        if(removeUser){
            res.status(200).json({message:"Utilisateur supprimé"});
    
        }
        else{
            res.status(400).json({message:"Erreur lors de la suppression "})
        }
    }
    catch(err){
        res.status(500).json({message:"Erreur lors de la suppression de l'utilisateur",error:err});
    }
}
module.exports={
    list,read,create,update,remove,login
}