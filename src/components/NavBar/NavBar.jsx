import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navStyle: {
    backgroundColor: "#1C1930",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 40,
  },
  leftDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoStyle: {
    alignSelf: "flex-start",
    fontSize: "2rem",
    color: "white",
    textDecoration: "none",
    marginRight: "80px",
  },
  textStyle: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "1.3rem",
    color: "white",
    textDecoration: "none",
  },
  loginStyle: {
    fontSize: "1.3rem",
    color: "white",
  },
});

const NavBar = () => {
  const navComponents = [
    { label: "D | P", link: "#" },
    { label: "Learn More", link: "#" },
    { label: "Pricing", link: "#" },
    { label: "Contact", link: "#" },
  ];
  const styles = useStyles();

  return (
    <div className={styles.navStyle}>
      <div className={styles.leftDiv}>
        {navComponents.map(({ link, label }) => (
          <a
            href={link}
            className={label === "D | P" ? styles.logoStyle : styles.textStyle}
          >
            {label}
          </a>
        ))}
      </div>
      <div>
        <a className={styles.loginStyle} href="#">
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
