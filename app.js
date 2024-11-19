const express=require('express');
const routes=require('./routes');
const connect=require('./data/DB_connection');
const cors=require('cors');
const app=express();
// Middleware pour parser les corps des requêtes JSON
app.use(express.json());
const hostname='127.0.0.1';
const port=process.env.Port||3000;
connect();
app.use('/api',routes);
app.use(cors(
    {
        origin:'*',//accepter toutes les requetes
        methods:['GET','POST','PUT','DELETE'],//accepter les methodes
        allowedHeaders:['Content-Type','Authorization']//accepter les headers
    }
));
app.listen(port,hostname,()=>{
    console.log(`Le server joue sur http://${hostname}:${port}`);
    
})