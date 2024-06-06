"use client"
// @refresh reset

import * as React from 'react';
import { Box, Button, Grid, Typography } from "@mui/material"
import Title from '../components/title';
import SubscribeModal from '../components/subscribe';
import moment from 'moment';
import DescriptionIcon from '@mui/icons-material/Description';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import UserContext from "@/src/contexts/UserContext";


export default function Training() {
    const [training, setTraining] = React.useState([])
    const { isAuthenticated, userData, logout } = React.useContext(UserContext);

    React.useEffect(() => {
        const getTrainings = async () => {
            const request = await fetch('/api/trainings', {
                method: 'GET',
            })

            const response = await request.json()

            if (request.ok) {
                response.map((training, index) => {
                    if (training.active == 1) {
                        setTraining(training)
                    }
                })
            } else {
                setTraining(response)
            }
        }

        getTrainings()
    }, [])


    return (
        <main className="flex flex-col gap-5 lg:px-40 px-5">
            <Title title="Treinamento" />

            <Grid container spacing={2} className='flex justify-around mt-10'>
                <Grid item xs={12} md={7} sx={{ mb: { xs: 8, md: 0 } }}>
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
                            backgroundColor: "#023489",
                            borderRadius: 3,
                            zIndex: -1,
                            '@media (max-width: 600px)': {
                                width: '90%',
                            }
                        }
                    }}>
                        <Box sx={{ position: 'absolute', top: -40 }}>
                            <Typography variant='h5' className='font-thin text-sky-100'>
                                Tema: <span className='font-bold'>{training.name}</span>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center' }}>
                    <DescriptionCard icon={<DescriptionIcon />} description="Descrição" content={training.description} />

                    <DescriptionCard icon={<EventRoundedIcon />} description="Data" content={moment(training.date).format('DD/MM/YYYY')} />

                    <DescriptionCard icon={<TravelExploreRoundedIcon />} description="Local" content="Participe online direto de casa ou em uma concessionária VW cadastrada" />

                    <DescriptionCard icon={<SavingsRoundedIcon />} description="Preço" content="Gratuito" />

                    <Box>
                        {training.active == 1 ? (
                            <SubscribeModal content={training} type="insert">Fazer Inscrição</SubscribeModal>
                        ) : (
                            <Typography variant="button" color="text.secondary">
                                Treinamento encerrado
                            </Typography>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </main>
    )
}

function DescriptionCard(props) {
    return (
        <Box sx={{
            backgroundColor: "#023489",
            color: "white",
            borderRadius: 3,
            py: 2,
            px: 3,
        }}>
            <Typography variant='h5' className='flex items-center gap-x-2 font-semibold'>
                {props.icon} {props.description}
            </Typography>
            <Typography variant='body1' className='font-thin'>
                {props.content}
            </Typography>
        </Box>
    )
}