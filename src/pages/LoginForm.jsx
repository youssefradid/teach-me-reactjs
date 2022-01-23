import React, { useState }  from 'react';

import { Alert, Button, Paper, Stack, TextField, FormControl, InputLabel, Typography,Grid,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";
import Header from '../header/header';
import{blue} from "@mui/material/colors";
import { useNavigate } from "react-router";
import LearnerService from "../services/LearnerService";
import FormerService from "../services/FormerService";
import UserNotExist from "../modal/userNotExist"
export default function RegisterForm() {

    let history = useNavigate();

    const [UserEmail, setUserEmail] = useState("");
    const [CheckUserEmail, setCheckUserEmail] = useState(true);
    const [UserPassword, setUserPassword] = useState("");
    const [CheckUserPassword, setCheckUserPassword] = useState(true);
    const [UserIdentity, setUserIdentity] = useState("");
    const [CheckUserIdentity, setCheckUserIdentity] = useState(true);
    const [CheckUserNotExist, setCheckUserNotExist] = useState("");

    const allLearners = LearnerService.getAll();
    const allFormers = FormerService.getAll();
    
    window.sessionStorage.clear()
    window.sessionStorage.removeItem('learner');
    window.sessionStorage.removeItem('former');

    const submit = (e) => {
      if(UserEmail.length>0 && UserPassword.length>0){
        setCheckUserPassword(true);
        setCheckUserEmail(true);
        if(UserIdentity == "etud"){

          allLearners.then(function(result) {

            result.forEach(function(learner){

                  if(learner.email == UserEmail && learner.password == UserPassword){
                    window.sessionStorage.setItem("learner", learner.id);
                    gotoDash();
                  }
                  else{
                    setCheckUserNotExist(true);
                  }
      
            })
           })
          
        }
        else if(UserIdentity == "form"){

          allFormers.then(function(result) {

            result.forEach(function(former){

              if(former.email == UserEmail && former.password == UserPassword){
                window.sessionStorage.setItem("former", former.id);
                gotoDash();
                  }
                  else{
                    setCheckUserNotExist(true);
                  }
      
            })
           })
          
        }
        else{
          setCheckUserIdentity(false);
        }
      }
      else{
        setCheckUserPassword(false);
        setCheckUserEmail(false);
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
            {UserNotExist ? <UserNotExist  /> : <></> }
            <Paper sx={{ p: 2, margin: 20, maxWidth: 500, flexGrow: 1 }} elevation={5} >
            
              <Stack spacing={1} > 
                                      
                  <Typography color={blue[800]} variant='button'>Login Page</Typography>

                  <TextField label="Email" variant="outlined" helperText="Tappez ici Votre Email" onChange={(e) => setUserEmail(e.target.value)} required /> 
                  {!CheckUserEmail ? <Alert  severity="error">Entrez votre Email ! </Alert> : <></> }
                  <TextField type="password" label="Password" variant="outlined" helperText="Tappez ici Votre mot de passe" onChange={(e) => setUserPassword(e.target.value)} required/>
                  {!CheckUserPassword ? <Alert  severity="error">Entrez votre mot de passe! </Alert> : <></> }
                  <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Vous etes ?</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={(e) => setUserIdentity(e.target.value)}
                  >
                    <MenuItem value={"etud"}>Etudiant</MenuItem>
                    <MenuItem value={"form"}>Formateur</MenuItem>
                  </Select>
                  {!CheckUserIdentity ? <Alert  severity="error">Vous étes Qui?</Alert> : <></> }
                  
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