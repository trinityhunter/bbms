  import * as React from 'react';
  import { useState, useEffect } from 'react';
  import { styled } from '@mui/material/styles';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell, { tableCellClasses } from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import Paper from '@mui/material/Paper';

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  export default function DoantionView() {
    const [rows, setRows] = useState(JSON.parse(localStorage.getItem('donation')) || [])

    useEffect(() => {
      return () => {
        setInterval(() => {
          setRows(JSON.parse(localStorage.getItem('donation')))
        }, 100);
      }
    }, [])

    function makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result;
  }

    return (
      <>
      <div style={{ marginLeft: "300px", marginRight: "300px", border: "2px solid black"}}>
        <h1>All Donations</h1>
      <TableContainer component={Paper} >
        <Table sx={{ maxWidth: 800 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Blood Type</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            rows!=null?
            rows.map((row) => (
              <StyledTableRow key={makeid(5)}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell style={{color: "red"}} align="centre">{row.status}</StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">{row.description}</StyledTableCell>
              </StyledTableRow>
            ))
          :
          ""}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </>
    );
  }