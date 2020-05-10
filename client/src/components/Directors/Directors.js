import React from "react"

import {gql} from 'apollo-boost';
import {graphql} from "react-apollo"
import MyTable from "../../Tools/MyTable";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const query = gql`
      query Directors{
        directors {name, age, movies{name, id}, id}}`


const cols = ["Name", "Age", "Movies", "Options"]
const cell = (row, col) => col === "movies" ?
    <List  dense={true}>
        {row["movies"].map(movie =>
            <ListItem key={movie.id}  >
                <ListItemText
                    primary={movie.name}
                />
            </ListItem>
        )}
    </List> : row[col]
const Directors = ({data}) => {

    return (<MyTable cols={cols} data={data.directors} cell={cell}/>
    )
};

export default graphql(query)(Directors)