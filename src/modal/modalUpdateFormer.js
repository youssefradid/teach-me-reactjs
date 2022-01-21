import React, { useState, useEffect }  from 'react';

import { Button, Paper, Stack, IconButton, TextField,Grid, Typography,RadioGroup, FormControlLabel, Container, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import SaveIcon from '@mui/icons-material/Save';
import FormerService from "../services/FormerService";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled, useTheme, makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Create from '@mui/icons-material/Create';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  tableCell: {
    padding: "0px 8px"
  }
}));

export default function AlertDialog({parentToChild})  {
  
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [UserName, setUserName] = useState(parentToChild.firstname);
  const [UserLastname, setUserLastname] = useState(parentToChild.lastname);
  const [UserEmail, setUserEmail] = useState(parentToChild.email);
  const [Userspecialisation, setUserspecialisation] = useState(parentToChild.specialisation);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateLearner = (id) => {
    let former = {
      "firstname" : UserName,
      "lastname" : UserLastname,
      "email" : UserEmail,
      "specialisation" : Userspecialisation
    };

    FormerService.update(former,id);
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
          {"Modifier le formatteur"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>

        <Container maxWidth="xs">
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={() => updateLearner(parentToChild.id)}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Nom"
                    autoFocus
                    value={UserName} 
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Prénom"
                    value={UserLastname} 
                    onChange={(e) => setUserLastname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  value={UserEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="specialisation"
                  label="Spécialisation"
                  value={Userspecialisation} 
                  onChange={(e) => setUserspecialisation(e.target.value)}
                  />
                </Grid>
              </Grid>
              <br/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
              
                Enregistrer
              </Button>
              
            </form>
          </div>
        </Container>
      </Dialog>
    </div>
  );
}