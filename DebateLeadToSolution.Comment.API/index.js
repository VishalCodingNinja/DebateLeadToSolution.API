import express from 'express';
import routes from './src/routes/commentRoutes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json';




const app=express();
const PORT=4000;



//mongoose connection
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/CommentDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//bodyParser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//add swagger documentation
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));    
routes(app);

//serving static files
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send(`Node and express is running on port ${PORT} `)
});

app.listen(PORT,()=>{
    console.log(`your server is running on port ${PORT}`)
})