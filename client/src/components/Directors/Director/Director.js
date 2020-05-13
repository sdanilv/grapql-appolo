import React, {useEffect, useState} from "react"


import DirectorIcon from "@material-ui/icons/Person"

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";


const Director = React.memo(({ mutation, open, setOpen, initialData, title, submitName}) => {

    const [formData, setFormData] = useState({name: "", age: ""})

    useEffect(() => {
        if (initialData) setFormData(initialData)
    }, [initialData])

    const closeHandler = () => setOpen(false)
    const onChangeHandler = ({target}) =>
        setFormData({...formData, [target.id]: target.value})
    const submitButtonHandler = () => {
        mutation(formData)
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={closeHandler}>
            <DialogTitle>{title} <DirectorIcon/></DialogTitle>
            <DialogContent>
                <FormControl>
                    <TextField onChange={onChangeHandler} value={formData.name}
                        autoFocus margin="dense" id="name" label="Name"/>
                    <TextField onChange={onChangeHandler} value={formData.age}
                        margin="dense" id="age" label="Age"/>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeHandler} color="primary">
                    Cancel
                </Button>
                <Button type="submit" onClick={submitButtonHandler} color="primary">
                    {submitName}
                </Button>
            </DialogActions>
        </Dialog>
    )
})

export default Director