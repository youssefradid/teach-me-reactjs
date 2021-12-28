import React, { useState, useEffect }  from 'react';

import { Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import SaveIcon from '@mui/icons-material/Save';
import LearnerService from "../services/LearnerService";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({parentToChild})  {
  
  const [open, setOpen] = useState(false);
  const [UserName, setUserName] = useState(parentToChild.firstname);
  const [UserLastname, setUserLastname] = useState(parentToChild.lastname);
  const [UserEmail, setUserEmail] = useState(parentToChild.email);
  const [UserPhone, setUserPhone] = useState(parentToChild.phone);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateLearner = (id) => {
    let learner = {
      "firstname" : UserName,
      "lastname" : UserLastname,
      "email" : UserEmail,
      "phone" : UserPhone
    };

    LearnerService.update(learner,id);

  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Modifier
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update Learner"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

          </DialogContentText>
        </DialogContent>
        <Grid
                container 
                justifyContent="center"
                alignItems="flex-end"
            >
          <Paper sx={{p: 2, margin: 2, maxWidth: 500, flexGrow: 1}} elevation={6}>
          
            <Stack spacing={1}>    
                <Typography color={blue[800]} variant='button'>Modifier un étudiant</Typography>
                <Typography color={grey[500]} variant='body1'>Vous devez remplir tous les champs obligatoires. </Typography>
                <TextField  value={UserName} variant="outlined" helperText="Tappez ici Votre Nom" onChange={(e) => setUserName(e.target.value)}/>
                <TextField  value={UserLastname} variant="outlined" helperText="Tappez ici Votre Prenom" onChange={(e) => setUserLastname(e.target.value)}/>
                <TextField  value={UserEmail} variant="outlined" helperText="Tappez ici Votre Email" onChange={(e) => setUserEmail(e.target.value)}/>
                <TextField  value={UserPhone} variant="outlined" helperText="Tappez ici Votre téléphone" onChange={(e) => setUserPhone(e.target.value)}/>
            </Stack> 
           
         <Stack sx={{margin: 3}} spacing={2} direction={'row'} justifyContent="center">
                <Button variant="contained"  onClick={() => updateLearner(parentToChild.id)}  ><SaveIcon/> Enregistrer</Button>
         </Stack>
          </Paper>
          </Grid>
      </Dialog>
    </div>
  );
}