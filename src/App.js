import React from 'react';
import { Typography,AppBar,Card,CardActions,CardMedia,CssBaseline,Grid,Toolbar,Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
// import {ButtonGroup} from '@mui/material';
import useStyles from './styles';
import Button from '@mui/material/Button';

const App = () => {
  const classes = useStyles();
  return (
   <>
   <CssBaseline/>
   <AppBar position='relative'>
   <Toolbar>
    <PhotoCamera className={classes.icon} />
    <Typography variant='h6'>
     Photo Album
    </Typography>
   </Toolbar>
   </AppBar>
   <main>
    <div className={classes.container}>
      <Container maxWidth='sm' style={{marginTop:'100px'}}>
        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
          Photo Album
        </Typography>
        <Typography variabt='h5' align='center' color='textSecondary' paragraph>
          This is photo album, how does it look like on the screen
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                  <Button variant='contained' color='primary'>
                       See my photos
                  </Button>
              </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>
                   Secondary action
              </Button>
            </Grid>
            </Grid>

          </div>
      </Container>
    </div>
    {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup> */}
  <Container className={classes.cardGrid} maxWidth='md'>
    <Grid container spacing={4}>
     <Grid itme> 
       <Card className={classes.cards}>
       <CardMedia 
       className={classes.cardMedia}
       image='https://source.unsplash.com/random'
        title='Image title'
       />
       <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant='h5'></Typography>
       </CardContent>
       </Card>
     </Grid>
    </Grid>
  </Container>
   </main>
   </>
  );
}
export default App;
