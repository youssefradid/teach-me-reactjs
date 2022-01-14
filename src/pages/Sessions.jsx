import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";
import SessionService from "../services/service";
import ProgramService from "../services/ProgramService";
import Delete from '@mui/icons-material/Delete';
import AlertDialog from "../modal/modalUpdateSession";
import AddPackModal from "../modal/modalAddSession";

function Line(props){

      const loadDeletePage = function(id){
        SessionService.delete(id);
      };


    return(
    
      <TableRow>
        <TableCell>{props.element.endDate}</TableCell>
          <TableCell>{props.element.startDate}</TableCell>
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

export default function Sessions() {
  
    const dataToShow = [];
    const [sessionsData, setSessionsData] = useState([]);

      useEffect(() => {

      SessionService.getAll().then(function(session) {
        
        session.forEach(doc => {

        if(doc.programRef){

            ProgramService.getById(doc.programRef.id).then(function(program) {

              program.forEach(prog => {
                
                setSessionsData(
                  session
                )

              })
              
          })
        }
        
    })
  
  })

  }, [sessionsData]); 
  

    return(
        <div>
          
        <AddPackModal />
        
         <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Table component={Paper} size={'small'}>
                <TableHead>
                  <TableRow>
                    <TableCell>End date</TableCell>
                    <TableCell>start date</TableCell>
                    <TableCell>Programme</TableCell>
                    <TableCell>Modifier</TableCell>
                    <TableCell>Supprimer</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                    {
                        sessionsData.map(function(item){
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