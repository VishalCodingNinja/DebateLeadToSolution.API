import { addNewComment,
getComments,
getCommentsByID,
updateComments,
deleteComment
 } from '../controllers/commentController'

const routes= (app)=>{
    app.route('/comment')
    .get((req,res,next)=>{
        
        //middleware
        console.log(`From Where this url is coming from ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    },getComments)

    //Add new comment
    .post(addNewComment);
    
    app.route('/comment/:commentID')
    //get a specific contact
    .get(getCommentsByID)

    //update a specific contact
    .put(updateComments)

    //delete specific contact
    .delete(deleteComment);
}


export default routes;