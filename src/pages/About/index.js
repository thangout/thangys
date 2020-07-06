import React, { useEffect, useState } from 'react';
import {
    Typography,
    Paper,
    Card,
    CardContent,
    CardActionArea 
}  from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    marginBottom: 12,
  },
});


const About = () =>{

  const classes = useStyles();

  return (
    <>
    <Typography variant="h1">Kdo je Thangys?</Typography>

    <Card className={classes.root}> <CardContent>
        <Typography variant="h2">V JEDNOM SLOVĚ</Typography>
        <Typography>Kreativec</Typography>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h2">V JEDNÉ VĚTĚ</Typography>
        <Typography>Kreativní tvůrce obsahu na Instagram</Typography>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h2">V JEDNOM ODSTAVCI</Typography>
        <Typography>Vystudoval jsem</Typography>
      </CardContent>
    </Card>

    </>
  )
}

export default About;

