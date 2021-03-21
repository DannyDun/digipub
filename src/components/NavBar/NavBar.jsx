import React from "react";

const styles = {
  navStyle: {
    backgroundColor: "#1C1930",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 40
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
    textDecoration: "none",
    marginRight: "80px"
  },
  textStyle: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "1.3rem",
    color: "white",
    textDecoration: "none"
  },
  loginStyle: {
    fontSize: "1.3rem",
    color: "white"
  }
};

const NavBar = () => {
  const navComponents = [
    { label: "D | P", link: "#" },
    { label: "Learn More", link: "#" },
    { label: "Pricing", link: "#" },
    { label: "Contact", link: "#" }
  ];

  return (
    <div style={styles.navStyle}>
      <div style={styles.leftDiv}>
        {navComponents.map(({ link, label }) => (
          <a
            href={link}
            style={label === "D | P" ? styles.logoStyle : styles.textStyle}
          >
            {label}
          </a>
        ))}
      </div>
      <div>
        <a style={styles.loginStyle} href="#">
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
