import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

import {useNavigate} from 'react-router';

import { getFirestore, doc, onSnapshot, collection, query, where } from "firebase/firestore";
import db from '../firebase'


import { styled, useTheme } from '@mui/material/styles';


import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Delete from '@mui/icons-material/Delete';
import Create from '@mui/icons-material/Create';
import AddCircle from '@mui/icons-material/AddCircle';


function Line(props){
  
    let history = useNavigate();
  
    const gotoeditepage = function(){
      history('/editepage');
    };
  
    const loadDeletePage = function(){
      history('/delete-program-page');
    };

    return(
      <TableRow>
                        <TableCell>{props.element.firstName}</TableCell>
                         <TableCell>{props.element.lastName}</TableCell>
                          <TableCell>{props.element.email}</TableCell>
                          <TableCell>{props.element.phone}</TableCell>
                          <TableCell>{props.element.program}</TableCell>
                          <TableCell>{props.element.session}</TableCell>
                          
        <TableCell>
          <IconButton size="small" onClick={() => gotoeditepage(props.element)}>
            <Create fontSize="inherit" />
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => loadDeletePage(props.element)}>
            <Delete fontSize="inherit" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }

export default function Dashboard() {
   
  const db = getFirestore();
/*
  useEffect(() => {
    const q = query(collection(db, "Former"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach(doc => {
        const { firstname, lastname } = doc.data();
       console.log(firstname + ' ' +lastname);
    })
    });
  }, [])

*/


    let history = useNavigate();
   
    let list = [
        {
            "id" :1,
            "firstName" : "esther",
            "lastName" : "esther",
            "email" : "esther",
            "phone" : "esther",
            "program" : "esther",
            "session" : "esther",
           
        },
        {
            "id" :2,
            "firstName" : "john",
            "lastName" : "john",
            "email" : "john",
            "phone" : "john",
            "program" : "john",
            "session" : "john",
          
        },
        {
            "id" :3,
            "firstName" : "esther",
            "lastName" : "esther",
            "email" : "esther",
            "phone" : "esther",
            "program" : "esther",
            "session" : "esther",
            
        },
        {
            "id" :4,
            "firstName" : "esther",
            "lastName" : "esther",
            "email" : "esther",
            "phone" : "esther",
            "program" : "esther",
            "session" : "esther",
          
        },
      ];

    
        const gotoadd = function(){
          history('/addpage');
        };


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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Gestion des programmes', 'Gestion des sessions', 'Gestion des Formateurs'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <IndeterminateCheckBoxIcon /> : <IndeterminateCheckBoxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[ 'Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <LogoutIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      

    <Container>
    
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item md={2}>
          <Drawer open={true} variant='permanent'>
            
          </Drawer>
        </Grid>

        <Grid item md={10}>

        <Stack  direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}  >
                <Button variant="contained" onClick={gotoadd} ><AddIcon/> Ajouter </Button>
         </Stack>

          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Table component={Paper} size={'small'}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nom</TableCell>
                    <TableCell>Prénom</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Téléphone</TableCell>
                    <TableCell>Programme</TableCell>
                    <TableCell>Session</TableCell>
                    <TableCell>Niveau</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                {
                  list.map(function(item){
                    return(<Line element={item}/>);
                  })
                }
              </TableBody>
                <TableFooter>
                  <Typography variant='body2'>Nombre d'inscrits : {list.length}</Typography>
                </TableFooter>
              </Table>
            </Grid>

           

          </Grid>
        </Grid>
      </Grid>




    </Container>



      </Main>
    </Box>
  );
}



              
