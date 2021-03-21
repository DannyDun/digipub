import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import LandingImage from "../../assets/DemoImage.png";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#1C1930",
    color: "white",
    height: "750px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageComponent: {
    width: "700px",
    height: "500px",
    margin: "100px 50px",
  },
  headerComponent: {
    margin: "100px 50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "300px",
  },
  headerTitle: {
    fontWeight: 600,
    fontSize: 40,
  },
  headerPar: {
    margin: "25px 0",
    fontWeight: 100,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#3CADFF",
    padding: "20px 50px",
    borderRadius: 20,
    overflow: "none",
    color: "white",
    fontSize: "1.3rem",
    margin: "10px 0",
    border: "none",
    boxShadow: "0 0 10px #3CADFF",
    "&:hover": {
      backgroundColor: "#3CADFF",
    },
  },
});

const LandingPage = () => {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <img
        className={styles.imageComponent}
        src={LandingImage}
        alt="mainImage"
      />
      <div className={styles.headerComponent}>
        <h2 className={styles.headerTitle}>
          Split any song into its track components!
        </h2>
        <p className={styles.headerPar}>
          Easily get vocals, drums, bass and other stems from your songs.
        </p>
        <Button variant="contained" color="primary" className={styles.button}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
