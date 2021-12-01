import React from 'react';

import { Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";
import SaveIcon from '@mui/icons-material/Save';
export default function AddPage() {

  let history = useNavigate();

    const gotoregisterpage = function(){
      let target = {
        pathname: '/register-from',
      };
      history.push(target);
    }

  const gotodashboard = function(){
    let target = {
      pathname: '/',
    };
    history.push(target);
  }
 


    return(
        <div>
           <Grid
                container 
                justifyContent="center"
                alignItems="flex-end"
            >
          <Paper sx={{p: 2, margin: 2, maxWidth: 500, flexGrow: 1}} elevation={6}>
          
            <Stack spacing={1}>    
                <Typography color={blue[800]} variant='button'>Ajouter un nouveaux compte</Typography>
                <Typography color={grey[500]} variant='h8'>Vous devez remplir tous les champs obligatoires. </Typography>
                <TextField label="Nom" variant="outlined" helperText="Tappez ici Votre Nom"/>
                <TextField label="Prenom" variant="outlined" helperText="Tappez ici Votre Prenom"/>
                <TextField label="Email" variant="outlined" helperText="Tappez ici Votre Email"/>
                <TextField label="Password" variant="filled" helperText="Tappez ici Votre Password"/>
                        <Select  label="Niveau" >
                                <MenuItem value={1}>Female</MenuItem>
                                <MenuItem value={2}>Male</MenuItem>
                               
                        </Select>
            </Stack> 
           
         <Stack sx={{margin: 3}} spacing={2} direction={'row'} justifyContent="center">
                <Button variant="contained" onClick={gotodashboard} ><SaveIcon/> Enregistrer</Button>
                
                 
         </Stack>
          </Paper>
          </Grid>
        </div>
    );
}































// ancien page dashboard
/*
import {useHistory} from 'react-router';

export default function AddPage() {

  let history = useHistory();

  let list = [
    {
        "firstName" : "yassine",
        "lastName" : "yassine",
        "email" : "yassine",
        "phone" : "yassine",
        "program" : "yassine",
        "session" : "yassine",
        "level" : "yassine",
    },
    {
        "firstName" : "yassine",
        "lastName" : "yassine",
        "email" : "yassine",
        "phone" : "yassine",
        "program" : "yassine",
        "session" : "yassine",
        "level" : "yassine",
    },
    {
        "firstName" : "yassine",
        "lastName" : "yassine",
        "email" : "yassine",
        "phone" : "yassine",
        "program" : "yassine",
        "session" : "yassine",
        "level" : "yassine",
    },
    {
        "firstName" : "yassine",
        "lastName" : "yassine",
        "email" : "yassine",
        "phone" : "yassine",
        "program" : "yassine",
        "session" : "yassine",
        "level" : "yassine",
    },
  ];

  const gotoadd = function(){
    let target = {
      pathname: '/addpage',
    };
    history.push(target);
  }

  const gotolandingpage = function(){
    let landingTarget = {
      pathname: '/landing-Page',
      data:{
        pack: 'GOLD',
        price: 1000,
      },
    };
    
    history.push(landingTarget);
  };

  
  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item md={2}>
          <Drawer open={true} variant='permanent'>
            <List dense={true}>
              <ListItem button onClick={gotolandingpage}>
                <ListItemIcon>
                  <DehazeIcon/>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant='overline'>
                    Les Packs
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={gotolandingpage}>
                <ListItemIcon>
                  <HorizontalRuleIcon/>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant='overline'>
                    Gestion des Programmes
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={gotolandingpage}>
                <ListItemIcon>
                  <HorizontalRuleIcon/>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant='overline'>
                    Gestion des Sessions
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={gotolandingpage}>
                <ListItemIcon>
                  <HorizontalRuleIcon/>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant='overline'>
                    Gestion des Formateurs
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Drawer>
        </Grid>

        <Grid item md={10}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            
            <Grid item xs={12} md={4}>
              <Card>
              <CardHeader avatar={<Avatar  variant="rounded">B</Avatar>} title={'Pack Bronze'} subheader={'Pack destinée aux débutants'}/>
              <CardContent>
                  <Typography variant="body2">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
                  <Typography variant="h4">10 USD</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card >
                <CardHeader avatar={<Avatar  variant="rounded">S</Avatar>} title={'Pack Silver'} subheader={'Pack destinée aux débutants'}/>
                
                <CardContent>
                  <Typography variant="body2">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
                  <Typography variant="h4">100 USD</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader avatar={<Avatar variant="rounded">P</Avatar>} title={'Pack Platinium'} subheader={'Pack destinée aux débutants'}/>
                
                <CardContent>
                  <Typography variant="body2">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
                  <Typography variant="h4">1000 USD</Typography>
                </CardContent>
              </Card>
            </Grid>
          
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
                      return(
                        <TableRow>
                          <TableCell>{item.firstName}</TableCell>
                          <TableCell>{item.lastName}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.phone}</TableCell>
                          <TableCell>{item.program}</TableCell>
                          <TableCell>{item.session}</TableCell>
                          <TableCell>
                                    
                                <IconButton onClick={gotoadd}>
                                    <AddIcon/> 
                                </IconButton>

                                <IconButton  >
                                    <EditIcon/>  
                                </IconButton>

                                <IconButton >
                                  <DeleteIcon />
                                </IconButton>



                          </TableCell>
                        </TableRow>
                      );
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
  );
}*/