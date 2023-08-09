import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {Instagram, LinkedIn, Twitter} from "@mui/icons-material";
import { Box } from "@mui/material";
import Chip from '@mui/material/Chip';
import MdPhone from '@mui/icons-material/Phone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';
export default function Footer() {
  return (
    <Box component="footer" sx={{backgroundColor: "black", p: 6, paddingBottom: '10px'}}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
        <Typography variant="h4" color="white" gutterBottom> Contact Us </Typography>
	<Link href="https://wa.me/+91xxxxxxxxxx">
        <Chip icon={<WhatsAppIcon style={{ color: '#4EFA55'}} /> } label={"+91 xxxxxxxxxx"}  style={{ color: 'white' }} />
	</Link>
        <Grid item xs={12} sm={12}>
	<Link href="Tel:+91xxxxxxxxxx">
        <Chip icon={<MdPhone style={{ color: '#E95C0D'}}/>} label={"+91 xxxxxxxxxx"}  style={{ color: 'white' }} />
	</Link>        
</Grid>
      <Grid item xs={12} sm={12}>
	<Link href="mailto:xxxxxxxx.com">
      <Chip icon={<MarkunreadIcon style={{ color: 'white'}} />} label={"info@abcservices.com"}  style={{ color: 'white' }} />
	</Link>      
</Grid>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" color="black" gutterBottom>.</Typography>
	<Link href="https://goo.gl/maps/cjXQqzuxzxfXQ9or6">
          <Chip icon={<LocationOnIcon style={{ color: '#E95C0D'}}/>} style={{ color: 'white' }}/>
         <Typography variant="h8" color="white" gutterBottom> Curabitur convallis ac quam vitae laoreet.</Typography>
          </Link></Grid>
        </Grid>
        <Divider color='white' />
        <Box marginTop={'20px'}>   
        <Grid container spacing={2}>
        <Grid item xs={8}>
        <Typography variant="body2" marginBottom={'5px'} color="white" >{"Copyright "}{new Date().getFullYear()}</Typography>
        </Grid>
        <Grid item xs={4}>
        <Box display="flex" justifyContent="flex-end">
        <Link href="https://www.linkedin.com/company/flacservices/?originalSubdomain=in" style={{ color: '#007BB7' }} ><LinkedIn /></Link>
        <Link href="https://www.instagram.com/flackaro/" sx={{ pl: 1, pr: 1 }} style={{  color: '#CC4732' }}><Instagram /></Link>

        <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fflackaro" style={{ color: '#007BB7' }}><Twitter /></Link>
        </Box>
        </Grid>
      </Grid>
        </Box>
      </Container>
    </Box>
  );
}
