"use client"

import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material"
import Title from './title';
import { format } from 'date-fns';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubscribeModal from './subscribe';

export default function SubscribedCard(props) {
    const date = format(new Date(props.content.date), 'dd/MM/yyyy')

    const [trainingAddress, setTrainingAddress] = React.useState('')
    const [trainingFormat, setTrainingFormat] = React.useState('')
    const [trainingLocal, setTrainingLocal] = React.useState('')
    const [verifyLocal, setVerifyLocal] = React.useState(false)
    
    React.useEffect(() => {
        if(props.content.concessionaire[0].id != 0){
            setTrainingFormat('Presencial')
            setTrainingLocal(`
                ${props.content.concessionaire[0].fantasy_name}
            `)
            setTrainingAddress(`
                ${props.content.concessionaire[0].address.street},  
                ${props.content.concessionaire[0].address.number} - 
                ${props.content.concessionaire[0].address.city.value}/
                ${props.content.concessionaire[0].address.city.state.value} 
            `)

            setVerifyLocal(true)
        }else{
            setTrainingFormat('Online')
        }
    }, [])

    return (
        <Card sx={{ maxWidth: 345 }}>
            <ToastContainer />
            <CardMedia
                sx={{ height: 194 }}
                component="img"
                image={props.content.cover}
            />
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    {props.content.name}
                </Typography>
                <Box>
                    <Typography variant="body" color="text.secondary">
                        Data: {date}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body" color="text.secondary">
                        Formato: {trainingFormat}
                    </Typography>
                </Box>
                { verifyLocal &&
                <>
                    <Box>
                        <Typography variant="body" color="text.secondary">
                            Local: {trainingLocal}
                        </Typography>
                    </Box>
                    <Box className="text-center mt-5">
                        <Typography variant="body" color="text.secondary">
                            {trainingAddress}
                        </Typography>
                    </Box>
                </>
                }
            </CardContent>
            <CardActions disableSpacing className="flex justify-between px-5 pb-5">
                <SubscribeModal content={props.content} type="update" id={props.content.users[0].pivot.id}>Atualizar Inscrição</SubscribeModal>
            </CardActions>
        </Card>
    )
}