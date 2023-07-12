import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Sayan Kumar Das", 900288, "ABC", "Regular", "9.00am-6.00pm"),
  createData("Satish Kumar", 876290, "XYZ", "Night", "12.00am-9.00am"),
  createData("Rajesh Mukharje", 908655, "PQN", "Evening", "6.00pm-3.00am"),
  createData("Nitin Saha", 902736, "ABC", "Night", "12.00am-9.00am"),
  createData("Mohant Sharma", 901567, "MNO", "Morning", "6.00am-3.00pm")
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#c4b0b0;" }}>
            <TableCell>
              <b>Employee Name</b>
            </TableCell>
            <TableCell align="right">
              <b>Employee Id</b>
            </TableCell>
            <TableCell align="right">
              <b>Project Name</b>
            </TableCell>
            <TableCell align="right">
              <b>Shift Type</b>
            </TableCell>
            <TableCell align="right">
              <b>Shift Time</b>
            </TableCell>
            <TableCell align="right">
              <b>Download Payroll</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete">
                  <DownloadIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <VisibilityIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
