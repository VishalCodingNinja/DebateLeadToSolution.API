import express from 'express';
import routes from './src/routes/commentRoutes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'



const app=express();
const PORT=4000;
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "DebateLeadToSolution.API.Comments",
        description: "DebateLeadToSolution API Comments API",
        contact: {
          name: "VishalCodingNinja"
        },
        servers: ["http://localhost:4000"]
      }
    },
    // ['.routes/*.js']
    apis: ["../DebateLeadToSolution.Comment.API/src/routes/commentRoutes.js"]
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


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
//app.use('/api-docs',swaggerUi.serve,swagger.setup(swaggerDocs));
//app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));    
routes(app);

//serving static files
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send(`Node and express is running on port ${PORT} `)
});

app.listen(PORT,()=>{
    console.log(`your server is running on port ${PORT}`)
})