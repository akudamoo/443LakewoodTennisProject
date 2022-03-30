import React from 'react'
import CustomBtn from './CustomBtn'
import tennisman from '../tennisman.PNG'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import { Link } from 'react-router-dom';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:540px)']: { 
           display: "none"
           }
    },
    menuItem: {
        cursor: "pointer", 
        color: "black",
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>  
                <img src={tennisman} className={classes.logo}/> 
                <Typography variant="h6" className={classes.menuItem}>
                        <b> Info </b>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <b> Reservations </b>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <b> Tournaments </b>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <b> Singles Ladder </b>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                     <b> About Us </b>
                </Typography>

                <a href="mailto:placeholder@gmail.com?&subject=Placeholder%20Email%20&body=Message%20goes%20here%20"
            target="_top">
                    <CustomBtn txt="Contact Us"/>
                </a>

            </Toolbar>
    )
}

export default NavBar
