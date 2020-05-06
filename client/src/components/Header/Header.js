import * as React from "react";
import {AppBar, Tabs} from "@material-ui/core";
import NavTab from "../../Tools/NavTab";
import {DIRECTORS_LINK, MOVIES_LINK} from "../../Tools/Paths";
import * as icon from "@material-ui/icons";
import {useState} from "react";


const Header  = ()=>{
    const  [tabValue, setTabValue] = useState(0)
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
return(    <AppBar position="static">
    <Tabs value={tabValue} onChange={handleChange} component="div" variant="fullWidth">
        <NavTab label="Movies"
                href={MOVIES_LINK}
                icon={<icon.Videocam/>}
        />
        <NavTab label="Directors"
                href={DIRECTORS_LINK}
                icon={<icon.Person/>}/>
    </Tabs>
</AppBar>)}

export default Header