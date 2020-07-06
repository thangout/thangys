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


const Information = () =>{

  const classes = useStyles();

  return (
    <>
    <Typography variant="h1">PŘEČTĚTE SI</Typography>

    <Card className={classes.root}> <CardContent>
        <Typography variant="h2">7 TIPŮ JAK ZAČÍT S INSTAGRAMEM</Typography>
        <Typography>Kreativec</Typography>
        1.
      </CardContent>
    </Card>

    </>
  )
}

export default Information;

