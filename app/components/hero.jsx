"use client";

import { Box, Grid, Typography } from "@mui/material";

export default function Hero(props) {
  return (
    <Box sx={{ position: 'relative', height: '78vh' }}>
        <Box
        sx={{
            width: '85%',
            position: 'relative',
            backgroundImage: `url(${props.background.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: 'cover',
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            textAlign: 'left',
            display: 'flex',
            height: '100%',
            color: 'white',
            padding: 0,
            '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%)',
                zIndex: 1,
            },
            '::after': {
                content: '""',
                width: '93vw',
                height: '105%',
                position: 'absolute',
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgb(240, 240, 240)',
                zIndex: -1,
            },
            '> *': {
                position: 'relative',
                zIndex: 2,
            },
        }}
        >
        </Box>
        <Box sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            paddingLeft: 10, 
            paddingRight: 10, 
            zIndex: 3, 
            height: '100%',
            overflow: 'hidden',
            color: 'white'
        }}>
            <Grid container sx={{ height: '100%' }}>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 5 }}>
                    <Typography variant="h4" className="uppercase text-amber-500 font-bold">
                        {props.subtitle}
                    </Typography>
                    <Typography variant="h4" className="uppercase font-bold" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {props.dateTime} {/* Formatar date time vindo do banco */}
                    </Typography>
                </Grid>

                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'end' }}>
                    {props.children}
                </Grid>
            </Grid>
        </Box>
    </Box>
  );
}
