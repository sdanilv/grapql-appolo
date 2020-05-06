import {Tab} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import React from "react";

const NavTab = (props) =>
    <Tab {...props}
         component={React.forwardRef((props,ref ) => <NavLink ref={ref} {...props} to={props.href}>{props.children}</NavLink>)}
    />

export default NavTab;