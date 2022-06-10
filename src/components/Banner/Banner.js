import React from 'react'
import {Typography,Container} from '@mui/material'
import Carousel from './Carousel';

const styles = ({
    banner: {
      backgroundImage: "url(./banner2.jpg)"
    },
    bannerContent: {
      height: 400,
      display: "flex",
      flexDirection: "column",
      paddingTop: 25,
      justifyContent: "space-around"
    },
    tagline: {
      display: "flex",
      height: "40%",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center"
    },
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center"
    }
  });

export default function Banner() {
  return (
    <div style={styles.banner}>
      <Container style={styles.bannerContent}>
        <div style={styles.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  )
}
