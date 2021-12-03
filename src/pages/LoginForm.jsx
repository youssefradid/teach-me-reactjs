import { Button, Paper, Stack, TextField, Typography,RadioGroup,Grid, FormControlLabel,Box, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";

export default function RegisterForm() {

    let history = useNavigate();

    const gotoregisterpage = function(){
      history('register-from');
    };
  
    return(
        
        <div>
          <Grid
          item xs={12}
          >

            <Paper elevation={5} >
              
              <img  style={{backgroundSize:"cover"}}  src="teach-me.png" />
             
            </Paper>

          </Grid>
            <Grid
                container 
                justifyContent="center"
                alignItems="flex-end"
            >

            <Paper sx={{ p: 2, margin: 20, maxWidth: 500, flexGrow: 1 }} elevation={5} >
            
              <Stack spacing={1} > 
                                      
                  <Typography color={blue[800]} variant='button'>Login Page</Typography>

                  <TextField label="Email" variant="outlined" helperText="Tappez ici Votre Email" required /> 
                  <TextField type="password" label="Password" variant="outlined" helperText="Tappez ici Votre mot de passe" required/>
                        
              </Stack> 
                            
                  <Stack spacing={2} direction={'row'} justifyContent="center">
                          <Button variant="contained"  color="success">Se connecter</Button>
                          <Button variant="contained" onClick={gotoregisterpage} color="primary">Inscription</Button>
                  </Stack>
            </Paper>
          
         </Grid>
        </div>
       
    );
}