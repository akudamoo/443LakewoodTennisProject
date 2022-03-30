import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar';
import cursedtennis from './cursedtennis.PNG';
import gokutennis from './gokutennis.jpg';
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Information from "./components/Information"

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
    pic: {
      width: "15%", 
      ['@media (max-width:780px)']: { 
        display: "none"
        }
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        





        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Lakewood Tennis Center 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Lakewood Tennis Center supplies many things such as tennis balls for playing 
            tennis and tennis courts that are rented out for playing tennis and instructors that teach you how to play tennis. Eric is a pretty cool guy too.
            Don't let your dreams be dreams go out and play some tennis.
          </Typography>
          <img src={cursedtennis} className={classes.logo}/> 
          <img src={gokutennis} className={classes.logo}/> 
        </div>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
