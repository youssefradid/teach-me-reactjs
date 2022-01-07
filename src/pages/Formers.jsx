import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";
import{blue, grey} from "@mui/material/colors";
import FormerService from "../services/FormerService";
import SaveIcon from '@mui/icons-material/Save';
import Delete from '@mui/icons-material/Delete';
import Create from '@mui/icons-material/Create';
import {useNavigate, useLocation} from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import AlertDialog from "../modal/modalUpdateFormer";
import AddModel from "../modal/modalAddFormer";

function Line(props){

      const deleteFormer = function(id){
        FormerService.delete(id);
      };


    return(
    
      <TableRow>
        <TableCell>{props.element.firstname}</TableCell>
          <TableCell>{props.element.lastname}</TableCell>
          <TableCell>{props.element.email}</TableCell>
          <TableCell>{props.element.specialisation}</TableCell>
          <TableCell>
          <AlertDialog parentToChild={props.element}/>
        </TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => deleteFormer(props.element.id)}>
            <Delete fontSize="inherit" />
          </IconButton>
        </TableCell>        
      </TableRow>
      
    );
  }

export default function Formers() {
  
    let history = useNavigate();

    const gotoadd = function(){
        history('/addpage');
      };

      const [formersData, setFormersData] = useState([]);

      FormerService.getAll().then(function(former) {

        setFormersData(
                former
            )

    })
    return(
        <div>
            
                <AddModel  />
         
         <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Table component={Paper} size={'small'}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nom</TableCell>
                    <TableCell>Prénom</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>specialisation</TableCell>
                    <TableCell>Modifier</TableCell>
                    <TableCell>Supprimer</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                    {
                            formersData.map(function(item){
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



