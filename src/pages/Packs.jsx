import React, { useState, useEffect }  from 'react';

import {Box,IconButton, Container, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from "@mui/material";
import PackService from "../services/PackService";
import ProgramService from "../services/ProgramService";
import Delete from '@mui/icons-material/Delete';
import Create from '@mui/icons-material/Create';
import { styled, makeStyles } from '@material-ui/core/styles';
import AddModel from "../modal/modalAddPack";
import TableContainer from '@material-ui/core/TableContainer';


import AddIcon from '@mui/icons-material/Add';

import AlertDialog from "../modal/modalUpdatePack";
import AddPackModal from "../modal/modalAddPack";
import ButtonGroup from '@material-ui/core/ButtonGroup';


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


export default function Packs() {
  
    const dataToShow = [];
    const classes = useStyles();

    const loadDeletePage = function(id){
      PackService.delete(id);
    };
  
      const [packsData, setPacksData] = useState([]);

      useEffect(() => {

      PackService.getAll().then(function(pack) {
        
        pack.forEach(doc => {

        if(doc.programRef){

            ProgramService.getById(doc.programRef.id).then(function(program) {

              program.forEach(prog => {
                
               dataToShow.push( [ Object.assign({}, prog, doc)] );
               
               const combined = dataToShow.reduce((acc, result) => { 
                return acc.concat(result)
                }, []);
          
              setPacksData(
                combined
              )
               
              })
              
          })
        }

    })

  })

  }, []); 
 

    return(
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Packs
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
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Label</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Prix</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Programme</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Modifier</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Supprimer</TableCell>
  
                </TableRow>
              </TableHead>
             <TableBody>
             {
                packsData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell align="center">{user.label}</TableCell>
                    <TableCell align="center">{user.price}</TableCell>
                    <TableCell align="center">{user.title}</TableCell>
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
            </Table>  
            </TableContainer>  
            </Paper>
        </Container>
        
    );
}