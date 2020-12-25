import React from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "../Card/Card";
import Data from "../../data.json";
import { motion } from "framer-motion";
const Women = () => {
  return (
    <motion.div
      style={{ backgroundColor: "#efefef" }}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <h1 style={{ textAlign: "center", margin: 0, paddingTop: 60 }}>
        Women's Wear
      </h1>
      <Grid container>
        <Grid item xs={false} sm={2} />

        <Grid container item xs={12} sm={8} spacing={4}>
          {Data.map((dataObj) =>
            dataObj.category === "women" ? (
              <Grid item xs={12} sm={6} md={4} key={dataObj.title}>
                <Cards
                  img={dataObj.img}
                  price={dataObj.price}
                  title={dataObj.title}
                  category={dataObj.category}
                />
              </Grid>
            ) : null
          )}
        </Grid>

        <Grid item xs={false} sm={2} />
      </Grid>
    </motion.div>
  );
};
export default Women;
