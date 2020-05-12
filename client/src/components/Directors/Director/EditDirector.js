import React from 'react'
import Movie from "../../Movies/Movie/Movie"

const EditDirector = ({movie, ...props}) => {
        let initialData = {}
        if(movie.director)
            initialData = {...movie, director: movie.director.id}

        return  <Movie initialData={initialData} title={"Edit Movie"} buttonName="Save"  {...props}/>
    }

    export default editMovieMutation(EditDirector)
