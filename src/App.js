import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function App() {
  const classes = useStyles();
  const [multiForm, setMultiForm] = useState([
    {
      product_id: "",
      count: ""
    }
  ]);

  const handleText = (e, i, f) => {
    let tmp = [...multiForm];
    tmp[i][f] = e.target.value;

    console.log("tmp ", tmp);
    setMultiForm(tmp);
  };

  const handleDelete = i => {
    let tmp = [...multiForm];
    tmp.splice(i, 1);
    setMultiForm(tmp);
  };

  const MultiForm = () => {
    return (
      <div>
        {multiForm.map((x, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              id="standard-basic"
              label="Standard"
              onChange={e => handleText(e, i, "product_id")}
            />
            <TextField
              id="standard-basic"
              label="Standard"
              onChange={e => handleText(e, i, "count")}
            />
            <Button onClick={() => handleDelete(i)}>Delete</Button>
          </div>
        ))}
      </div>
    );
  };

  const handleAdd = () => {
    let tmp = {
      product_id: "",
      count: ""
    };
    let temp = [...multiForm, tmp];
    setMultiForm(temp);
  };

  const SubmitAdd = () => {
    console.log("please state", multiForm);
  };

  console.log("handle add", multiForm);
  return (
    <div className="App">
      <h1>Multiform Example</h1>
      {MultiForm()}
      <Button onClick={() => handleAdd()}>Add</Button>
      <Button onClick={() => SubmitAdd()}>Add</Button>
    </div>
  );
}
