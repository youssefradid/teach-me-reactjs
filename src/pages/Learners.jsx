import React, { useState }  from 'react';

import {ListItemText,ListItem,Drawer, ListItemIcon, List, Box,IconButton, Container, Grid, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from "@mui/material";
import LearnerService from "../services/LearnerService";
import Delete from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router';

import { styled, useTheme, makeStyles } from '@material-ui/core/styles';
import AddModel from "../modal/modalAddLearner";
import TableContainer from '@material-ui/core/TableContainer';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TablePagination from '@mui/material/TablePagination';
import AlertDialog from "../modal/modalUpdateLearner";

import { CssBaseline } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';

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
        const [open, setOpen] = React.useState(false);

const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};

var listItemText = { 'Gestion des apprenants' : "/learners", 'Gestion des formateurs' : "/formers", 'Gestion des programmes' : "/programs", 'Gestion des sessions' : "/sessions", "Gestion des packs" : "/packs"};

var listItemTextUnderDivider = { 'Logout' : "/"};

const [formerName, setFormerName] = useState([]);

const learnerID = window.sessionStorage.getItem("learner");
const formerID = window.sessionStorage.getItem("former");
const theme = useTheme();
const drawerWidth = 300;
var listItemText = { 'Gestion des apprenants' : "/learners", 'Gestion des formateurs' : "/formers", 'Gestion des programmes' : "/programs", 'Gestion des sessions' : "/sessions", "Gestion des packs" : "/packs"};

        


    return(
      <Box sx={{ display: 'flex' }}>
      <CssBaseline/>
      <AppBar position="fixed" open={open} >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Teach-Me
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <Typography variant="h5" gutterBottom component="div" style={{color:"#00adb5"}} >
       Bienvenue
                
                    {
                      formerName && formerName.map((f) => (
                        " "+f.firstname + " " + f.lastname
                        ))

                }
      </Typography>
          <IconButton onClick={handleDrawerClose}>
         
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
         
        </DrawerHeader>
        <Divider />
        <List>
        {Object.keys(listItemText).map((key, index) => (
            <ListItem button onClick={() => history(listItemText[key])}>
              
              <ListItemText primary={key} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
        {Object.keys(listItemTextUnderDivider).map((key, index) => (
            <ListItem button  onClick={() => history(listItemTextUnderDivider[key])}>
              <ListItemIcon>
                {index % 2 === 0 ? <LogoutIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={key} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
            <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Apprenants
                </Typography>
              </Box>
              <Box>
              {!window.sessionStorage.getItem("former") ?  <AddModel /> : <></> }
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
        </Main>
      </Box>
    );
}



