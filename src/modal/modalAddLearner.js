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
import AddIcon from '@mui/icons-material/Add';

export default function AddModel() {
  
  const [open, setOpen] = useState(false);
  const [UserName, setUserName] = useState("");
  const [UserLastname, setUserLastname] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPhone, setUserPhone] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addLearner = () => {
    let learner = {
      "firstname" : UserName,
      "lastname" : UserLastname,
      "email" : UserEmail,
      "phone" : UserPhone
    };

  LearnerService.create(learner);

  handleClose();

  };

  return (
    <div>
      <Stack  direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}  >
          <Button variant="contained" onClick={handleClickOpen}>
            <AddIcon/> Add Learner
          </Button>
      </Stack>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add new Learner"}
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
                <Typography color={blue[800]} variant='button'>Ajouter un formateur</Typography>
                <Typography color={grey[500]} variant='body1'>Vous devez remplir tous les champs obligatoires. </Typography>
                <TextField variant="outlined" helperText="Tappez ici Votre Nom" onChange={(e) => setUserName(e.target.value)}/>
                <TextField variant="outlined" helperText="Tappez ici Votre Prenom" onChange={(e) => setUserLastname(e.target.value)}/>
                <TextField variant="outlined" helperText="Tappez ici Votre Email" onChange={(e) => setUserEmail(e.target.value)}/>
                <TextField variant="outlined" helperText="Tappez ici Votre phone" onChange={(e) => setUserPhone(e.target.value)}/>
                <TextField variant="outlined" helperText="Tappez ici Votre lien vers le CV" />
            </Stack> 
           
         <Stack sx={{margin: 3}} spacing={2} direction={'row'} justifyContent="center">
                <Button variant="contained"  onClick={() => addLearner()}  ><SaveIcon/> Enregistrer</Button>
         </Stack>
          </Paper>
          </Grid>
      </Dialog>
    </div>
  );
}