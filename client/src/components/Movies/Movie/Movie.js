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

const Movie =React.memo( ({data, mutation, open, setOpen,    initialData, buttonName}) => {
    //TODO const [] = useMutation(addMovieMutation)

    const [formData, setFormData] = useState({name: "", genre: "", director: ""})
useEffect(()=>{
    if(initialData)setFormData(initialData)
}, [initialData])

    const handleClose = () => {
        setOpen(false)
    }
    const onChangeHandler = eve => {
        if (eve.target.id)
            setFormData({...formData, [eve.target.id]: eve.target.value})
        else
            setFormData({...formData, director: eve.target.value})
    }

    const addButtonHandler = ()=>{
        mutation(formData)
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="AddMovie">

            <DialogTitle id="AddMovieTitle">Add Movie <MovieIcon/></DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add new Movie enter all fields
                </DialogContentText>
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
                        value={formData.genre}
                        margin="dense"
                        id="genre" label="Genre"
                    />

                    <TextField id="director" label="Director" value={formData.director}
                               onChange={onChangeHandler} select>
                        {data.directors && data.directors.map(direct =>
                            <MenuItem key={direct.id} value={direct.id}>{direct.name}</MenuItem>)}

                    </TextField>

                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button type="submit" onClick={addButtonHandler} color="primary">
                    {buttonName}
                </Button>
            </DialogActions>
        </Dialog>
    )
})

export default compose(getDirectorsQuery)(Movie)