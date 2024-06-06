"use client"
// @refresh reset

import * as React from 'react';
import { Box, Button, Grid, Typography  } from "@mui/material"
import Title from '../components/title';

export default function Training(){
    const [training, setTraining] = React.useState([])

    React.useEffect(() => {
        const getTrainings = async () => {
            const request = await fetch('/api/trainings',{
                method: 'GET',
            })

            const response = await request.json()
            
            if(request.ok){
                response.map((training, index) => {
                    if(training.active == 1){
                        setTraining(training)
                    }
                })
            }else{
                setTraining(response)
            }
        }

        getTrainings()
    }, [])

    
    return(
        <main className="flex flex-col gap-5 px-40">
            <Title title="Treinamento" />

            <Grid container className='flex justify-around mt-10'>
                <Grid item xs={7}>
                    <Box sx={{
                        width: '100%',
                        aspectRatio: '16/9',
                        position: 'relative',
                        backgroundImage: `url(${training.cover})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        borderRadius: 3,
                        '::before': {
                            content: '""',
                            position: 'absolute',
                            top: -60,
                            left: -30,
                            right: 0,
                            bottom: -40,
                            width: '75%',
                            background: 'blue',
                            borderRadius: 3,
                            zIndex: -1,
                        }
                    }}>
                        <Box sx={{ position: 'absolute', top: -40}}>
                            <Typography variant='h5' className='font-bold text-white'>
                                Tema: {training.name}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center' }}>
                    <DescriptionCard description="Descrição" content={training.description} />

                    <DescriptionCard description="Data" content={training.date} />

                    <DescriptionCard description="Local" content="Participe online direto de casa ou em uma concessionária VW cadastrada" />

                    <DescriptionCard description="Preço" content="Gratuito" />

                    <Box>
                        <Button variant="contained">Inscreva-se!</Button>
                    </Box> 
                </Grid>
            </Grid>
        </main>
    )
}

function DescriptionCard(props){
    return(
        <Box sx={{
            backgroundColor: 'blue',
            borderRadius: 3,
            py: 2,
            px: 3,
        }}>
            <Typography variant='h6'>
                {props.description}
            </Typography>
            <Typography variant='body1'>
                {props.content}
            </Typography>
        </Box> 
    )
}