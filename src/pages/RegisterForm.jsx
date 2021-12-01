import { Button, Paper, Stack, TextField,Grid, Typography,RadioGroup, FormControlLabel, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";

export default function RegisterForm() {

  let history = useNavigate();


  const gotolandingpage = function(){
    let target = {
      pathname: '/landing-Page',
    };
    history.push(target);
  }

  const gotologinpage = function(){
    let target = {
      pathname: '/login-from',
    };
    history.push(target);
  }

    return(
        <div>
           <Grid
                container 
                justifyContent="center"
                alignItems="flex-end"
            >
          <Paper sx={{p: 2, margin: 2, maxWidth: 500, flexGrow: 1}} elevation={6}>
          
            <Stack spacing={1}>    
                <Typography color={blue[800]} variant='button'>Page d'incription</Typography>
                <Typography color={grey[500]} variant='h8'>On souhaite développer une plateforme de formation en ligne. Les profiles utilisateurs
                     sont principalement les apprenants (Learner)</Typography>
                <TextField label="Nom" variant="outlined" helperText="Tappez ici Votre Nom"/>
                <TextField label="Prenom" variant="outlined" helperText="Tappez ici Votre Prenom"/>
                <TextField label="Email" variant="outlined" helperText="Tappez ici Votre Email"/>
                <TextField label="Password" variant="filled" helperText="Tappez ici Votre Password"/>
                        <Select  label="Niveau" >
                                <MenuItem value={1}>Female</MenuItem>
                                <MenuItem value={2}>Male</MenuItem>
                               
                        </Select>
            </Stack> 
           
         <Stack sx={{margin: 3}} spacing={2} direction={'row'} justifyContent="center">
                <Button variant="contained" onClick={gotolandingpage}>Register</Button>
                <Button variant="outlined" onClick={gotologinpage}>Annuler</Button>
                 
         </Stack>
          </Paper>
          </Grid>
        </div>
    );
}