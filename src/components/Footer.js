import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 Isaac Rodríguez</p>
    </div>
  );
}

export default Footer;