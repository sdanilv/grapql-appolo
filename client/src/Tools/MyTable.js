import React from "react";
import {Paper} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody";
import StyledFab from "./StyledFab";
import MyMenu from "./MyMenu";
import Container from "@material-ui/core/Container";

const MyTable = props => {
    const editCallback = (data) => {
        props.setOpenEdit(true)
        props.editCallback(data)
    }

    if (!props.data) return (<LinearProgress />)
    return (<>
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead  >
                    <TableRow >
                        {props.cols.map(col => <TableCell variant="head" key={col}>{col}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody >{props.data.map((row) => (
                    <TableRow key={row.id} >
                        {Object.keys(row).map((key) =>
                            key !== "id" && key !== "__typename" &&
                            <TableCell key={key}>
                                {props.cell(row, key)}
                            </TableCell>)}
                        <TableCell><MyMenu editCallback={()=>editCallback(row)} id={row.id} /></TableCell>
                    </TableRow>
                ))}</TableBody>
            </Table>
        </TableContainer>
        <StyledFab callback={props.fabCallback}/>
    </>)
}
export default MyTable