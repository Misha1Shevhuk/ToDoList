import React from "react";
import MenuProjects from "./Projects/MenuProjects";
import classes from "./Menu.module.css";

 const Menu = () => (
      <div className={classes.menu}>
        <MenuProjects  />
      </div>
    );

 export default Menu;