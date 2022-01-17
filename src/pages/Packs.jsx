import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";
import{blue, grey} from "@mui/material/colors";
import PackService from "../services/PackService";
import ProgramService from "../services/ProgramService";
import SaveIcon from '@mui/icons-material/Save';
import Delete from '@mui/icons-material/Delete';
import Create from '@mui/icons-material/Create';
import {useNavigate, useLocation} from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import UseFetch from "../services/useFetch";
import AlertDialog from "../modal/modalUpdatePack";
import AddPackModal from "../modal/modalAddPack";

function Line(props){

    return(
    
      <TableRow>
        <TableCell>{props.element.label}</TableCell>
          <TableCell>{props.element.price}</TableCell>
          <TableCell>{props.element.title}</TableCell>
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
  const loadDeletePage = function(id){
    PackService.delete(id);
  };

export default function Packs() {
  
  const [packsData] = UseFetch();
 
    return(
        <div>

        <AddPackModal />
        

         <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Table component={Paper} size={'small'}>
                <TableHead>
                  <TableRow>
                    <TableCell>Label</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Programme</TableCell>
                    <TableCell>Modifier</TableCell>
                    <TableCell>Supprimer</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                    {
                        packsData.map(function(item){
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