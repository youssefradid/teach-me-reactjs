import React from 'react';

import { Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";

import SaveIcon from '@mui/icons-material/Save';

import {useNavigate, useLocation} from 'react-router';

export default function Editepage() {
  
  let location  = useLocation();
  let history = useNavigate();

  console.log(location.element);

  let [nom, setNom] = React.useState(location.element.firstname);
  let [prenom, setPrenom] = React.useState(location.element.lastName);
  let [email, setEmail] = React.useState(location.element.email);
  let [password, setPassword] = React.useState(location.element.phone);
  let [programme, setProgramme] = React.useState(location.element.program);
  let [session, setSession] = React.useState(location.element.session);
  
  

  const handleNomChange = function(e){
    setNom(e.target.value);
  }

  const handlePrenomChange = function(e){
    setPrenom(e.target.value);
  }

  const handleEmailChange = function(e){
    setEmail(e.target.value);
  }
  const handlePasswordChange = function(e){
    setPassword(e.target.value);
    
  }
  const handleProgrammeChange = function(e){
    setProgramme(e.target.value);
    
  }
  const handleSessionChange = function(e){
    setSession(e.target.value);
    
  }

 
  const gotodashboard = function(){
    let target = {
      pathname: '/dashboard',
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

                <TextField onChange={handleNomChange} value={nom} size="small" label="Nom" variant="outlined"  helperText="Tappez ici Votre Nom"/>
                <TextField onChange={handlePrenomChange} value={prenom} size="small" label="prenom" variant="outlined"  helperText="Tappez ici Votre Prenom"/>
                <TextField onChange={handleEmailChange} value={email} size="small" label="email" variant="outlined"  helperText="Tappez ici Votre Mail"/>
                <TextField onChange={handlePasswordChange} value={password} size="small" label="password" variant="outlined"  helperText="Tappez ici Votre Password"/>
                <TextField onChange={handleProgrammeChange} value={programme} size="small" label="programme" variant="outlined"  helperText="Tappez ici Votre Programme"/>
               
                
            </Stack> 
           
         <Stack sx={{margin: 3}} spacing={2} direction={'row'} justifyContent="center">
                <Button variant="contained" onClick={gotodashboard} ><SaveIcon/> Enregistrer</Button>
                
                 
         </Stack>
          </Paper>
          </Grid>
        </div>
    );
}





























