import React, {useState} from "react"
import MyTable from "../../Tools/MyTable";
import {gql} from "apollo-boost";
import {graphql} from "react-apollo";
import AddMovie from "./Movie/AddMovie";
import EditMovie from "./Movie/EditMovie";
import {compose} from "recompose";
import {getMoviesQuery} from "./getMoviesQuery ";

const cols = ["Name", "Genre", "Director", "Options"]

const getMoviesHOC = graphql(getMoviesQuery)
const deleteMovieHOC = graphql(gql`
mutation deleteMovie($id: ID!){
deleteMovie(id:$id){name}}`,
    {
        props: props => ({
            deleteMovie: id => props.mutate({variables: {id}})
        }),
        options:{refetchQueries: [{query: getMoviesQuery}]}

    })
const cell = (row, key) => typeof row[key] === "object" ? row[key]["name"] : row[key] !== "Movie" && row[key]

const Movies = ({data, deleteMovie}) => {

    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [movie, setMovie] = useState({name: "", genre: "", director: ""})

    return (<>
            <MyTable editCallback={setMovie} fabCallback={setOpenAdd} setOpenEdit={setOpenEdit}
                     cols={cols} data={data.movies} cell={cell} delete={deleteMovie}/>
            <AddMovie open={openAdd} setOpen={setOpenAdd}/>
            <EditMovie open={openEdit} setOpen={setOpenEdit} movie={movie}/>
        </>
    )
}

export default compose(getMoviesHOC, deleteMovieHOC)(Movies)