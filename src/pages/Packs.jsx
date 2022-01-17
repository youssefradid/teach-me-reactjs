import React, { useState, useEffect }  from 'react';

import {ListItemIcon,Box,IconButton, ListItemText,ListItem,Button,Stack, List, Container, Grid,  Drawer, Table, TableFooter, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Card, CardHeader, Avatar,  CardContent, } from "@mui/material";
import{blue, grey} from "@mui/material/colors";
import PackService from "../services/PackService";
import SaveIcon from '@mui/icons-material/Save';
import Delete from '@mui/icons-material/Delete';
import Create from '@mui/icons-material/Create';
import {useNavigate, useLocation} from 'react-router';

import AddIcon from '@mui/icons-material/Add';

import AlertDialog from "../modal/modalAddPack";

function Line(props){

    let history = useNavigate();
    
      const loadDeletePage = function(id){
        PackService.delete(id);
      };


    return(
    
      <TableRow>
        <TableCell>{props.element.label}</TableCell>
          <TableCell>{props.element.price}</TableCell>
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

export default function Packs() {
  
      const [packsData, setPacksData] = useState([]);

      PackService.getAll().then(function(pack) {

        setPacksData(
                pack
            )
    })


    return(
        <div>
         

         <Stack  direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}  >
                <Button variant="contained" ><AddIcon/> Ajouter </Button>
         </Stack>
         <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Table component={Paper} size={'small'}>
                <TableHead>
                  <TableRow>
                    <TableCell>Label</TableCell>
                    <TableCell>Price</TableCell>
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