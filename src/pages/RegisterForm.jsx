import React, { useState, useEffect }  from 'react';

import { Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";
import { getFirestore, doc, onSnapshot, collection, query, where } from "firebase/firestore";
import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";
import db from '../firebase'
import TutorialDataService from "../services/service";

export default function RegisterForm() {
  

  let history = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [customerPrenom, setCustomerPrenom] = useState("");


    const submit = (e) => {

      }

    

  const gotolandingpage = function(){
    let target = {
      pathname: '/landing-Page',
    };
    history.push(target);
  }

  const gotologinpage = function(){
    history('/');
  };
    return(
        <div>
    
          <Grid container spacing={-20}>
            
            <Grid item xs={8}>
                  <Paper sx={{p: 2, margin: 2, maxWidth: 700, flexGrow: 1}} elevation={6}>
                
                    <Stack spacing={1}>    
                        <Typography color={blue[800]} variant='button'>Créez votre compte gratuit</Typography>
                        <Typography color={grey[500]} variant='h8'>Teach-me est le logiciel de gestion formation utilisé par le plus grand nombre d'organismes de formations.
                            sont principalement les apprenants (Learner)</Typography>
                        <TextField label="Nom" variant="outlined" helperText="Tappez ici Votre Nom" onChange={(e) => setCustomerName(e.target.value)}/>
                        <TextField label="Prenom" variant="outlined" helperText="Tappez ici Votre Prenom" onChange={(e) => setCustomerPrenom(e.target.value)}/>
                        <TextField label="Email" variant="outlined" helperText="Tappez ici Votre Email"/>
                        <TextField type="password" label="Password" variant="outlined" helperText="Tappez ici Votre Password"/>     
                    </Stack> 
              
                    <Stack sx={{margin: 3}} spacing={2} direction={'row'} justifyContent="center">
                            <Button variant="contained" onClick={submit}>Register</Button>
                            <Button variant="outlined" onClick={gotologinpage}>Annuler</Button>
                            
                    </Stack>
                  </Paper>
            </Grid>
            <Grid item xs={4} >
                <Paper sx={{ p: 2, maxWidth: 500, flexGrow: 1, bgcolor: '#ece9f6'}} elevation={2}>
                    <Stack spacing={1} >    
                        <p>
                        <Typography sx={{ fontWeight: 'bold' }}>Digiforma est un logiciel complet de gestion de centre de formation
                        </Typography>
                        </p>
                        <ul >
                        <li>Solution complète qui centralise la gestion</li>
                        <li>Générateur de documents officiels (conventions, attestations...)</li>
                        <li>Suivi des formations, clients et apprenants</li>
                        <li>Outil intégré d'évaluations numériques</li>
                        <li>Plateforme e-learning intégrée</li>
                        <li>Adapté aux indépendants comme aux organismes</li></ul>
                      </Stack>
                  </Paper>  
            </Grid>
        </Grid>


        </div>
    );
}