import React, { useState, useEffect }  from 'react';

import { Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";
import { getFirestore, doc, onSnapshot, collection, query, where } from "firebase/firestore";
import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";
import FormerService from "../services/FormerService";

export default function RegisterForm() {
  
  let history = useNavigate();
  const [UserName, setUserName] = useState("");
  const [UserLastname, setUserLastname] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const submit = (e) => {
    let data = {
      firstname: UserName,
      lastname: UserLastname,
      password : UserEmail,
      email : UserPassword,
    }

    FormerService.create(data)
    .then(() => {
      //@todo : alerting
      console.log("Created new item successfully!");
      history('/');
    })
    .catch((e) => {
      console.log(e);
    });
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
                Digiforma est un logiciel complet de gestion 
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
              <input className="un " align="center" type="text" name="Prénom" placeholder="Entrer votre Prénom" onChange={(e) =>setUserLastname(e.target.value)}></input>
              <input className="un " align="center" type="text" name="email" placeholder="Entrer votre Email" onChange={(e) => setUserEmail(e.target.value)}></input>
              <input className="pass" align="center" type="password" name="password" placeholder="Entrer votre Mot de Passe " onChange={(e) => setUserPassword(e.target.value)}></input>
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
    </body>
    );
}