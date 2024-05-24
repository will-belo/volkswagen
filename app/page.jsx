"use client"

import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material"
import Cards from "./components/card"
import Hero from "./components/hero"
import Title from "./components/title"
import EastIcon from '@mui/icons-material/East'

export default function Home() {

  return (
    <div>
      <Hero />
      <main className="flex flex-col gap-5 my-20 px-20">
        <Box sx={{ backgroundColor: 'rgb(56, 54, 219)', color: 'white', padding: 5, borderRadius: 1 }}>
          <Box className="flex items-center justify-center mb-7">
              <Box flexGrow={1}>
                  <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
              </Box>
              <Box px={2}>
                <Typography variant="h5" className="uppercase font-bold">
                  Treinamentos anteriores
                </Typography>
              </Box>
              <Box flexGrow={1}>
                  <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
              </Box>
          </Box>
          <Grid container spacing={7}>
            <Grid item xs={3}>
              <Box sx={{ width: '100%', minHeight: 170, backgroundColor: 'white', borderRadius: 1 }}>
              
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ width: '100%', minHeight: 170, backgroundColor: 'white', borderRadius: 1 }}>
              
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ width: '100%', minHeight: 170, backgroundColor: 'white', borderRadius: 1 }}>
              
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ width: '100%', minHeight: 170, backgroundColor: 'white', borderRadius: 1 }}>
              
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Title title="Últimas edições" />
        </Box>

        <Box>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Cards></Cards>
            </Grid>
            <Grid item xs={3}>
              <Cards></Cards>
            </Grid>
            <Grid item xs={3}>
              <Cards></Cards>
            </Grid>
            <Grid item xs={3}>
              <Cards></Cards>
            </Grid>
          </Grid>
        </Box>

        <Box className="my-20">
          <Grid container spacing={7}>
            <Grid item xs={7}>
              <Box sx={{
                position: 'relative',
                backgroundImage: 'url(https://placehold.co/1920x1080)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                minHeight: 400,
                width: '100%',
                padding: 0,
                '::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: -60,
                  bottom: 0,
                  width: 50,
                  background: 'linear-gradient(to right, rgba(30,26,103,1) 75%, rgba(51,51,237,1) 75%)',
                  zIndex: 1,
                },
              }}>
                
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box sx={{ 
                backgroundColor: 'rgb(250, 250, 250)',
                width: '100%',
                height: '100%',
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <Box sx={{
                  textAlign: 'left',
                  padding: 10,
                }}>
                  <Typography variant="subtitle1" className="uppercase font-bold text-blue-400" gutterBottom>
                    Treinamentos anteriores
                  </Typography>
                  <Typography variant="h5" className="uppercase font-bold" gutterBottom>
                    Treinamentos anteriores
                  </Typography>
                  <Typography variant="body1" className="" gutterBottom>
                    A eficiência de manutenção da
                    Volkswagen não se discute. Um
                    serviço para veículos com mais de 3
                    anos que garante a mesma segurança
                    das peças aplicadas em veículos zero
                    quilômetro. Acesse o guia gratuito do
                    Catálogo Economy e saiba mais.
                  </Typography>
                  <Button variant="text" endIcon={<EastIcon />}>Saiba Mais</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Title title="Peças VW" />
        </Box>

        <Box sx={{ 
          background: 'linear-gradient(180deg, rgba(30,26,103,1) 35%, rgba(51,51,237,1) 35%, rgba(51,51,237,1) 50%, rgba(255,255,255,1) 50%);',
          borderTopLeftRadius: 25,
          width: '100%',
          padding: 7,
        }}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Box sx={{ width: '100%', backgroundColor: 'white', borderRadius: 1, borderTopRightRadius: 25, borderBottomLeftRadius: 25, }} className="shadow-md">
                a
              </Box>  
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ width: '100%', minHeight: 170, backgroundColor: 'white', borderRadius: 1 }}>
                
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ width: '100%', minHeight: 170, backgroundColor: 'white', borderRadius: 1 }}>
                
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ width: '100%', minHeight: 170, backgroundColor: 'white', borderRadius: 1 }}>
                
              </Box>
            </Grid>
          </Grid>
        </Box>
      </main>
      
    </div>
  )
}
