voici l'api qui permet de gerer le CRUD de l'application TCF
Comme on peut le constater dans le fichier app.js le serveur fonctionne sur http://129.0.0.1:5000, et  a partir de cette connection différentes actions peuvent etre effectuer.
La route de l'API esst http://129.0.0.1:5000/api et de lui découle de nombeuses autres routes comme le montre le fichier routes/index.js et ce meme fichier permet de rejoindre d'autres routes contenus dans le dossier routes.
Chacun des fichiers contenus dans le dossier routes permet de relier les routes au controllers. Par exemples pour récuperer tous les sujets dans la BDD on aura juste à écrire: http://129.0.0.1:5000/api/sujets/, et les résultat ce veront dans le front-End.
Pour par exemple créer un utilisateur on aura juste à écrire: http://129.0.0.1:5000/api/users/register. Bref a chacun de ces adresses entréees le programme va aller exécuter de manière asynchrone les fonctions contenu
dans le dossier controlleur ce qui nous assure un bon modele MVC; chacune des fonctions contenus dans le dossier controllers va chercher à son tour les ressources necesaires au programme dans l'une des fonctions contenus dans le dossier services
Par exemple, pour la commande http://129.0.0.1:5000/api/users/register qui permet de créer un utilisateur la partie /users va etre séléctionne dans index.js  et index.js lui meme va chercher dans users.js, puis lui-meme va chercer dans controllers/users.js
qui va selectinner la fonction asynchronne create qui elle-meme fait appelle a la fontion  create contenue dans services/users.js. c'est ainsi donc que le code communique. Voici un exemple pour le front-End:

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/register', formData);
            console.log(response.data);
            alert('Utilisateur créé avec succès');
        } catch (error) {
            console.error(error);
            alert('Erreur lors de la création de l\'utilisateur');
        }
    };

    return (
        <div>
            <h2>Créer un utilisateur</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Mot de passe:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Register;
