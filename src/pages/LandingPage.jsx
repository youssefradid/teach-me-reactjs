import React from 'react';

import { Button, Avatar, Stack, CardActions, CardMedia,CardHeader,Card, Typography, CardContent, Container } from "@mui/material";

import{grey, orange, red} from "@mui/material/colors";
import { useNavigate } from "react-router";

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
      <Container maxWidth={'md'}>
      <Stack direction={'row'} spacing={1}>
        <Card>
            <CardHeader avatar={<Avatar variant="rounded">B</Avatar>} title={'Pack Bronze'} subheader={'Pack destinee aux debutants'}/>
            <CardMedia height="194" image={null} alt="photo"/>
            <CardContent>
            <Typography color={grey[500]} variant='button'>On souhaite développer une plateforme de formation en ligne. Les profiles utilisateurs
                     sont principalement les apprenants (Learner)</Typography>
                     <Typography color={red[500]} variant='h5'>10 USD</Typography>
            </CardContent>
            <CardActions>
              <Stack direction={'row'} spacing={1}>
                      <Button variant="contained" onClick={gotoBronez} >inscrire</Button>
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
                      <Button variant="contained" onClick={gotoSilver} >inscrire</Button>
                      <Button variant="outlined" onClick={gotologinpage}>Annuler</Button>
              </Stack> 
            </CardActions>
        </Card>
      
        <Card>
            <CardHeader avatar={<Avatar variant="rounded">G</Avatar>} title={'Pack Gold'} subheader={'Pack destinee aux debutants'}/>
            <CardMedia height="194" image={null} alt="photo"/>
            <CardContent>
            <Typography color={grey[500]} variant='button'>On souhaite développer une plateforme de formation en ligne. Les profiles utilisateurs
                     sont principalement les apprenants (Learner)</Typography>
                     <Typography color={red[500]} variant='h5'>1000 USD</Typography>
            </CardContent>
            <CardActions>
              <Stack direction={'row'} spacing={1}>
                      <Button variant="contained" onClick={gotoGold} >inscrire</Button>
                      <Button variant="outlined" onClick={gotologinpage}>Annuler</Button>
              </Stack> 
            </CardActions>
        </Card>

        
        </Stack>
        </Container>
    );
}