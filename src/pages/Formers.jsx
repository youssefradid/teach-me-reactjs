import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";
import{blue, grey} from "@mui/material/colors";
import FormerService from "../services/FormerService";
import SaveIcon from '@mui/icons-material/Save';
import Create from '@mui/icons-material/Create';
import {useNavigate, useLocation} from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import AlertDialog from "../modal/modalUpdateFormer";
import AddModel from "../modal/modalAddFormer";
import TableContainer from '@material-ui/core/TableContainer';
import SouscriptionService from "../services/SouscriptionService";
import SessionService from "../services/service";
import LearnerService from "../services/LearnerService";
import TablePagination from '@mui/material/TablePagination';
import { styled, useTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';
import Delete from '@mui/icons-material/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AccessibilityTwoTone from '@mui/icons-material/AccessibilityTwoTone';

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


function Line(props){
  let history = useNavigate();

  const gotoeditepage = function(){
    history('/editepage');
  };

  const loadDeletePage = function(){
    history('/delete-program-page');
  };

      const deleteFormer = function(id){
        FormerService.delete(id);
      };
      

    return(
    
      <TableRow>
        <TableCell>{props.element.firstname}</TableCell>
          <TableCell>{props.element.lastname}</TableCell>
          <TableCell>{props.element.email}</TableCell>
          <TableCell>{props.element.specialisation}</TableCell>
          <TableCell>
          <AlertDialog parentToChild={props.element}/>
        </TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => deleteFormer(props.element.id)}>
            <Delete fontSize="inherit" />
          </IconButton>
        </TableCell>        
      </TableRow>
      
    );
  }

export default function Formers() {
  
    let history = useNavigate();
    const classes = useStyles();

    const gotoadd = function(){
        history('/addpage');
      };
      const gotoeditepage = function(){
        history('/editepage');
      };
    
      const loadDeletePage = function(){
        history('/delete-program-page');
      };
      const [formersData, setFormersData] = useState([]); 

      FormerService.getAll().then(function(former) {

        setFormersData(
                former
            )

    })
    const AppBar = styled(MuiAppBar, {
      shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
      }));

      const drawerWidth = 300;

      const handleDrawerOpen = () => {
        setOpen(true);
      };
      
      const handleDrawerClose = () => {
        setOpen(false);
      };

      const [open, setOpen] = React.useState(false);

      const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        }));
        const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
          ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${drawerWidth}px`,
            ...(open && {
              transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              marginLeft: 0,
            }),
          }),
          );
    const theme = useTheme();

    const [page, setPage] = React.useState(2);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

      const deleteFormer = function(id){
        FormerService.delete(id);
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
                <Button variant="contained" onClick={gotoadd} color="primary"><AddIcon/>
                  Ajouter
                </Button>
              </Box>
            </Box>
  
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Nom</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Prénom</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Email</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Spécialisation</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Modifier</TableCell>
                  <TableCell className={classes.tableCell} style={{ width: 100 }} align="center">Supprimer</TableCell>
  
                </TableRow>
              </TableHead>
             <TableBody>
             {
                formersData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell align="center">{user.lastname}</TableCell>
                    <TableCell align="center">{user.firstname}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.specialisation}</TableCell>
                    <TableCell align="center">
                      <AlertDialog parentToChild={user}/>
                    </TableCell>
                    <TableCell align="center">
                      <ButtonGroup aria-label="outlined primary button group">
                        <IconButton color="error" size="small" onClick={() => deleteFormer(user.id)}>
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
                          <Typography variant='body2' align="center">Nombre d'inscrits : {formersData.length}</Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={100}>
                        <Item>
  
                        <TablePagination
                          component="div"
                          count={100}
                          page={page}
                          onPageChange={handleChangePage}
                          rowsPerPage={rowsPerPage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      </Item>
                    </Grid>
                    </Grid>
                  </TableFooter>
  
                </Table>
                </TableContainer>
  
                </Paper>
        </Container>
      
        
    );
}



