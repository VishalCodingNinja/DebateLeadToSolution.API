import express from 'express';
import routes from './src/routes/commentRoutes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';





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


routes(app);

app.get('/',(req,res)=>{
    res.send(`Node and express is running on port ${PORT} `)
});

app.listen(PORT,()=>{
    console.log(`your server is running on port ${PORT}`)
})