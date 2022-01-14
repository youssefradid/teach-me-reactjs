import React from 'react';
import { Button, Stack, Stepper,Step,StepLabel,StepContent, Typography, TextField, Container } from "@mui/material";

import { useLocation } from "react-router";

import { useNavigate } from "react-router";

export default function SubscriptionPage() {
  let [currentStep, setCurrentStep] = React.useState(0);

  let location = useLocation();
  let history = useNavigate();

  const gotodashboard = function(){
    let target = {
      pathname: '/dashboard',
    };
    history.push(target);
  }
  


const nextStep = function(event){  setCurrentStep(currentStep +1);   }
const goBack = function(event){  setCurrentStep(currentStep -1);   }

    return(
      <Container maxWidth={'md'}>
                  <Stepper activeStep={currentStep} orientation="vertical">

                   
                            <Step key={'StepA'}>
                              <StepLabel>
                                  "Information Perso"
                              </StepLabel>
                              <StepContent>
                              <Stack spacing={5} direction={'column'}>
                              <Stack spacing={1} direction={'column'}>
                                <Typography>Merci de saisir vos information personnelles pour ...</Typography>
                                    
            
                                  <TextField size= "small" label="Nom" variant="outlined" helperText="Tappez ici Votre Nom"/>
                                  <TextField size= "small" label="Prenom" variant="outlined" helperText="Tappez ici Votre Prenom"/>
                                  <TextField size= "small" label="Email" variant="outlined" helperText="Tappez ici Votre Email"/>
                                  <TextField size= "small" label="Password" variant="filled" helperText="Tappez ici Votre Password"/>
                                          
                              </Stack> 
                                        <Button variant="contained" onClick={nextStep} >Register</Button>
                               </Stack>        
                              </StepContent>
                            </Step>
                            
                          <Step key={'StepB'}>
                          <StepLabel>
                              "Conditions d'utilisastion"
                          </StepLabel>
                          <StepContent>
                            <Typography>Merci de saisir vos information personnelles pour ...</Typography>
                            
                            <Stack spacing={2} direction={'column'}>
                             
                                  <TextField size= "small" label="Code de Carte" variant="outlined" />
                                  <TextField size= "small" label="Nom et Prenom" variant="outlined" />
                                  <TextField size= "small" label="Date d'experation" variant="outlined" />
                                  <TextField size= "small" label="Cryptogrme" variant="outlined" />
                                          
                              </Stack> 
                            <Stack sx={{ margin: 2}} spacing={2} direction={'row'}>
                                        <Button variant="contained" onClick={nextStep} >Suivant</Button>
                                        <Button variant="contained" onClick={goBack} >Revenir</Button>
                               </Stack> 

                          </StepContent>
                        </Step>

                        <Step key={'StepC'}>
                          <StepLabel>
                              "Niveau en informatioque"
                          </StepLabel>
                          <StepContent>
                            <Typography>Merci de saisir vos information personnelles pour ...</Typography>
                            
                            <Stack spacing={2} direction={'column'}>
                              
                                  <TextField size= "small" label="Code de Carte" variant="outlined" />
                                  <TextField size= "small" label="Nom et Prenom" variant="outlined" />
                                  <TextField size= "small" label="Date d'experation" variant="outlined" />
                                  <TextField size= "small" label="Cryptogrme" variant="outlined" />
                                          
                              </Stack > 
                           
                            <Stack sx={{ margin: 2}} spacing={1} direction={'row'}>
                                        <Button variant="contained" onClick={nextStep} >Suivant</Button>
                                        <Button variant="contained" onClick={goBack} >Revenir</Button>
                               </Stack> 
                              
                          </StepContent>
                        </Step>

                        <Step key={'StepD'}>
                          <StepLabel>
                              "Paiement"
                          </StepLabel>
                          <StepContent>
                          
                            <Stack spacing={5} direction={'column'}>
                              <Stack spacing={1} direction={'column'}>
                                <Typography>Merci de saisir vos information personnelles pour ...</Typography>
                                    
                                  <TextField size= "small" label="Code de Carte" variant="outlined" />
                                  <TextField size= "small" label="Nom et Prenom" variant="outlined" />
                                  <TextField size= "small" label="Date d'experation" variant="outlined" />
                                  <TextField size= "small" label="Cryptogrme" variant="outlined" />
                                          
                              </Stack> 
                              <Stack spacing={1} direction={'row'}>
                                        <Button variant="contained" onClick={gotodashboard} >Effectuer</Button>
                                        <Button variant="contained" onClick={goBack} >Revenir</Button>
                               </Stack> 
                               </Stack>        

                          </StepContent>
                        </Step>

                  </Stepper>

        </Container>
    );
}