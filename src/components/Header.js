import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import { experimentalStyled as styled } from '@mui/material/styles';
import FlacDrawer from './FlacDrawer';
import "./Header.css";
export default function Header() {
    return (
     <div style={{backgroundColor:"#E4E4E4" , height:'700px'}}>
     <FlacDrawer/>
     <CssBaseline />
     <div className="circle"><div className="circle1">
     </div>
     </div>
     <Container fixed>
     <div style={{ backgroundPositionY:"center",backgroundPositionX:"left" ,backgroundSize: "190px 190px" , backgroundRepeat:"no-repeat",backgroundImage:`url('')` }}>.
     </div>
     <Box display="flex" justifyContent="flex-end" sx={{ height: '30vh', marginTop:"-270px"}}>
     <Stack style={{padding:"70px"}} spacing={1}>
     <Typography variant="h4" color={'black'} lineHeight={'40px'} fontWeight={'900'}  gutterBottom>
      FLAC
      </Typography>
      <Typography variant="h4" color={'black'} lineHeight={'20px'} fontWeight={'900'}   gutterBottom>
      FOOD
      </Typography>
      <Typography variant="h6" color={'black'} gutterBottom>Home cooked meals at your doorstep</Typography>
      <Button className='btn' style={{ backgroundColor: "#da753a" }} variant="contained">Visit</Button>
    </Stack> 
    </Box>
   </Container>
     <Stack mt={"00px"} padding={{xs:"0px", sm:"70px"}} paddingRight={{sm:"200px"}} direction={{ xs: 'row-reverse', sm: 'row-reverse' }}
     spacing={{ xs: 1, sm: 2, md: 8 }} >
     <Button style={{ marginTop: '50px', color:"black" ,marginBottom:"4px", fontWeight: "bold", backgroundRepeat:"no-repeat", backgroundColor: "#E4E4E4", borderRadius: "20px",  width:"120px",  height:"140px", backgroundImage:`url(/FLAC/living.png)`,backgroundPositionX:"center" ,backgroundSize: "90px 90px"}} variant="contained"><Typography className='button-text'>Flac Community</Typography></Button>
     <Button style={{ marginTop: '50px', color:"black",  marginBottom:"4px", fontWeight: "bold", backgroundRepeat:"no-repeat", backgroundColor: "#E4E4E4", borderRadius: "20px",  width:"120px",  height:"140px", backgroundImage:`url(/FLAC/seat.png)`, backgroundPositionX: "center", backgroundSize: "110px 110px"}} variant="contained"><Typography className='button-text'>Flac Living</Typography></Button>
     <Button style={{marginTop: '50px', color:"#FE7122",marginBottom:"4px", fontWeight: "bold", backgroundRepeat:"no-repeat", backgroundColor: "#ECECEC", borderRadius: "20px",  width:"120px", height:"140px", backgroundImage:`url(/FLAC/food.png)`, backgroundPosition: "center", backgroundSize: "80px 70px"}} variant="contained"><Typography className='button-text'>Flac Food</Typography></Button>
     </Stack>
     </div>
    );
  }