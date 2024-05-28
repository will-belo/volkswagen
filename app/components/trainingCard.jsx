"use client"

import * as React from 'react';
import locations from '@/src/locations.json'
import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material"
import Title from './title';

export default function TrainingCard(props) {
    const [open, setOpen] = React.useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)
    const [formRender, setFormRender] = React.useState(0)
    const [cities, setCities] = React.useState([])
    const [formData, setFormData] = React.useState({
        format: '',
        auto_repair_state: '',
        auto_repair_city: ''
    })  

    const handleFormatChange = (event) => {
        handleInputChange(event)

        if(event.target.value === 'inperson'){
            setFormRender(1)
        }else{
            setFormRender(0)
        }
    } 

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }; 

    const handleStateChange = (event) => {
        const state = event.target.value;

        handleInputChange(event)

        const stateData = locations.estados.find(est => est.sigla === state);

        setCities(stateData ? stateData.cidades : []);
    };

    console.log(formData)
    
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 194 }}
                component="img"
                image="https://placehold.co/500"
            />
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    {props.content.name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className="flex justify-between px-5 pb-5">
                <Typography variant="button" color="text.secondary">
                    Gratis
                </Typography>
                <Button variant="contained" onClick={handleOpen}>Inscreva-se</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 450,
                        bgcolor: 'background.paper',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: 2,
                        p: 4,
                    }}>
                        <Box noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel id="format">Formato do treinamento</InputLabel>
                                        <Select required fullWidth labelId="format" label="Formato do treinamento" value={formData.format} onChange={handleFormatChange} name="format">
                                            <MenuItem key="format-online" value="online">Online</MenuItem>
                                            <MenuItem key="format-inperson" value="inperson">Presencial</MenuItem>
                                        </Select>
                                    </FormControl>

                                    {formAutoRepair(formRender)}
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Modal>
            </CardActions>
        </Card>
    )

    function formAutoRepair(form){
        switch(form){
            case 1:
            return(
                <Box component="form" noValidate sx={{ mt: 3 }}>

                    <Title title="Escolha uma concessionária" mt="7" mb="5" />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="auto-repair-state-select-label">Estado</InputLabel>
                            <Select required fullWidth labelId="auto-repair-state-select-label" value={formData.auto_repair_state} onChange={handleStateChange} name="auto_repair_state">
                                {locations.estados.map((estado) => (
                                    <MenuItem key={estado.sigla} value={estado.sigla}>{estado.nome}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="auto-repair-city-select-label">Cidade</InputLabel>
                            <Select required fullWidth labelId="auto-repair-city-select-label" value={formData.auto_repair_city} onChange={handleInputChange} name="auto_repair_city">
                                {cities.map((cidade, index) => (
                                    <MenuItem key={index} value={cidade}>{cidade}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </Box>
            )
        }
    }
}