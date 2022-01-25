import React, { useState }  from 'react';

import { Alert, Modal,Box, Button, Paper, Stack, TextField, FormControl, InputLabel, Typography,Grid,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router";
import LearnerService from "../services/LearnerService";
import FormerService from "../services/FormerService";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Style.css';


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
      <body>
        <div class="row">
          <div class="column">
          <div class="logo" align="center">
            <img align="center" src="logo.png" alt=""/>
            <h2 align="center">Teach-me</h2>
          </div>
          </div>
          <div class="column">
          <div className="main">
            <p className="sign" align="center">Connexion</p>
            <form className="form1">
              <input className="un " align="center" type="text" name="email" placeholder="Entrez votre Email" onChange={(e) => setUserEmail(e.target.value)} required></input>
              {!CheckUserEmail ? <Alert  severity="error">Entrez votre Email ! </Alert> : <></> }
              <input className="pass" align="center" type="password" name="password" placeholder="Entrez votre Mot de Passe " onChange={(e) => setUserPassword(e.target.value)} required></input>
              {!CheckUserPassword ? <Alert  severity="error">Entrez votre mot de passe! </Alert> : <></> }
              <select className="un" align="center" title="Vous êtes?" onChange={(e) => setUserIdentity(e.target.value)}>
                <option className="un" align="center" checked>Vous êtes?</option>
                <option className="un" align="center" value={"etud"}>Etudiant</option>
                <option className="un" align="center" value={"form"}>Formateur</option>
              </select>
              {!CheckUserIdentity ? <Alert  severity="error">Vous étes Qui?</Alert> : <></> }

              <c className="submit" align="center" onClick={submit}>Se connecter</c>
              <div><br/></div>
              <div align="center">ou</div>
              <c class="forgot" align="center" onClick={gotoRegister}>Créer un compte</c>
              <div><br/></div>
            </form>
          </div>
          </div>
        </div>
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
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          </Dialog>
        </body>         
    );
}