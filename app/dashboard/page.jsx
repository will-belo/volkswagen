"use client"
// @refresh reset

import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material"
import Title from '../components/title';
import Videos from '../components/videos';
import Video from '../components/video';
import TrainingCard from '../components/trainingCard';
import SubscribedCard from '../components/subscribed';

export default function Dashboard() {
    const [trainings, setTrainings] = React.useState([])
    const [subscribedTrainings, setSubscribedTrainingss] = React.useState([])

    const [verifySubscribed, setVerifySubscribed] = React.useState(null)
    const [verify, setVerify] = React.useState(null)

    React.useEffect(() => {
        const getTrainings = async () => {
            const request = await fetch('/api/trainings', {
                method: 'GET',
            })

            const response = await request.json()

            if (request.ok) {
                setTrainings(response)
                setVerify(true)
            } else {
                setTrainings(response)
                setVerify(false)
            }
        }

        getTrainings()
    }, [verify])

    React.useEffect(() => {
        const getTrainings = async () => {
            const request = await fetch('/api/subscribedTrainings', {
                method: 'GET',
                cache: 'no-cache'
            })

            const response = await request.json()

            if (request.ok) {
                setSubscribedTrainingss(response)
                setVerifySubscribed(true)
            } else {
                setSubscribedTrainingss(response)
                setVerifySubscribed(false)
            }
        }

        getTrainings()
    }, [verifySubscribed])

    return (
        <main className="flex flex-col gap-5 my-5 px-20">
            {/*             
            <Videos>
                <Video url="https://placehold.co/1360x768" />
            </Videos> */}

            <Title title="Treinamentos" />
            <div className='grid xl:grid-cols-3 md:grid-cols-2  gap-10 lg:mx-20'>
                {verify ?
                    [...trainings].reverse().map((training, index) => (
                        <div className='xl:col-span-1 col-span-3'>
                            <TrainingCard key={index} content={training} />
                        </div>
                    ))
                    :
                    <Typography variant='h6'>{trainings}</Typography>
                }
            </div>
            <Title title="Seus treinamentos" />
            <div className='grid grid-cols-3 gap-10 lg:mx-20'>
                {
                    verifySubscribed ?
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
            </div>
        </main >
    )
}