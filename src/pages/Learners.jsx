import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";
import LearnerService from "../services/LearnerService";
import Delete from '@mui/icons-material/Delete';
import {useNavigate, useLocation} from 'react-router';
import AddLearner from "../modal/modalAddLearner";

import AlertDialog from "../modal/modalUpdateLearner";

function Line(props){

    let history = useNavigate();

    const gotoeditepage = function(element){

      };
    
      const loadDeletePage = function(id){
        LearnerService.delete(id);
      };


    return(
    
      <TableRow>
        <TableCell>{props.element.firstname}</TableCell>
          <TableCell>{props.element.lastname}</TableCell>
          <TableCell>{props.element.email}</TableCell>
          <TableCell>{props.element.phone}</TableCell>
          <TableCell>
          <AlertDialog parentToChild={props.element}/>
        </TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => loadDeletePage(props.element.id)}>
            <Delete fontSize="inherit" />
          </IconButton>
        </TableCell>        
      </TableRow>
      
    );
  }

export default function Learners() {
  

    let history = useNavigate();

    const gotoadd = function(){
        history('/addpage');
      };

      const [learnersData, setLearnersData] = useState([]);

      LearnerService.getAll().then(function(learner) {

        setLearnersData(
                learner
            )

    })


    return(
        <div>
         
         <AddLearner />

         <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Table component={Paper} size={'small'}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nom</TableCell>
                    <TableCell>Prénom</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Téléphone</TableCell>
                    <TableCell>Modifier</TableCell>
                    <TableCell>Supprimer</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                    {
                            learnersData.map(function(item){
                                return(<Line element={item}/>);
                                })
                }
              </TableBody>
              </Table>
            </Grid>

           

          </Grid>


        </div>
    );
}



