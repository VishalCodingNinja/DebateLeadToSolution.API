import { addNewComment } from '../controllers/commentController'

const routes= (app)=>{
    app.route('/comment')
    .get((req,res,next)=>{
        //middleware
        console.log(`From Where this url is coming from ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    },(req,res,next)=>{
        res.send('GET request sucessful!')
    })

    // .post((req,res)=>{
    //     res.send('POST request sucessful!')
    // })
    .post(addNewComment);
    
    app.route('/comment/:commentID')
    .put((req,res)=>{
        res.send('PUT request sucessful!')
    })

    .delete((req,res)=>{
        res.send('DELETE request sucessful!')
    })
}


export default routes;