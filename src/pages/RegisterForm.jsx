import React, { useState, useEffect }  from 'react';

import { Alert, Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";
import { getFirestore, doc, onSnapshot, collection, query, where } from "firebase/firestore";
import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";
import LearnerService from "../services/LearnerService";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function RegisterForm() {
  
  let history = useNavigate();
  const [UserName, setUserName] = useState("");
  const [CheckUserName, setCheckUserName] = useState(true);
  const [UserLastname, setUserLastname] = useState("");
  const [CheckUserLastname, setCheckUserLastname] = useState(true);
  const [UserEmail, setUserEmail] = useState("");
  const [CheckUserEmail, setCheckUserEmail] = useState(true);
  const [UserPassword, setUserPassword] = useState("");
  const [CheckUserPassword, setCheckUserPassword] = useState(true);
  const [UserPhone, setUserPhone] = useState("");
  const [CheckUserPhone, setCheckUserPhone] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history('/');
  };


  const submit = (e) => {
      
        if(!UserName.length>0 ){

          setCheckUserName(false);

      setCheckUserLastname(true);
      setCheckUserEmail(true);
      setCheckUserPassword(true);
      setCheckUserPhone(true);

          
        }
        
        else if(!UserLastname.length>0 ){
          
          setCheckUserLastname(false);

      setCheckUserName(true);
      setCheckUserEmail(true);
      setCheckUserPassword(true);
      setCheckUserPhone(true);
          
        }

        else if(!UserEmail.length>0 ){
          
          setCheckUserEmail(false);

          setCheckUserName(true);
          setCheckUserLastname(true);
          setCheckUserPassword(true);
          setCheckUserPhone(true);


          
        }

        else if(!UserPassword.length>0 ){
          
          setCheckUserPassword(false);


          setCheckUserName(true);
          setCheckUserLastname(true);
          setCheckUserPhone(true);
          setCheckUserEmail(true);
          
        }

        else if(!UserPhone.length>0 ){
          
          setCheckUserPhone(false);

      setCheckUserName(true);
      setCheckUserEmail(true);
      setCheckUserPassword(true);

          
        }

    else{
      setCheckUserName(true);
      setCheckUserLastname(true);
      setCheckUserEmail(true);
      setCheckUserPassword(true);
      setCheckUserPhone(true);
        let data = {
          firstname: UserName,
          lastname: UserLastname,
          password : UserEmail,
          email : UserPassword,
          phone : UserPhone
        }

        LearnerService.create(data)
        .then(() => {
          //@todo : alerting
          handleClickOpen();
          console.log("Created new item successfully!");
          
        })
        .catch((e) => {
          console.log(e);
        });
      }
}


  const gotologinpage = function(){
    history('/');
  };
    return(
      <body>
          <div>
          <div class="logo" align="right">
            <div class= "row">
              <div class="column">
                <img class="image2" src="logo.png" alt=""/>
              </div>
          <div class="column">

            <h3 align="left">Teach-me</h3>
          </div>
          </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
          <div class="digi">

            <p class="intro"  >
                Teach-Me est un logiciel complet de gestion 
            </p>
            <p class="intro"  >
                 de centre de formation
            </p>
            <ul class="check-list">
            <div><br/></div>
              <li>Solution complète qui centralise la gestion</li>
              <li>Générateur de documents officiels (conventions, attestations...)</li>
              <li>Suivi des formations, clients et apprenants</li>
              <li>Outil intégré d'évaluations numériques</li>
              <li>Plateforme e-learning intégrée</li>
              <li>Adapté aux indépendants comme aux organismes</li>
            </ul>
            </div>
          </div>
          <div class="column">
          <div className="main2">
            <p className="sign" align="center">Créer un compte</p>
            <form className="form1">
              <input className="un " align="center" type="text" name="Nom" placeholder="Entrer votre Nom" onChange={(e) => setUserName(e.target.value)}></input>
              {!CheckUserName ? <Alert  align="center" severity="error">Entrez votre nom! </Alert> : <></> }
              <input className="un " align="center" type="text" name="Prénom" placeholder="Entrer votre Prénom" onChange={(e) =>setUserLastname(e.target.value)}></input>
              {!CheckUserLastname ? <Alert  align="center" severity="error">Entrez votre prénom! </Alert> : <></> }
              <input className="un " align="center" type="text" name="email" placeholder="Entrer votre Email" onChange={(e) => setUserEmail(e.target.value)}></input>
              {!CheckUserEmail ? <Alert  align="center" severity="error">Entrez votre email! </Alert> : <></> }
              <input className="pass" align="center" type="password" name="password" placeholder="Entrer votre Mot de Passe " onChange={(e) => setUserPassword(e.target.value)}></input>
              {!CheckUserPassword ? <Alert  align="center" severity="error">Entrez votre mot de passe! </Alert> : <></> }
              <input className="un" align="center" type="text" name="phone" placeholder="Entrer votre téléphone " onChange={(e) => setUserPhone(e.target.value)}></input>
              {!CheckUserPhone ? <Alert  align="center" severity="error">Entrez votre téléphone! </Alert> : <></> }
              <div class="row">
                <div class="column">
                  <c className="submit" align="center" onClick={submit} >S'inscrire</c>
                </div>              
                <div class="column">
                  <c className="submit2" align="center" onClick={gotologinpage}>Annuler</c>
                </div>
              </div>
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
            {"Utilisateur ajouté !!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          </Dialog>
    </body>
    );
}