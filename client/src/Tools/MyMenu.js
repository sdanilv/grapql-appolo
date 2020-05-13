import React, {useState} from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteDialog from "./DeleteDialog";


const MyMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null)
 const deleteCallback = () =>{
     props.delete(props.id)}
    const handleEdit = () => {
        props.editCallback()
        handleClose()
    };
    const handleDelete = () => {
        setOpenDeleteDialog(true)
        handleClose()
    };


    return (
        <div>
            <IconButton aria-label="more" aria-controls="long-menu"
                        aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="simple-menu" anchorEl={anchorEl} keepMounted
                open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleEdit}>Edit&#8195;<EditIcon color="primary"/></MenuItem>
                <MenuItem onClick={handleDelete}>Delete<DeleteIcon color="error"/></MenuItem>
            </Menu>
            <DeleteDialog deleteCallback={deleteCallback} open={openDeleteDialog}
                          setOpen={setOpenDeleteDialog}/>
        </div>
    );
}


export default MyMenu