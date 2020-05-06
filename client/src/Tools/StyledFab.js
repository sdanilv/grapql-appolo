import {createStyles, makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";


const useStyles = makeStyles((theme) =>
    createStyles({
        fab: {
            position: "absolute",
            marginTop: "20px",
            down: "10px",
            right: "10px"
        }
    }),
);

    const StyledFab = () =>{
const style = useStyles()

    return(<Fab size="medium" color="secondary" aria-label="add" className={style.fab}>
    <AddIcon />
    </Fab>)}

export default StyledFab