import {React, useState, useEffect} from 'react';
import { Button,FormControlLabel ,Stack, Checkbox, Stepper,Step,StepLabel,StepContent, Typography, TextField, Container } from "@mui/material";

import { Select, MenuItem } from "@mui/material";
import { getFirestore, doc } from "firebase/firestore";
import PackService from "../services/PackService";
import ProgramService from "../services/ProgramService";
import SouscriptionService from "../services/SouscriptionService";
import SessionService from "../services/SessionService";
import { Navigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LearnerService from "../services/LearnerService";

export default function SubscriptionPage() {

  let [currentStep, setCurrentStep] = useState(0);
  const [packData, setPackData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [packId, setpackId] = useState([]);
  const [progId, setProgId] = useState([]);
  const [programId, setProgramId] = useState([]);
  const [checkedValue, setChecked] = useState([]);
  const [sessionId, setSessionId] = useState([]);
  const learnerID = window.sessionStorage.getItem("learner");
  const [open, setOpen] = useState(false);
  const [learnerName, setLearnerName] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const nextStep = function(event){ 

   let learnerID = window.sessionStorage.getItem("learner");

   if(packId != "" && learnerID){

   PackService.getById(packId).then(function(pack) {
    pack.forEach(doc => {
    ProgramService.getById(doc.programRef.id).then(function(program) {  

      setProgId
       (
        program
      )

  })
})
})

  if( programId.length > 0 ){

    const sessionsTab = [];
    SessionService.getAll().then(function(session) {  
      session.forEach(doc => {

        if(doc.programRef.id === programId){
          sessionsTab.push(doc)
         
        }
        setSessionData(sessionsTab);
  })
  })
 if(sessionId.length > 0 && currentStep == 3){
  if(  checkedValue === "on" ){
      let souscription = {
        "learnerRef" : doc(getFirestore(), 'Leaner/' + learnerID),
        "packRef" : doc(getFirestore(), 'Pack/' + packId),
        "paied" : true,
        "sessionRef" : doc(getFirestore(), 'Session/' + sessionId)
      };

      SouscriptionService.create(souscription);
      handleClickOpen();
    }else{
      let souscription = {
        "learnerRef" : doc(getFirestore(), 'Leaner/' + learnerID),
        "packRef" : doc(getFirestore(), 'Pack/' + packId),
        "paied" : false,
        "sessionRef" : doc(getFirestore(), 'Session/' + sessionId)
      };

      SouscriptionService.create(souscription);
      handleClickOpen();
    }
  }
}
setCurrentStep(currentStep +1); 
}
}

const goBack = function(event){  setCurrentStep(currentStep -1);   }

useEffect( () => {
if(learnerID){
            
  LearnerService.getById(learnerID).then(function(learner){
    setLearnerName(
      learner
    )
    
  })
}

  PackService.getAll().then(function(pack) {  
    setPackData
                (
                  pack
                )
  })

  if (!learnerID) {
    return (
        <Navigate to="/dashboard" />
    )
  }
}, []);

    return(

      
      <Container maxWidth={'md'}>
        <Typography variant="h3" component="h2">
                Bienvenue 
                {
                              learnerName && learnerName.map((f) => (
                                " "+f.firstname + " " + f.lastname
                                ))

                        }
        </Typography>
                  <Stepper activeStep={currentStep} orientation="vertical">

                   
                            <Step key={'StepA'}>
                              <StepLabel>
                                  "Pack"
                              </StepLabel>
                              <StepContent>
                              <Stack spacing={5} direction={'column'}>
                              <Stack spacing={1} direction={'column'}>
                                <Typography>Merci de choisir votre Pack</Typography>
                                    
                                <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      label="Select a program"
                                      defaultValue="" 
                                      onChange={(e) => setpackId(e.target.value)}
                                    >
                                    {
                                          packData.map(function(item){
                                            return(<MenuItem value={item.id}>{item.label}</MenuItem>);
                                          })
                                    }

                                  </Select>   

                              </Stack> 
                                        <Button variant="contained" onClick={nextStep} >Choisir</Button>
                               </Stack>        
                              </StepContent>
                            </Step>
                          
                          <Step key={'StepB'}>
                          <StepLabel>
                              "Choisir le programme"
                          </StepLabel>
                          <StepContent>
                            <Typography>Merci de Choisir le programme ...</Typography>
                            
                            <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      label="Select a program"
                                      defaultValue=""
                                      onChange={(e) => setProgramId(e.target.value)}
                                    >
                                    {
                                          progId.map(function(item){
                                            return(<MenuItem value={item.id}>{item.title}</MenuItem>);
                                          })
                                    }

                              </Select>   
  
                            <Stack sx={{ margin: 2}} spacing={2} direction={'row'}>
                                        <Button variant="contained" onClick={nextStep} >Suivant</Button>
                                        <Button variant="contained" onClick={goBack} >Revenir</Button>
                               </Stack> 

                          </StepContent>
                        </Step>
                        
                        <Step key={'StepC'}>
                          <StepLabel>
                              "Session"
                          </StepLabel>
                          <StepContent>
                            <Typography>Merci de choisir la session...</Typography>
                            
                            <Stack spacing={2} direction={'column'}>
                              
                            <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      label="Select a program"
                                      defaultValue=""
                                      onChange={(e) => setSessionId(e.target.value)}
                                    >
                                    {
                                          sessionData.map(function(item){
                                            return(<MenuItem value={item.id}>{item.startDate} jusqu'au {item.endDate}</MenuItem>);
                                          })
                                    }

                              </Select>  
                                          
                              </Stack > 
                           
                            <Stack sx={{ margin: 2}} spacing={1} direction={'row'}>
                                        <Button variant="contained" onClick={nextStep} >Suivant</Button>
                                        <Button variant="contained" onClick={goBack} >Retour</Button>
                               </Stack> 
                              
                          </StepContent>
                        </Step>


                     <Step key={'StepD'}>
                          <StepLabel>
                              "Paiement"
                          </StepLabel>
                          <StepContent>
                            <Typography>Merci de saisir vos information personnelles pour ...</Typography>
                            
                            <Stack spacing={2} direction={'column'}>
                              
                            <FormControlLabel
                              control={
                                  <Checkbox
                                      name="SomeName"
                                      onChange={(e) => setChecked(e.target.value)}
                                  />
                              }
                              label="Paied"/>
                                          
                              </Stack > 
                           
                            <Stack sx={{ margin: 2}} spacing={1} direction={'row'}>
                                        <Button variant="contained" onClick={nextStep} >Valider</Button>
                                        <Button variant="contained" onClick={goBack} >Retour</Button>
                               </Stack> 
                              
                          </StepContent>
                        </Step>

                  </Stepper>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Inscription avec succès !"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

          </DialogContentText>
        </DialogContent>
        </Dialog>

        </Container>

        
    );
}