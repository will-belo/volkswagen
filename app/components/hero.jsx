"use client";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import HeroCards from "./heroCard";

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://t.ctcdn.com.br/n5EmxtRS2sDQHvi-JFF9C_im8Lk=/4320x2430/smart/i558323.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        textAlign: 'left',
        display: 'flex',
        height: '80vh',
        color: 'white',
        padding: 0,
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          zIndex: 1,
        },
        '> *': {
          position: 'relative',
          zIndex: 2,
        },
      }}
    >
        <Box sx={{ zIndex: 2, width: '100%', paddingX: 15, overflow: 'hidden' }}>
            <Grid container sx={{ height: '100%' }}>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 5 }}>
                    <Typography variant="h4" className="uppercase text-amber-500 font-bold">
                        2º Treinamento
                    </Typography>
                    <Typography variant="h4" className="uppercase font-bold" gutterBottom>
                        T-Cross Tecnologias em motores turbo
                    </Typography>
                    <Typography variant="subtitle1">
                        Dia 16 de Abril | às 00:00
                    </Typography>
                </Grid>

                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'end' }}>
                    <Box>
                        <HeroCards title="2º Treinamento" date="Dia 16 de Abril | às 00:00" button="Disponível">
                            T-Cross segue sucesso do Taos e ganha equipamentos premium
                        </HeroCards>
                    </Box>
                    <Box>
                        <HeroCards title="2º Treinamento" date="Dia 16 de Abril | às 00:00" button="Em breve">
                            T-Cross segue sucesso do Taos e ganha equipamentos premium
                        </HeroCards>
                    </Box>
                    <Box>
                        <HeroCards title="2º Treinamento" date="Dia 16 de Abril | às 00:00" button="Em breve">
                            T-Cross segue sucesso do Taos e ganha equipamentos premium
                        </HeroCards>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
  );
}
