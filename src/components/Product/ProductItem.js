import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Data from "../../data.json";
import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(() => ({
  main: {
    backgroundColor: "#efefef",
    height: "100vh",
    paddingTop: 90,
  },
  root: {
    maxWidth: 405,
    height: 400,
    margin: "0px auto",
  },
  media: {
    marginTop: 50,
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  button: {
    height: 38,
    backgroundColor: "#f19408",
    width: 400,
    margin: "10px auto",
    display: "block",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    fontSize: "1.2rem",
  },
}));

const ProductItem = () => {
  const classes = useStyles();
  const { id } = useParams();

  return (
    <motion.div
      style={{ backgroundColor: "#efefef" }}
      className={classes.main}
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      {Data.map((dataObj) =>
        id === dataObj.title ? (
          <Card className={classes.root} key={dataObj.title}>
            <CardHeader
              title={dataObj.title}
              subheader={`RS. ${dataObj.price}`}
            />
            <CardMedia className={classes.media} image={dataObj.img} />
          </Card>
        ) : null
      )}
      <button className={classes.button}>
        Add to Cart{" "}
        <span style={{ verticalAlign: "middle" }}>
          <ShoppingCartIcon />
        </span>
      </button>
    </motion.div>
  );
};

export default ProductItem;
