import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentsRequest } from "../../../redux/actions/commentsActions";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";

import { addComment, updateComment } from "../../../api";

const mdTheme = createTheme();

const useStyles = makeStyles((theme) => ({
  modal: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "1300",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: 30,
    display: "flex",
    alignItems: "center",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const FormComment = ({ onClose, comment, description, idPost }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [id, setId] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (comment !== "") {
      setId(comment.comment.id);
      setBody(comment.comment.body);
      setAuthor(comment.comment.author);
    }
  }, [comment]);

  async function handleSubmit() {
    let fechar = false;
    const timestamp = Date.now();

    if (body !== "" && author !== "") {
      if (id === "") {
        const id = uuidv4();
        fechar = await addComment(id, timestamp, body, author, idPost);
      } else {
        fechar = await updateComment(id, timestamp, body);
      }
    } else {
      alert("Todos os campos são obrigatórios!");
    }

    if (fechar) {
      dispatch(commentsRequest(idPost));
      onClose();
    }
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <div className={classes.modal}>
          <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" gutterBottom>
                    {description}
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="body"
                        name="body"
                        label="Comment"
                        variant="standard"
                        required
                        fullWidth
                        rows={4}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      {comment === "" ? (
                        <TextField
                          id="author"
                          name="author"
                          label="Author"
                          variant="standard"
                          required
                          fullWidth
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                        />
                      ) : (
                        <TextField
                          disabled
                          id="author"
                          name="author"
                          label="Author"
                          variant="standard"
                          fullWidth
                          value={author}
                        />
                      )}
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Button
                        onClick={onClose}
                        variant="contained"
                        color="secondary"
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default FormComment;
