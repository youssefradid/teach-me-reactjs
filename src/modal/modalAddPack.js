import React, { useState, useEffect }  from 'react';

import { Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import SaveIcon from '@mui/icons-material/Save';
import PackService from "../services/PackService";
import ProgramService from "../services/ProgramService";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';

import { getFirestore, doc } from "firebase/firestore";


export default function AddModel() {
  
  const [open, setOpen] = useState(false);
  const [Label, setLabel] = useState("");
  const [Price, setPrice] = useState("");
  const [programData, setProgram] = useState([]);
  const [programId, setProgramId] = useState([]);

  ProgramService.getAll().then(function(program) {

      setProgram
              (
                program
              )

  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addPack = () => {

    let pack = {
      "label" : Label,
      "price" : Price,
      "programRef" : doc(getFirestore(), 'Program/' + programId)
    };

  PackService.create(pack);
  handleClose();
  };

  return (
    <div>
      <Stack  direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}  >
          <Button variant="contained" onClick={handleClickOpen}>
            <AddIcon/> Add pack
          </Button>
      </Stack>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add new Pack"}
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
                <TextField variant="outlined" helperText="Tappez ici Label" onChange={(e) => setLabel(e.target.value)}/>
                <TextField variant="outlined" helperText="Tappez ici Price" onChange={(e) => setPrice(e.target.value)}/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select a program"
                    onChange={(e) => setProgramId(e.target.value)}
                  >
                   {
                        programData.map(function(item){
                          return(<MenuItem value={item.id}>{item.title}</MenuItem>);
                        })
                  }

                  </Select>
            </Stack> 
           
         <Stack sx={{margin: 3}} spacing={2} direction={'row'} justifyContent="center">
                <Button variant="contained"  onClick={() => addPack()}  ><SaveIcon/> Enregistrer</Button>
         </Stack>
          </Paper>
          </Grid>
      </Dialog>
    </div>
  );
}