import React from "react"
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";

const Movie = ({name, genre, id, directorId}) => {
    return (
        <TableRow component="tr">
            <TableCell>{name}</TableCell>
            <TableCell align="right">{genre}</TableCell>
            <TableCell align="right">{directorId}</TableCell>
            <TableCell align="right">{id}</TableCell>
        </TableRow>
    )
};

export default Movie