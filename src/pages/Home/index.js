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

function Home() {
    const classes = useStyles();

    
  return (
      <>
    <Typography variant="h2">DOMŮ</Typography>
    <Typography variant="caption">Vyberte si</Typography>

    <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
                <Typography> Přečíst 7 TIPŮ PŘED ZALOŽENÍM NOVÉHO INSTAGRAM PROFILU</Typography>
            </CardContent>
        </CardActionArea>
    </Card>

    <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
                <Typography> Podivat se na nove Youtube video </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

    <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
                <Typography> Stáhnout startovací balíček pro Instagram </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

    <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
                <Typography> Zjistit kdo je Thangys</Typography>
            </CardContent>
        </CardActionArea>
    </Card>

      </>
  )
}

export default Home;

