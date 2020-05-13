import React from 'react'

import Director from "./Director";

const EditDirector = ({movie, ...props}) => {
        let initialData = {}
        if(movie.director)
            initialData = {...movie, director: movie.director.id}

        return  <Director initialData={initialData} title={"Edit Movie"} buttonName="Save"  {...props}/>
    }

    export default EditDirector
