import React, { useState }  from 'react';

import {Box,IconButton, Container, Grid, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from "@mui/material";
import LearnerService from "../services/LearnerService";
import Delete from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router';

import { styled, makeStyles } from '@material-ui/core/styles';
import AddModel from "../modal/modalAddLearner";
import TableContainer from '@material-ui/core/TableContainer';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TablePagination from '@mui/material/TablePagination';

import AlertDialog from "../modal/modalUpdateLearner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  tableCell: {
    padding: "0px 8px"
  }
}));
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Learners() {
  const classes = useStyles();


    let history = useNavigate();

      const loadDeletePage = function(id){
        LearnerService.delete(id);
      };
      const [learnersData, setLearnersData] = useState([]);

      LearnerService.getAll().then(function(learner) {

        setLearnersData(
                learner
            )

    })
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };


    return(

      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Apprenants
                </Typography>
              </Box>
              <Box>
              <AddModel />
              </Box>
            </Box>
  
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Nom</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Prénom</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Email</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Télephone</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Modifier</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Supprimer</TableCell>
  
                </TableRow>
              </TableHead>
             <TableBody>
             {
                learnersData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell align="center">{user.lastname}</TableCell>
                    <TableCell align="center">{user.firstname}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.phone}</TableCell>
                    <TableCell align="center">
                      <AlertDialog parentToChild={user}/>
                    </TableCell>
                    <TableCell align="center">
                      <ButtonGroup aria-label="outlined primary button group">
                        <IconButton color="error" size="small" onClick={() => loadDeletePage(user.id)}>
                          <Delete fontSize="inherit" />
                        </IconButton>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))
              }
  
                </TableBody>
                <TableFooter>
                    <Grid container spacing={2} columns={16}>
                      <Grid item xs={100}>
                        <Item>
                          <Typography variant='body2' align="center">Nombre d'inscrits : {learnersData.length}</Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </TableFooter>
                  </Table>
                  </TableContainer>
                  <Grid item xs={100}>
                        <Item>
                        <TablePagination
                          component="div"
                          count={learnersData.length}
                          page={page}
                          onPageChange={handleChangePage}
                          rowsPerPage={5}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Item>
                    </Grid>
                </Paper>
        </Container>
        
    );
}



