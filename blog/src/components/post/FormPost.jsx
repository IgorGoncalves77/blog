import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postsRequest } from "../../redux/actions/postsActions";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";

import { getCategories, addPost, updatePost } from "../../api";

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

const FormPost = ({ onClose, post, description }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(function (data) {
      setCategories(data.categories);
      if (post !== "") {
        setId(post.post.id);
        setTitle(post.post.title);
        setBody(post.post.body);
        setAuthor(post.post.author);
        setCategory(post.post.category);
      }
    });
  }, [post]);

  async function handleSubmit() {
    let fechar = false;

    if (title !== "" && body !== "" && author !== "" && category !== "") {
      if (id === "") {
        const id = uuidv4();
        const timestamp = Date.now();
        fechar = await addPost(id, timestamp, title, body, author, category);
      } else {
        fechar = await updatePost(id, title, body);
      }
    } else {
      alert("Todos os campos são obrigatórios!");
    }

    if (fechar) {
      dispatch(postsRequest(id, category));
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
                        id="title"
                        name="title"
                        label="Title"
                        variant="standard"
                        required
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="body"
                        name="body"
                        label="Body"
                        variant="standard"
                        required
                        fullWidth
                        rows={4}
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {post === "" ? (
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
                    <Grid item xs={12} sm={6}>
                      {post === "" ? (
                        <FormControl fullWidth required>
                          <InputLabel id="labelTipo">Category</InputLabel>
                          <Select
                            labelId="labelTipo"
                            id="category"
                            variant="standard"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            {categories.map((categorie, index) => (
                              <MenuItem key={index} value={categorie.path}>
                                {categorie.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      ) : (
                        <TextField
                          disabled
                          id="category"
                          name="category"
                          label="category"
                          variant="standard"
                          fullWidth
                          value={category}
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

export default FormPost;
