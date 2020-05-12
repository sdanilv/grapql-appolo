import React, {useEffect, useState} from "react"
import {graphql} from "react-apollo";

import MovieIcon from "@material-ui/icons/Videocam"
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import MenuItem from "@material-ui/core/MenuItem";
import {gql} from "apollo-boost";
//TODO import {useMutation} from "@apollo/react-hooks";
import {compose} from "recompose";

const getDirectorsQuery = graphql(gql`query{
directors{name, id}
} `)

const Director = React.memo(({ mutation, open, setOpen, initialData, title}) => {

    const [formData, setFormData] = useState({name: "", age: ""})

    useEffect(() => {
        if (initialData) setFormData(initialData)
    }, [initialData])

    const closeHandler = () => setOpen(false)
    const onChangeHandler = eve => setFormData({...formData, [eve.target.id]: eve.target.value})
   
    
    const submitButtonHandler = () => {
        mutation(formData)
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={closeHandler} aria-labelledby="AddMovie">
            <DialogTitle id="AddMovieTitle">{title} <MovieIcon/></DialogTitle>
            <DialogContent>
                <FormControl>
                    <TextField
                        onChange={onChangeHandler}
                        value={formData.name}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                    />
                    <TextField
                        onChange={onChangeHandler}
                        value={formData.age}
                        margin="dense"
                        id="age" label="Age"
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeHandler} color="primary">
                    Cancel
                </Button>
                <Button type="submit" onClick={submitButtonHandler} color="primary">
                    { }
                </Button>
            </DialogActions>
        </Dialog>
    )
})

export default Director