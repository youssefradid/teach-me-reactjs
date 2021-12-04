import React from 'react';
import { Stack, Paper,Grid, Typography } from "@mui/material";



const Header = () => (
  <div className="header">
            <Grid
                item 
                >
                    <Paper elevation={5} >
                        
                    <Stack sx = {{ justifyContent: 'center'}} direction="row" spacing={1}>
                        <img className="photo" src="teach-me.jpg" />
                        <Typography sx={{ fontSize: 'h2.fontSize' }}>TeachMe</Typography>
                    </Stack>
                        
                    </Paper>
            </Grid>

  </div>
)

export default Header;