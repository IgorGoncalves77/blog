import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryRequest } from "../redux/actions/categoryActions";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Cabecalho from "../components/page/Cabecalho";
import Post from "../components/post/Post";

const PostsByCategory = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const posts = useSelector((state) => state.categoryReducer.posts);
  const order = useSelector((state) => state.orderPostsReducer.order);

  useEffect(() => {
    dispatch(categoryRequest(category));
  }, [dispatch, category]);

  function compareVoteScore(a, b) {
    if (a.voteScore < b.voteScore) return 1;
    if (a.voteScore > b.voteScore) return -1;
  }

  function compareTimestamp(a, b) {
    if (a.timestamp < b.timestamp) return 1;
    if (a.timestamp > b.timestamp) return -1;
  }

  if (order === "1") {
    posts.sort(compareVoteScore);
  } else if (order === "2") {
    posts.sort(compareTimestamp);
  }

  return (
    <div>
      <Cabecalho title={category} />
      <Grid container spacing={{ xs: 3, md: 3 }} sx={{ mt: 3, mb: 3 }}>
        {posts.map((post, index) => {
          return (
            <Grid item key={index}>
              <Post post={post} local={"Category"} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PostsByCategory;
