import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";
import{blue, grey} from "@mui/material/colors";
import programService from "../services/ProgramService";
import SaveIcon from '@mui/icons-material/Save';
import Delete from '@mui/icons-material/Delete';
import Create from '@mui/icons-material/Create';
import {useNavigate, useLocation} from 'react-router';

import AddIcon from '@mui/icons-material/Add';
import ProgramService from '../services/ProgramService';

import AlertDialog from "../modal/modalUpdateProgram";
import AddProgramModal from "../modal/modalAddProgram";

function Line(props){

    let history = useNavigate();
    
      const loadDeletePage = function(id){
        ProgramService.delete(id);
      };


    return(
    
      <TableRow>
        <TableCell>{props.element.title}</TableCell>
        <TableCell>{props.element.description}</TableCell>
        <TableCell>{props.element.goal}</TableCell>
          <TableCell>
               <AlertDialog parentToChild={props.element} />
        </TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => loadDeletePage(props.element.id)}>
            <Delete fontSize="inherit" />
          </IconButton>
        </TableCell>        
      </TableRow>
      
    );
  }

export default function Packs() {
  

    let history = useNavigate();

    const gotoadd = function(){
        history('/addpage');
      };

      const [ProgramsData, setProgramsData] = useState([]);

      ProgramService.getAll().then(function(Program) {

        setProgramsData(
                Program
            )

    })


    return(
        <div>
          
        <AddProgramModal />
        
         <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Table component={Paper} size={'small'}>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Goal</TableCell>
                    <TableCell>Modifier</TableCell>
                    <TableCell>Supprimer</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                    {
                        ProgramsData.map(function(item){
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



