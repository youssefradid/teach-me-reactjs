import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";
import PackService from "../services/PackService";
import Delete from '@mui/icons-material/Delete';
import UseFetch from "../services/useFetch";
import AlertDialog from "../modal/modalUpdatePack";
import AddPackModal from "../modal/modalAddPack";
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import AccessibilityTwoTone from '@mui/icons-material/AccessibilityTwoTone';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme, makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@mui/material/AppBar';
import {useNavigate} from 'react-router';



function Line(props){

    return(
    
      <TableRow>
        <TableCell align="center">{props.element.label}</TableCell>
          <TableCell align="center">{props.element.price} DH</TableCell>
          <TableCell align="center">{props.element.title}</TableCell>
          <TableCell align="center">
          <AlertDialog parentToChild={props.element}/>
        </TableCell>
        <TableCell align="center">
          <IconButton size="small" color="error" align="center" onClick={() => loadDeletePage(props.element.id)}>
            <Delete fontSize="inherit" />
          </IconButton>
        </TableCell>        
      </TableRow>
      
    );
  }
  const loadDeletePage = function(id){
    PackService.delete(id);
  };

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
  }));
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Packs() {
  let history = useNavigate();
  const [formerName, setFormerName] = useState([]);

  const [packsData] = UseFetch();
  const classes = useStyles();

  const drawerWidth = 300;

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
  
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  var listItemText = { 'Gestion des apprenants' : "/learners", 'Gestion des formateurs' : "/formers", 'Gestion des programmes' : "/programs", 'Gestion des sessions' : "/sessions", "Gestion des packs" : "/packs", "Les souscriptions" : "/subcription-Page"};
  
  var listItemTextUnderDivider = { 'Logout' : "/"};
  
  const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    const [learnerName, setLearnerName] = useState([]);

  
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

                    learnerName && learnerName.map((l) => (
                      " "+l.firstname + " " + l.lastname
                      ))
                    }
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
              <ListItemIcon>
                {index % 2 === 0 ? <AccessibilityTwoTone /> : <AccessibilityTwoTone />}
              </ListItemIcon>
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
              PACKS
              </Typography>
              </Box>
              <Box>
              <AddPackModal />
            </Box>
          </Box>

          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nom</TableCell>
                <TableCell align="center">Prix</TableCell>
                <TableCell align="center">Programme</TableCell>
                <TableCell align="center">Modifier</TableCell>
                <TableCell align="center">Supprimer</TableCell>
              </TableRow>
            </TableHead>
           <TableBody>
           {
                        packsData.map(function(item){
                                return(<Line element={item}/>);
                        })
                }

              </TableBody>
                <TableFooter>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={100}>
                      <Item>
                        <Typography variant='body2' align="center">Nombre des souscriptions : {packsData.length}</Typography>
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
                        count={100}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
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