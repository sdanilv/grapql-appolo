import React, {useState} from "react"
import MyTable from "../../Tools/MyTable";
import {graphql} from "react-apollo";
import AddMovie from "./Movie/AddMovie";
import EditMovie from "./Movie/EditMovie";
import {compose} from "recompose";
import {deleteMovieQuery, getMoviesQuery} from "./MoviesQuery";

const cols = ["Name", "Genre", "Director", "Options"]

const getMoviesHOC = graphql(getMoviesQuery)
const deleteMovieHOC = graphql(deleteMovieQuery,
    {
        props: props => ({
            deleteMovie: id => props.mutate({variables: {id}})
        }),
        options:{refetchQueries: [{query: getMoviesQuery}]}

    })
const cell = (row, key) => key === "director"&&row[key] ? row[key]["name"] : row[key] !== "Movie" && row[key]

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