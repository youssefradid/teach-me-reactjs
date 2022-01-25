import React, { useState, useEffect }  from 'react';

import {IconButton, Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import SaveIcon from '@mui/icons-material/Save';
import ProgramService from "../services/ProgramService";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Create from '@mui/icons-material/Create';

export default function AlertDialog({parentToChild})  {
  
  const [open, setOpen] = useState(false);
  const [Title, setTitle] = useState(parentToChild.title);
  const [Description, setDescription] = useState(parentToChild.description);
  const [Goal, setGoal] = useState(parentToChild.goal);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateProgram = (id) => {
    let program = {
      "title" : Title,
      "description" : Description,
      "goal" : Goal,
    };

    ProgramService.update(program,id);
    handleClose();

  };

  return (
    <div>
       <ButtonGroup aria-label="outlined primary button group">
        <IconButton color="success" size="small" onClick={handleClickOpen}>
          <Create fontSize="inherit" />
        </IconButton>
      </ButtonGroup>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update Program"}
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
                <Typography color={blue[800]} variant='button'>Modifier un programme</Typography>
                <Typography color={grey[500]} variant='body1'>Vous devez remplir tous les champs obligatoires. </Typography>
                <TextField value={Title} variant="outlined" helperText="Title" onChange={(e) => setTitle(e.target.value)}/>
                <TextField value={Description} variant="outlined" helperText="Description " onChange={(e) => setDescription(e.target.value)}/>
                <TextField 
                  multiline
                  rows={2}
                  maxRows={4} value={Goal} variant="outlined" helperText="But" onChange={(e) => setGoal(e.target.value)}/>
            </Stack> 
           
         <Stack sx={{margin: 3}} spacing={2} direction={'row'} justifyContent="center">
                <Button variant="contained"  onClick={() => updateProgram(parentToChild.id)}  ><SaveIcon/> Enregistrer</Button>
         </Stack>
          </Paper>
          </Grid>
      </Dialog>
    </div>
  );
}