import React from "react";

const styles = {
  navStyle: {
    backgroundColor: "#1C1930",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  leftDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  logoStyle: {
    alignSelf: "flex-start",
    fontSize: "2rem",
    color: "white",
    padding: "10 10 10 10"
  },
  textStyle: {
    display: "inline-block",
    padding: "0 20",
    fontSize: "1.3rem",
    color: "white"
  }
};

const NavBar = () => {
  return (
    <div style={styles.navStyle}>
      <div style={styles.leftDiv}>
        <h1 style={styles.logoStyle}>D | P</h1>
        <p style={styles.textStyle}>Learn More</p>
        <p style={styles.textStyle}>Pricing</p>
        <p style={styles.textStyle}>Contact</p>
      </div>
      <div>
        <p style={styles.textStyle}>Login</p>
      </div>
    </div>
  );
};

export default NavBar;
