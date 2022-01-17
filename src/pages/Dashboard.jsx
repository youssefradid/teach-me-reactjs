import React, { useState }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from "@mui/material";

import TableContainer from '@material-ui/core/TableContainer';
import SouscriptionService from "../services/SouscriptionService";
import SessionService from "../services/service";
import LearnerService from "../services/LearnerService";
import {useNavigate} from 'react-router';
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
import Create from '@mui/icons-material/Create';
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
}));
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Line(props){
  
    return(
      
      <TableRow>
        <TableCell>{props.element.lastname}</TableCell>
        <TableCell>{props.element.firstname}</TableCell>
          <TableCell>{props.element.email}</TableCell>
          <TableCell>{props.element.phone}</TableCell>
          <TableCell>{props.element.title}</TableCell>
          <TableCell>{props.element.startDate}</TableCell>
          <TableCell>{props.element.endDate}</TableCell>
                          
        <TableCell align="center">
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <IconButton size="small" >
              <Create fontSize="inherit" />
            </IconButton>
            <IconButton size="small" >
              <Delete fontSize="inherit" />
            </IconButton>
          </ButtonGroup>
        </TableCell>

      </TableRow>
    );
  }

export default function Dashboard() {
    
  const classes = useStyles();

  let history = useNavigate();
  const [customersData, setCustomersData] = useState([]);


  SouscriptionService.getAll().then(function(souscription) {

    souscription.forEach(doc => {
          
      Promise.all([LearnerService.getById(doc.learnerRef.id),SessionService.getById(doc.sessionRef.id)]).then(function(result){

          const combined = result.reduce((acc, result) => { 
                      return acc.concat(result)
                  }, []);

                  const newItem = [ Object.assign({}, combined[0], combined[1])];

                        setCustomersData
                          (
                            newItem
                          )
            })
  
      })
    })

    

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

var listItemText = { 'Gestion des étudiants' : "/learners", 'Gestion des formateurs' : "/formers", "Gestion des Packs" : "/packs", "Les souscriptions" : "/subcription-Page"};

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


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
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
            Menu
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
        hello
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
              Apprenants
              </Typography>
            </Box>
          </Box>

          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nom</TableCell>
                <TableCell align="center">Prénom</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Téléphone</TableCell>
                <TableCell align="center">Programme</TableCell>
                <TableCell align="center">Date de début de Session</TableCell>
                <TableCell align="center">Date de fin de Session</TableCell>

              </TableRow>
            </TableHead>
           <TableBody>
           {
                  customersData.map((user) => (
                            <TableRow key={user.ID}>
                            <TableCell align="center">{user.lastname}</TableCell>
                            <TableCell align="center">{user.firstname}</TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                            <TableCell align="center">{user.phone}</TableCell>
                            <TableCell align="center">{user.title}</TableCell>
                            <TableCell align="center">{user.startDate}</TableCell>
                            <TableCell align="center">{user.endDate}</TableCell>
                         
                          </TableRow>
          
        
                          ))
                        }

              </TableBody>
                <TableFooter>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={100}>
                      <Item>
                        <Typography variant='body2' align="center">Nombre d'inscrits : {customersData.length}</Typography>
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