import React from 'react'

import {useMutation} from "@apollo/react-hooks";
import Director from "./Director";
import {addDirectorsQuery, getDirectorsQuery} from "../DirectorQueries";

const AddDirector = (props) => {
    const [addDirector] = useMutation(addDirectorsQuery, {refetchQueries:[{query: getDirectorsQuery}]})
     const addDirectorMutation = ({name, age})=>{
        addDirector({variables:{name, age:Number(age)}})

    }
    return <Director mutation={addDirectorMutation} title={"Add Movie"} submitName="Add"  {...props}/>
}

export default AddDirector
