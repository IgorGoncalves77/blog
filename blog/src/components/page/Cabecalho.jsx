import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@material-ui/icons/Add";
import FormPost from "../post/FormPost";

import { orderSuccess } from "../../redux/actions/orderActions";

const values = [
  {
    value: "1",
    label: "Vote Score",
  },
  {
    value: "2",
    label: "Date and Time",
  },
];

export default function Cabecalho({ title }) {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const order = useSelector((state) => state.orderPostsReducer.order);

  const handleChange = (event) => {
    dispatch(orderSuccess(event.target.value));
  };

  return (
    <div>
      <div>
        {isModalVisible ? (
          <FormPost
            onClose={() => setIsModalVisible(false)}
            post={""}
            description={"New Post"}
          />
        ) : null}

        <Typography sx={{ mb: 2.5, display: "inline-block" }} variant="h5">
          {title}
        </Typography>
        <Button
          sx={{ float: "right" }}
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => setIsModalVisible(true)}
        >
          New Post
        </Button>

        <TextField
          sx={{
            width: 200,
            mr: 2.5,
            float: "right",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(25, 118, 210, 0.5)",
              },
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
            },
            " & .MuiInputLabel-root": {
              color: "#1976d2",
            },
            " & .MuiSvgIcon-root": {
              color: "#1976d2",
            },
          }}
          id="outlined-size-small"
          select
          label="Sort by..."
          value={order}
          onChange={handleChange}
          size="small"
        >
          {values.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ color: "#1976d2" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <Divider sx={{ mb: 2.5 }} />
    </div>
  );
}
