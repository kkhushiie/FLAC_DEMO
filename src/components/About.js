import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ backgroundImage: `url(/FLAC/image1.jpg)` }}>
        <Container >
          <Typography variant="h4" color={'white'} align='center' padding={'40px'} paddingTop={'90px'} gutterBottom>
            ABOUT US
          </Typography>
          <Typography variant="body2" color={'white'} fontFamily="Poppins" font-style='normal' fontWeight={400} fontSize={'28px'}
            lineHeight={"42px"}
            letterSpacing={'0.01em'} align='justify' paddingBottom={'85px'} marginBottom={'0px'} gutterBottom>
           Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum erosCurabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
}
