import React from 'react';
import { Typography,AppBar,Card,CardActions,CardMedia,CssBaseline,Grid,Toolbar,Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
const App = () => {
  return (
   <>
   <CssBaseline/>
   <AppBar position='relative'>
   <Toolbar>
    <PhotoCamera/>
    <Typography variant='h6'>
     Photo Album
    </Typography>
   </Toolbar>
   </AppBar>
   <main>
    <div>
      <Container maxWidth='sm'>
        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
          Photo Album
        </Typography>
        <Typography variabt='h5' align='center' color='textSecondary' paragraph>
          This is photo album, how does it look like on the screen
          </Typography>
      </Container>
    </div>
   </main>
   </>
  );
}
export default App;
