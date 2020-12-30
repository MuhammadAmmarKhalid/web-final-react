import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "./../../services/ProductsService";
const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [fee, setFee] = React.useState(0);
  const [image, setimage] = React.useState("");

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add New Equipments</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
          <TextField
          label="Fee"
          fullWidth
          value={fee}
          onChange={(e) => {
            setFee(e.target.value);
          }}
        />
        <TextField
          label="image"
          fullWidth
          value={image}
          onChange={(e) => {
            setimage(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            productService
              .addProduct({ name, fee,image })
              .then((data) => {
                console.log(data);
                props.history.push("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewProduct;
