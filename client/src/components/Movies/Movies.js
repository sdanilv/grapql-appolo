import React, {useState} from "react"
import MyTable from "../../Tools/MyTable";
import {gql} from "apollo-boost";
import {graphql} from "react-apollo";
import AddMovie from "./Movie/AddMovie";
import EditMovie from "./Movie/EditMovie";

const cols = ["Name", "Genre", "Director", "Options"]
const getMoviesHOC = graphql(gql`query Movies{ movies { name, genre, director{name, id}, id }} `)
const deleteMovieHOC =graphql(gql`
mutation deleteMovie($id: ID!){}`)
const cell = (row, key) => typeof row[key] === "object" ? row[key]["name"] : row[key] !== "Movie" && row[key]

const Movies = ({data}) => {

    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [movie, setMovie] = useState({name: "", genre: "", director: ""})

    return (<>
            <MyTable editCallback={setMovie} fabCallback={setOpenAdd} setOpenEdit={setOpenEdit}
                     cols={cols} data={data.movies} cell={cell}/>
            <AddMovie open={openAdd} setOpen={setOpenAdd}/>
            <EditMovie open={openEdit} setOpen={setOpenEdit} movie={movie}/>
        </>
    )
}

export default getMoviesHOC(Movies)