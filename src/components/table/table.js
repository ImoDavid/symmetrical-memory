import React from "react";
import {
  Box,
  Container,
  styled,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import formatCurrency from "../../utils/formatCurrency";

// sx={{ minWidth: 650 }}
const Tables = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table width={['100%', '100%', 650]}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">No</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
            {i + 1}
          </TableCell>
              <TableCell align="left" sx={{textTransform: 'capitalize'}}>{row.first_name} {row.last_name}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{formatCurrency(row.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
