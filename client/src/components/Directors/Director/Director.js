import React from "react"
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Director = ({name, age, id}) => {
    return (
        <TableRow component="tr" >
            <TableCell component="th" scope="row">{name}</TableCell>
            <TableCell  align="right">{age}</TableCell>
            <TableCell align="right">{ "Movies"}</TableCell>
            <TableCell align="right">{id}</TableCell>
        </TableRow>
    )
};

export default Director