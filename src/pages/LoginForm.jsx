import React, { useState, useEffect }  from 'react';
import { Button, Paper, Stack, TextField, FormControl, InputLabel, Typography,RadioGroup,Grid, FormControlLabel,Box, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";
import Header from '../header/header';
import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";
import { getFirestore, doc, onSnapshot, collection, query, where } from "firebase/firestore";
import LearnerService from "../services/LearnerService";
import FormerService from "../services/FormerService";

export default function RegisterForm() {

    let history = useNavigate();

    const [UserEmail, setUserEmail] = useState("");
    const [UserPassword, setUserPassword] = useState("");
    const [UserIdentity, setUserIdentity] = useState("");

    const allLearners = LearnerService.getAll();
    const allFormers = FormerService.getAll();
    


    const submit = (e) => {
      
        if(UserIdentity == "etud"){

          allLearners.then(function(result) {

            result.forEach(function(learner){

                  if(learner.email == UserEmail && learner.password == UserPassword){
                    gotoDash();
                  }
      
            })
           })
          
        }
        else if(UserIdentity == "form"){

          allFormers.then(function(result) {

            result.forEach(function(former){

              if(former.email == UserEmail && former.password == UserPassword){
                gotoDash();
                  }
      
            })
           })
          
        }


           
  }

  const gotoDash = function(){
    history('/dashboard');
  };
  
    const gotoRegister = function(){
      history('/register-from');
    };
  
    return(
        
        <div>
         <Header/>
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
                  
                  <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={(e) => setUserIdentity(e.target.value)}
                  >
                    <MenuItem value={"etud"}>Etudiant</MenuItem>
                    <MenuItem value={"coor"}>Coordinateur</MenuItem>
                    <MenuItem value={"form"}>Formateur</MenuItem>
                  </Select>
                </FormControl>    
              </Stack> 
              <br/>    
                  <Stack spacing={3} direction={'row'} justifyContent="center">
                          <Button variant="contained" onClick={submit}>Se connecter</Button>
                          <Button variant="contained" onClick={gotoRegister} color="primary">Inscription</Button>
                  </Stack>
            </Paper>
          
         </Grid>
        </div>
       
    );
}