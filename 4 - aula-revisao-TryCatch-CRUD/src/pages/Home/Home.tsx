import React, { useEffect } from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'

import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'

import "./Home.css"

function Home() {

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
        
        <Grid alignItems="center" item xs={6}>
          
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
          </Box>

        </Grid>

        <Grid item xs={6} >
          <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
        </Grid>

        <Grid xs={12} className='postagens'>
          <TabPostagem />
        </Grid>

      </Grid>
    </>
  )
}

export default Home