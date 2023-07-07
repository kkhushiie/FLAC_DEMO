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
            We love home-cooked meals and we want you to love them too. Our platform connects you with housewives who cook tasty and healthy meals for you. You can pick from different dishes and get them delivered to your door. Our platform helps both you and the housewives. You enjoy delicious and nutritious food that feels like home. The housewives share their passion for cooking and earn money from their kitchen. We care about the quality of our food and the environment. We use fresh and local ingredients in our meals. We support local communities and eco-friendly practices. We make our platform easy and convenient for you. We value your feedback and suggestions and improve our service.
          </Typography>
        </Container>
      </div>
    </React.Fragment>
  );
}