import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const useStyles = makeStyles(() => ({
  main: {
    marginTop: 90,
  },
  root: {
    maxWidth: 405,
    height: 400,
  },
  media: {
    marginTop: 50,
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function Cards({ img, price, title, category }) {
  const classes = useStyles();
  return (
    <motion.div whileHover={{ scale: 1.2 }} className={classes.main}>
      <Link to={`/${category}/${title}`}>
        <Card className={classes.root}>
          <CardHeader title={title} subheader={`RS. ${price}`} />
          <CardMedia className={classes.media} image={img} />
        </Card>
      </Link>
    </motion.div>
  );
}
