import React, { useState, useEffect }  from 'react';
import { Button, Paper, Stack, TextField, Typography,RadioGroup,Grid, FormControlLabel,Box, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";
import TutorialDataService from "../services/service";
import { getFirestore, doc, onSnapshot, collection, query, where } from "firebase/firestore";

export default function RegisterForm() {

    let history = useNavigate();

    const [UserEmail, setUserEmail] = useState("");
    const [UserPassword, setUserPassword] = useState("");

    
    const unsub = onSnapshot(TutorialDataService.getAll(), (querySnapshot) => {
      querySnapshot.forEach(doc => {
        const { firstname, lastname, email, password } = doc.data();
       console.log(email + ' ' + password);
       if(UserEmail == email && UserPassword == password ){
          history('dashboard');
       }
    })
    });

  
    return(
        
        <div>
         
            <Grid
                container 
                justifyContent="center"
                alignItems="flex-end"
            >

            <Paper sx={{ p: 2, margin: 20, maxWidth: 500, flexGrow: 1 }} elevation={5} >
            
              <Stack spacing={1} > 
                                      
                  <Typography color={blue[800]} variant='button'>Login Page</Typography>

                  <TextField label="Email" variant="outlined" helperText="Tappez ici Votre Email" onChange={(e) => setUserEmail(e.target.value)} required /> 
                  <TextField type="password" label="Password" variant="outlined" helperText="Tappez ici Votre mot de passe" onChange={(e) => setUserPassword(e.target.value)} required/>
                        
              </Stack> 
                            
                  <Stack spacing={2} direction={'row'} justifyContent="center">
                          <Button variant="contained"  color="success">Se connecter</Button>
                          <Button variant="contained" color="primary">Inscription</Button>
                  </Stack>
            </Paper>
          
         </Grid>
        </div>
       
    );
}