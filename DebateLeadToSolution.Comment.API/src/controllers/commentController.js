import { mongoose  } from 'mongoose';
import { CommentSchema } from '../models/commentModel'
const Comment= mongoose.model('Comment',CommentSchema);


export const addNewComment=(req,res)=>{
    let newComment=new Comment(req.body);

    newComment.save((err,comment)=>{
        if(err){
            res.send(err);
        }
       res.json(comment);  
    });
}