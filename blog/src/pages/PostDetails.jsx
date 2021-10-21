import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRequest } from "../redux/actions/postActions";
import { commentsRequest } from "../redux/actions/commentsActions";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Post from "../components/post/Post";

import Comment from "../components/post/comments/Comment";

export default function PostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector((state) => state.postReducer.post);
  const comments = useSelector((state) => state.commentsReducer.comments);

  useEffect(() => {
    dispatch(postRequest(id));
    dispatch(commentsRequest(id));
  }, [dispatch, id]);

  return (
    <div>
      <Typography sx={{ mb: 2.5, display: "inline-block" }} variant="h5">
        Details
      </Typography>
      <Divider sx={{ mb: 2.5 }} />
      <Post post={post} local={"Details"} />
      <Box sx={{ marginLeft: 5 }}>
        <Typography
          sx={{ mt: 2.5, mb: 2.5, display: "inline-block" }}
          variant="h6"
        >
          Comments
        </Typography>
        <Divider sx={{ mb: 2.5 }} />
        <Grid container spacing={{ xs: 3, md: 3 }} sx={{ mt: 3, mb: 3 }}>
          {comments.map((comment, index) => {
            return (
              <Grid item key={index}>
                <Comment comment={comment} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
