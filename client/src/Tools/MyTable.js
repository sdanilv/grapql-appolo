import React from "react";
import {Paper, Typography} from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody";
import StyledFab from "./StyledFab";


const MyTable = props =>
    <Typography component="div">
        <TableContainer component={Paper}>
            <Table component="table" aria-label="simple table">
                <TableHead component="thead">
                    <TableRow component="tr">
                        {props.cols.map(col => <TableCell key={col}>{col}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody component="tbody">{props.data.map((row) => (
                    <TableRow key={row.id} component="tr">
                        {Object.keys(row).map((key) =>
                            key !== "id" && <TableCell key={key}>
                                {typeof row[key] === "object" ? row[key]["name"] : row[key]}
                            </TableCell>)}
                        <TableCell>{row.id}</TableCell>
                    </TableRow>
                ))}</TableBody>
            </Table>
        </TableContainer>
        <StyledFab/>
    </Typography>

export default MyTable