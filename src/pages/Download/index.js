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


const Download = () =>{

  const classes = useStyles();

  return (
    <>
    <Typography variant="h1">STÁHNĚTE SI</Typography>

    <Card className={classes.root}>
        <CardContent>
            <Typography variant="h2">1. BALÍČEK - ELEGANTNÍ</Typography>
      </CardContent>
    </Card>
    
    <Card className={classes.root}>
        <CardContent>
            <Typography variant="h2">2. BALÍČEK - MINIMALISTICKÝ</Typography>
      </CardContent>
    </Card>

    <Card className={classes.root}>
        <CardContent>
            <Typography variant="h2">3. BALÍČEK - Expresivní</Typography>
      </CardContent>
    </Card>

    </>
  )
}

export default Download;



