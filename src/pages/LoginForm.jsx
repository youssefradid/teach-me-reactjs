import { Button, Paper, Stack, TextField, Typography,RadioGroup,Grid, FormControlLabel,Box, FormLabel,Checkbox,FormGroup, Select, MenuItem } from "@mui/material";

import{blue, grey} from "@mui/material/colors";
import { useNavigate } from "react-router";

export default function RegisterForm() {

    let history = useNavigate();


    const gotoregisterpage = function(){
      let target = {
        pathname: '/register-from',
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
        
          <Paper sx={{ p: 2, margin: 20, maxWidth: 500, flexGrow: 1 }} elevation={5} >
          
            <Stack spacing={1} > 
                                    
                <Typography color={blue[800]} variant='button'>Login Page</Typography>
                <Typography color={grey[500]} variant='h8'>Taper votre maile et votre password</Typography>

                <TextField label="Email" variant="outlined" helperText="Tappez ici Votre Email" required /> 
                <TextField label="Password" variant="filled" helperText="Tappez ici Votre Password"/>
                       
            </Stack> 
                           
                <Stack spacing={2} direction={'row'} justifyContent="center">
                        <Button variant="contained" onClick={gotoregisterpage} color="success">Login</Button>
                    
                </Stack>

          </Paper>
          
         </Grid>
        </div>
       
    );
}