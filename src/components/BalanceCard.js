import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function BalanceCard({accounts}) {

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.success.light,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(accountName, accountBalances) {
    return { accountName, accountBalances };
  }

  // console.log(accounts)
  const rows = accounts[0] ? [
    createData(accounts[0].name, formatter.format(accounts[0].balances.current)),
    createData(accounts[1].name, formatter.format(accounts[1].balances.current)),
    createData(accounts[2].name, formatter.format(accounts[2].balances.current)),
    createData(accounts[3].name, formatter.format(accounts[3].balances.current)),
    createData(accounts[4].name, formatter.format(accounts[4].balances.current)),
    createData(accounts[5].name, formatter.format(accounts[5].balances.current)),
    createData(accounts[6].name, formatter.format(accounts[6].balances.current)),
    createData(accounts[7].name, formatter.format(accounts[7].balances.current)),
    
  ] : []
  
  const useStyles = makeStyles({
    table: {
      minWidth: 150,
      maxWidth: 300,
    },
  });

  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table  aria-label="customized table">
        <TableHead style={{backgroundColor: 'aquamarine'}}>
          <TableRow>
            <StyledTableCell>Account Name</StyledTableCell>
            <StyledTableCell align="right">Balance</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.accountName}>
              <StyledTableCell component="th" scope="row">
                {row.accountName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.accountBalances}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
