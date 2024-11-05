import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Comment from "../others/Comment.jsx";
import { getAllComments } from '/src/api/comments.api.js';
import {calculateTime} from '/src/utils/calculateTime.js';

const Comments = () => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    async function loadComments() {
      const comments = await getAllComments();
      console.log(comments);
      setCommentsList(comments);
    }

    loadComments();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      {commentsList.slice().reverse().map((comment) => (
        <Comment
          key={comment.id}
          icon={comment.user[0].toUpperCase()}
          user={comment.user}
          time={calculateTime(comment.created_at)}
          text={comment.content}
        />
      ))}
    </Box>
  );
};

export default Comments;
