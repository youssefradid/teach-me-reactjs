import React, { useState, useEffect }  from 'react';

import { Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";
import SaveIcon from '@mui/icons-material/Save';
import ProgramService from "../services/ProgramService";

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

  const [sessionData, setSessionData] = useState([]);

  ProgramService.getAll().then(function(session) {

                    setSessionData
                          (
                            session
                          )

  })


    return(
        <div>
           <Grid
                container 
                justifyContent="center"
                alignItems="flex-end"
            >
          <Paper sx={{p: 2, margin: 2, maxWidth: 500, flexGrow: 1}} elevation={6}>
          
            <Stack spacing={1}>    
                <Typography color={blue[800]} variant='button'>Ajouter un nouveaux étudiant</Typography>
                <Typography color={grey[500]} variant='body1'>Vous devez remplir tous les champs obligatoires. </Typography>
                <TextField label="Nom" variant="outlined" helperText="Tappez ici Votre Nom"/>
                <TextField label="Prenom" variant="outlined" helperText="Tappez ici Votre Prenom"/>
                <TextField label="Email" variant="outlined" helperText="Tappez ici Votre Email"/>
                <TextField label="phone" variant="outlined" helperText="Tappez ici Votre téléphone"/>
                <TextField label="Password" variant="filled" helperText="Tappez ici Votre Password"/>
                        <Select  label="session" >

                                   {
                                        sessionData.map(function(item){

                                          return(<MenuItem value={item.id}>{item.title}</MenuItem>);

                                        })
                                      
                                    }
                               
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
