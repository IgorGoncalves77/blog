import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Tooltip from "@material-ui/core/Tooltip";
import CardActionArea from "@material-ui/core/CardActionArea";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AddCommentIcon from "@material-ui/icons/AddComment";

import FormPost from "./FormPost";
import FormComment from "./comments/FormComment";

import { postDeleteRequest } from "../../redux/actions/postDeleteActions";
import { postVoteRequest } from "../../redux/actions/postVoteActions";

export default function Post({ post, local }) {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalCommentsVisible, setIsModalCommentsVisible] = useState(false);

  function dataAtualFormatada(timestamp) {
    let data = new Date(timestamp);
    return data.toDateString();
  }

  function handleDelete() {
    dispatch(postDeleteRequest(post));
  }

  function handleUpVote() {
    dispatch(postVoteRequest(post, "upVote"));
  }

  function handleDownVote() {
    dispatch(postVoteRequest(post, "downVote"));
  }

  return (
    <div>
      {isModalVisible ? (
        <FormPost
          onClose={() => setIsModalVisible(false)}
          post={{ post }}
          description={"Edit Post"}
        />
      ) : null}

      {isModalCommentsVisible ? (
        <FormComment
          onClose={() => setIsModalCommentsVisible(false)}
          comment={""}
          description={"New Comment"}
          idPost={post.id}
        />
      ) : null}
      <Badge badgeContent={post.voteScore} max={99} color="primary">
        <Card>
          {local === "Details" ? (
            <CardContent sx={{ minWidth: "50vw", maxWidth: "100vw" }}>
              <CardActionArea
                component={Link}
                to={"/" + post.category + "/" + post.id}
              >
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="body2">
                  {dataAtualFormatada(post.timestamp)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardActionArea>
            </CardContent>
          ) : (
            <CardContent sx={{ maxWidth: 300 }}>
              <CardActionArea
                component={Link}
                to={"/" + post.category + "/" + post.id}
              >
                <Typography
                  variant="h5"
                  component="div"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  maxHeight={30}
                >
                  {post.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="body2">
                  {dataAtualFormatada(post.timestamp)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  overflow="hidden"
                  whiteSpace="pre-line"
                  textOverflow="ellipsis"
                  maxHeight={80}
                >
                  {post.body}
                </Typography>
              </CardActionArea>
            </CardContent>
          )}
          <CardActions>
            <Box
              sx={{
                borderTop: "1px solid rgba(25, 118, 210, 0.5)",
                background: "#1976d211",
                maxHeight: 40,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup
                sx={{
                  maxHeight: 22,
                }}
                variant="text"
                aria-label="text button group"
                fullWidth
              >
                <Tooltip title="Edit">
                  <Button onClick={() => setIsModalVisible(true)}>
                    <EditIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button onClick={handleDelete}>
                    <DeleteIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Vote Up">
                  <Button aria-label="increase" onClick={handleUpVote}>
                    <ThumbUpIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Vote Down">
                  <Button aria-label="reduce" onClick={handleDownVote}>
                    <ThumbDownIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Add Comment">
                  <Button onClick={() => setIsModalCommentsVisible(true)}>
                    <AddCommentIcon />
                    {post.commentCount}
                  </Button>
                </Tooltip>
              </ButtonGroup>
            </Box>
          </CardActions>
        </Card>
      </Badge>
    </div>
  );
}
