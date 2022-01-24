import React, { useState }  from 'react';

import { Alert, Modal,Box, Button, Paper, Stack, TextField, FormControl, InputLabel, Typography,Grid,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";
import Header from '../header/header';
import{blue} from "@mui/material/colors";
import { useNavigate } from "react-router";
import LearnerService from "../services/LearnerService";
import FormerService from "../services/FormerService";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function RegisterForm() {

    let history = useNavigate();

    const [UserEmail, setUserEmail] = useState("");
    const [CheckUserEmail, setCheckUserEmail] = useState(true);
    const [UserPassword, setUserPassword] = useState("");
    const [CheckUserPassword, setCheckUserPassword] = useState(true);
    const [UserIdentity, setUserIdentity] = useState("");
    const [CheckUserIdentity, setCheckUserIdentity] = useState(true);
    const [open, setOpen] = useState(false);

    const allLearners = LearnerService.getAll();
    const allFormers = FormerService.getAll();
    
    window.sessionStorage.clear()
    window.sessionStorage.removeItem('learner');
    window.sessionStorage.removeItem('former');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const gotoDash = function(){
      history('/dashboard');
    };
    
    const gotoSub = function(){
      history('/subcription-Page');
    };
      const gotoRegister = function(){
        history('/register-from');
      };

    const submit = (e) => {
      if(UserEmail.length>0 && UserPassword.length>0){
        setCheckUserPassword(true);
        setCheckUserEmail(true);
        if(UserIdentity == "etud"){

          allLearners.then(function(result) {

            result.forEach(function(learner){

                  if(learner.email == UserEmail && learner.password == UserPassword){
                    window.sessionStorage.setItem("learner", learner.id);
                    gotoSub();
                  }
                  else{
                    handleClickOpen();
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
                    handleClickOpen();
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
         <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Utilisateur n'existe pas !!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

          </DialogContentText>
        </DialogContent>
        </Dialog>
        </div>
       
    );
}