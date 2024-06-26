"use client"

import UserContext from '@/src/contexts/UserContext';
import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import * as React from 'react';
import Layout from '../../components/Layout';

export default function Page({ params }) {
    const [users, setUsers] = React.useState([])
    const { userData } = React.useContext(UserContext)

    React.useEffect(() => {
        const getTrainings = async () => {
            const request = await fetch(`/api/manager/users?training=${params.id}&concessionaire=${userData.id}`, {
                method: 'GET',
            })

            const response = await request.json()

            if (request.ok) {
                setUsers(response)
            } else {
                setUsers(response)
            }
        }

        getTrainings()
    }, [])
    
    return(
        <Layout>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <React.Fragment>
                                <Box className="flex justify-between">
                                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                        Usuários cadastrados nesse treinamento
                                    </Typography>
                                </Box>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Nome</TableCell>
                                            <TableCell align="right">CPF</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {users.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell className='font-bold'>#{row.id}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell align="right">{row.document}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </React.Fragment>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}