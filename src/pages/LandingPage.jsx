import React from 'react';

import { Button, Avatar,Box, Stack, CardActions, CardMedia,CardHeader,Card, Typography, CardContent, Container } from "@mui/material";

import{grey, red} from "@mui/material/colors";
import { useNavigate } from "react-router";
import CssBaseline from '@mui/material/CssBaseline';
import './Style.css'


export default function LandingPage() {

let history = useNavigate();


  const gotoBronez = function(){
    let target = {
      pathname: '/subcription-Page',
     
    };
    history.push(target);
  }

  
  const gotoSilver = function(){
    let target = {
      pathname: '/subcription-Page',
     
    };
    history.push(target);
  }

  
  const gotoGold = function(){
    let target = {
      pathname: '/subcription-Page',
      
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
      <body>
      <div align="center">
          <div class="logo" align="right">
            <div class= "row">
              <div class="column">
                <img align="center" class="image2" src="logo.png" alt=""/>
              </div>
          <div class="column">

            <h3 align="left">Teach-me</h3>
          </div>
          </div>
          </div>
        </div>
        <div>
      <Container maxWidth={'md'}>
      <Stack direction={'row'} spacing={1} marginTop={5}>
        <Card>
            <CardHeader avatar={<Avatar sx={{bgcolor: "#8d6e63"}} variant="rounded">B</Avatar>} title={'Pack Bronze'} subheader={'Pack destinee aux debutants'}/>
            <CardMedia height="194" image={null} alt="photo"/>
            <CardContent>
            <Typography color={grey[500]} variant='button'>On souhaite développer une plateforme de formation en ligne. Les profiles utilisateurs
                     sont principalement les apprenants (Learner)</Typography>
                     <Typography color={red[500]} variant='h5'>10 USD</Typography>
            </CardContent>
            <CardActions>
              <Stack direction={'row'} spacing={1}>
                      <Button sx={{bgcolor: "#233142"}} variant="contained" onClick={gotoBronez} >S'inscrire</Button>
                      <Button variant="outlined" onClick={gotologinpage}>Annuler</Button>
              </Stack> 
            </CardActions>
        </Card>

        <Card>
            <CardHeader avatar={<Avatar variant="rounded">S</Avatar>} title={'Pack silver'} subheader={'Pack destinee aux debutants'}/>
            <CardMedia height="194" image={null} alt="photo"/>
            <CardContent>
            <Typography color={grey[500]} variant='button'>On souhaite développer une plateforme de formation en ligne. Les profiles utilisateurs
                     sont principalement les apprenants (Learner)</Typography>
                     <Typography color={red[500]} variant='h5'>100 USD</Typography>
            </CardContent>
            <CardActions>
              <Stack direction={'row'} spacing={1}>
                      <Button sx={{bgcolor: "#233142"}} variant="contained" onClick={gotoSilver} >S'inscrire</Button>
                      <Button variant="outlined" onClick={gotologinpage}>Annuler</Button>
              </Stack> 
            </CardActions>
        </Card>
      
        <Card>
            <CardHeader avatar={<Avatar sx={{bgcolor: "#ffab00"}} variant="rounded">G</Avatar>} title={'Pack Gold'} subheader={'Pack destinee aux debutants'}/>
            <CardMedia height="194" image={null} alt="photo"/>
            <CardContent>
            <Typography color={grey[500]} variant='button'>On souhaite développer une plateforme de formation en ligne. Les profiles utilisateurs
                     sont principalement les apprenants (Learner)</Typography>
                     <Typography color={red[500]} variant='h5'>1000 USD</Typography>
            </CardContent>
            <CardActions>
              <Stack direction={'row'} spacing={1}>
                      <Button sx={{bgcolor: "#233142"}} variant="contained" onClick={gotoGold} >S'inscrire</Button>
                      <Button sx={{bordercolor: "#233142"}}variant="outlined" onClick={gotologinpage}>Annuler</Button>
              </Stack> 
            </CardActions>
        </Card>

        
        </Stack>
        </Container>
        </div>
        </body>    );
}