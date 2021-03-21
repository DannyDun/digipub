import React from "react";

const styles = {
  main: {
    backgroundColor: "#1C1930",
    color: "white",
    height: "750px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  imageComponent: {
    width: "700px",
    height: "500px",
    margin: "100px 50px"
  },
  headerComponent: {
    margin: "100px 50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "300px"
  },
  headerTitle: {
    fontWeight: 600,
    fontSize: 40
  },
  headerPar: {
    margin: "25px 0",
    fontWeight: 100,
    fontSize: 20
  },
  button: {
    backgroundColor: "#3CADFF",
    padding: "20px 50px",
    borderRadius: 20,
    overflow: "none",
    color: "white",
    fontSize: "1.3rem",
    margin: "10px 0",
    width: "70%",
    border: "none",
    boxShadow: "0 0 10px #3CADFF"
  }
};

const LandingPage = () => {
  return (
    <div style={styles.main}>
      <img
        style={styles.imageComponent}
        src={require("../../assets/DemoImage.png")}
        alt="mainImage"
      />
      <div style={styles.headerComponent}>
        <h2 style={styles.headerTitle}>
          Split any song into its track components!
        </h2>
        <p style={styles.headerPar}>
          Easily get vocals, drums, bass and other stems from your songs.
        </p>
        <button style={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
