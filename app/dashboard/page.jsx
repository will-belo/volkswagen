"use client"
// @refresh reset

import * as React from 'react';
import { Box, Grid, Typography  } from "@mui/material"
import Title from '../components/title';
import Videos from '../components/videos';
import Video from '../components/video';
import TrainingCard from '../components/trainingCard';
import SubscribedCard from '../components/subscribed';

export default function Dashboard(){
    const [trainings, setTrainings] = React.useState([])
    const [subscribedTrainings, setSubscribedTrainingss] = React.useState([])

    const [verifySubscribed, setVerifySubscribed] = React.useState(null)
    const [verify, setVerify] = React.useState(null)
    
    React.useEffect(() => {
        const getTrainings = async () => {
            const request = await fetch('/api/trainings',{
                method: 'GET',
            })

            const response = await request.json()
            
            if(request.ok){
                setTrainings(response)
                setVerify(true)
            }else{
                setTrainings(response)
                setVerify(false)
            }
        }

        getTrainings()
    }, [verify])

    React.useEffect(() => {
        const getTrainings = async () => {
            const request = await fetch('/api/subscribedTrainings',{
                method: 'GET',
            })

            const response = await request.json()
            
            if(request.ok){
                setSubscribedTrainingss(response)
                setVerifySubscribed(true)
            }else{
                setSubscribedTrainingss(response)
                setVerifySubscribed(false)
            }
        }

        getTrainings()
    }, [verifySubscribed])
    
    return(
        <main className="flex flex-col gap-5 my-20 px-20">
            <Videos>
                <Video url="https://placehold.co/1360x768" />
            </Videos>

            <Title title="Treinamentos" />
            
            { verify ?
                trainings.map((training, index) => (
                    <TrainingCard key={index} content={training} />
                ))
            :
                <Typography variant='h6'>{trainings}</Typography>
            }

            <Title title="Seus treinamentos" />
            
            { verifySubscribed ?
                <Grid container>
                    {subscribedTrainings.map((training, index) => (
                        <Grid item xs={3} key={index}>
                            <SubscribedCard key={index} content={training} />
                        </Grid>
                    ))}
                </Grid>
            :
                <Typography variant='h6'>{subscribedTrainings}</Typography>
            }
        </main>
    )
}