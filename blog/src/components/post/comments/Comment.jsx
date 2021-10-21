import React, { useState } from "react";
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

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import FormComment from "./FormComment";

import { commentDeleteRequest } from "../../../redux/actions/commentDeleteActions";
import { commentVoteRequest } from "../../../redux/actions/commentVoteActions";

export default function Comment({ comment }) {
  const dispatch = useDispatch();
  const [isModalCommentsVisible, setIsModalCommentsVisible] = useState(false);

  function handleDelete() {
    dispatch(commentDeleteRequest(comment));
  }

  function handleUpVote() {
    dispatch(commentVoteRequest(comment, "upVote"));
  }

  function handleDownVote() {
    dispatch(commentVoteRequest(comment, "downVote"));
  }

  return (
    <div>
      {isModalCommentsVisible ? (
        <FormComment
          onClose={() => setIsModalCommentsVisible(false)}
          comment={{ comment }}
          description={"Edit Comment"}
          idPost={comment.parentId}
        />
      ) : null}
      <Badge badgeContent={comment.voteScore} max={99} color="primary">
        <Card sx={{ minWidth: "50vw", maxWidth: "100vw" }}>
          <CardContent>
            <Typography variant="h6" component="div">
              by {comment.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {comment.body}
            </Typography>
          </CardContent>
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
                  <Button onClick={() => setIsModalCommentsVisible(true)}>
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
              </ButtonGroup>
            </Box>
          </CardActions>
        </Card>
      </Badge>
    </div>
  );
}
