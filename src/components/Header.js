import React from 'react'
import {AppBar,Container,Toolbar,Typography,Select,MenuItem,CssBaseline} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../CryptoContext'

const darkTheme = createTheme({
    palette: {
        primary: {
          main: "#fff",
        },
        mode: 'dark',
  },
});


export default function Header() {
    const navigate = useNavigate()
    const { currency, setCurrency } = CryptoState();
    
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
    <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              onClick={() => navigate(`/`)}
              style={{ flex: 1,
                color: "#3486eb",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer"
                    }}
              >
              Crypto Tracker
            </Typography>
            <Select   value={currency} variant="outlined" defaultValue={"INR"}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
              >
             
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
      </ThemeProvider>
  )
}
