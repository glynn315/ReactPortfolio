import "./navigation.scss";
import "bootstrap/dist/css/bootstrap.css";

function navigation() {
  return (
    <div className="navigationLinks">
        <div className="iconDisplay">
            <img src="./logo.png" alt="" />
        </div>
        <div className="navCon">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#project">PROJECT</a>
            <a href="#contact">CONTACT</a>
        </div>
    </div>
  );
}

export default navigation;
