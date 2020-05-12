import React from 'react';
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import Dialog from "@material-ui/core/Dialog/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const DeleteDialog = ({open, setOpen, deleteCallback}) => {
    const classes = useStyles();
    const cancelHandler = ()=>setOpen(false)
    const deleteHandler = ()=>{
        deleteCallback()
        setOpen(false)
    }

    return <Dialog open={open}>
        <DialogTitle> Are you sure that you want to delete element?</DialogTitle>
        <div className={classes.root}>
            <Button onClick={()=>setOpen()} color="primary" startIcon={<CancelIcon/>}>
                Cancel
            </Button>
            <Button onClick={deleteHandler} color="secondary" startIcon={<DeleteIcon/>}>
                Delete
            </Button>
        </div>
    </Dialog>
};

export default DeleteDialog;
