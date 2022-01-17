import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import {useNavigate} from 'react-router';
import SessionService from "../services/service";
import LearnerService from "../services/LearnerService";
import SouscriptionService from "../services/SouscriptionService";
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';

import AccessibilityTwoTone from '@mui/icons-material/AccessibilityTwoTone';


function Line(props){
  
    return(
      
      <TableRow>
        <TableCell>{props.element.firstname}</TableCell>
          <TableCell>{props.element.lastname}</TableCell>
          <TableCell>{props.element.email}</TableCell>
          <TableCell>{props.element.phone}</TableCell>
          <TableCell>{props.element.title}</TableCell>
          <TableCell>{props.element.startDate}</TableCell>
          <TableCell>{props.element.endDate}</TableCell>
                          
      </TableRow>
    );
  }

export default function Dashboard() {

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

  var listItemText = { 'Gestion des étudiants' : "/learners", 'Gestion des formateurs' : "/formers", "Gestion des Packs" : "/packs"};

  var listItemTextUnderDivider = { 'Logout' : "/"};

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
            <ListItem button  onClick={() => history(listItemTextUnderDivider[key])}>  {/* onClick={() => history('/learners')}*/}
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
      

  
    <Container>
    
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item md={2}>
          <Drawer open={true} variant='permanent'>
            
          </Drawer>
        </Grid>

        <Grid item md={10}>

        <Stack  direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}  >
                <Button variant="contained"  ><AddIcon/> Ajouter </Button>
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
                    <TableCell>Session start date</TableCell>
                    <TableCell>Session end date</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                {
                    customersData.map(function(item){
                      return(<Line element={item}/>);

                    })
                  
                }
              </TableBody>
                <TableFooter>
                  <Typography variant='body2'>Nombre d'inscrits : {customersData.length}</Typography>
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