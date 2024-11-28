const User=require('../data/users');
async function findAll(){
    return await User.find();
}
async function find(userId){
    return await User.findById(userId);
}
async function create(data) {
    const user = new User(data);
    try {
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ email: data.email });
      if (existingUser) {
        return { message: 'Utilisateur déjà existant' };
      }
  
      // Sauvegarder l'utilisateur
      await user.save();
  
      // Générer un token JWT
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
  
      return { user, token };
    } catch (error) {
      return { message: 'Erreur lors de la création de l\'utilisateur', error };
    }
  }
  async function login(data) {
    try {
      // Vérifier si l'utilisateur existe
      const user = await User.findOne({ email: data.email });
      if (!user) {
        return { message: 'Utilisateur non trouvé' };
      }
      const validPassword = await bcrypt.compare(data.password, user.password);
      if (!validPassword) {
        return { message: 'Mot de passe incorrect' };
      }
      // Générer un token JWT
      const token = jwt.sign({ userId: user._id },'your-secret-key', { expiresIn: '1h' });
      return { user, token };
    }catch (error) {
      return { message: 'Erreur lors de la connexion', error };
    }
  }
  async function update(userId,data){
    return await User.findByIdAndUpdate(userId,data,{new:true});
}
async function remove(userId){
    return await User.findByIdAndRemove(userId);
}
module.exports={
    findAll,find,create,update,remove,login
}