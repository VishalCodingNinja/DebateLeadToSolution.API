import { addNewComment,
getComments,
getCommentsByID,
updateComments,
deleteComment
 } from '../controllers/commentController'






const routes= (app)=>{


     // Routes
/**
 * @swagger
 * /comment:
 *  get:
 *    description: Use to request all comment
 *    responses:
 *      '200':
 *        description: A successful response
 */
    app.route('/comment')
    .get((req,res,next)=>{
        
        //middleware
        console.log(`From Where this url is coming from ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    },getComments)

    

/**
 * @swagger
 * /comment:
 *  post:
 *    description: Use to create new comment
 *    responses:
 *      '200':
 *        description: A successful response
 */

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