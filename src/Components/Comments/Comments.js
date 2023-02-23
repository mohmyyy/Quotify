import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../Hooks/use-http";
import { getAllComments } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { status, sendRequest, data: loadedComments } = useHttp(getAllComments);
  const { quoteId } = params; 

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  },[sendRequest,quoteId]);

  let comments;
  if(status === 'pending'){
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }

  if(status === 'completed' && (loadedComments && loadedComments.length)){
    comments = <CommentList comments={loadedComments} />
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
   comments = <p className="centered">NO COMMENTS ADDED YET!</p> 
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
