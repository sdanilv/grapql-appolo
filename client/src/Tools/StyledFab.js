import {createStyles, makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";


const useStyles = makeStyles(() =>
    createStyles({
        fab: {
            position: "sticky",
            margin: "20px",
            bottom: "10px"

        }
    }),
);

    const StyledFab = () =>{
const style = useStyles()

    return(<Fab component="button" size="medium" color="secondary" aria-label="add" className={style.fab}>
    <AddIcon component="span"/>
    </Fab>)}

export default StyledFab