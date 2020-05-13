import React, {useState} from "react"

import {graphql, useMutation, useQuery} from "react-apollo"
import MyTable from "../../Tools/MyTable";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AddDirector from "./Director/AddDirector";
import EditDirector from "./Director/EditDirector";
import {deleteDirectorsQuery, getDirectorsQuery} from "./DirectorQueries";


const cols = ["Name", "Age", "Movies", "Options"]
const cell = (row, col) => col === "movies" ?
    <List dense={true}>
        {row["movies"].map(movie =>
            <ListItem key={movie.id}>
                <ListItemText primary={movie.name}/>
            </ListItem>
        )}
    </List> : row[col]

const Directors = () => {
        const {loading, data} = useQuery(getDirectorsQuery)

    const [deleteDirector] = useMutation(deleteDirectorsQuery, {refetchQueries: [{query: getDirectorsQuery}]})
    const delDirectorMutation = (id)=>deleteDirector({variables:{id}})
    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [director, setDirector] = useState({name: "", age: ""})
if(loading) return <></>
    return (<>
            <MyTable  editCallback={setDirector} fabCallback={setOpenAdd} setOpenEdit={setOpenEdit}
                     cols={cols} data={data.directors} cell={cell} delete={delDirectorMutation}/>
            <AddDirector open={openAdd} setOpen={setOpenAdd}/>
            <EditDirector open={openEdit} setOpen={setOpenEdit} movie={director}/>
        </>
    )
};

export default graphql(getDirectorsQuery)(Directors)