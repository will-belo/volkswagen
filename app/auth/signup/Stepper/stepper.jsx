"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import locations from '@/src/locations.json'
import MaskedInput from '@/app/components/mask/inputMask';
import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, Link, Menu, MenuItem, Select, TextField } from '@mui/material';

export default function StepToRender(activeStep, formData, setFormData){
    const [cities, setCities] = React.useState([])
    const [citiesAutoRepair, setCitiesAutoRepair] = React.useState([])
    const [formRender, setformRender] = React.useState(0)
    const [isChecked, setIsChecked] = React.useState(false)
    const [autoRepairInfo, setautoRepairInfo] = React.useState(null)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked)
        
        const { name, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: checked
        }));
    }
    
    const handleCNPJVerify = async (event) => {
        handleInputChange(event)

        if(event.target.value.length >= 18){

            const data = 'cnpj=' + encodeURIComponent(event.target.value)

            const request = await fetch('http://127.0.0.1:80/api/getByCNPJ', {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': 'no-Cors'
                }
            })

            const response = await request.json()
            
            if(!response){
                setformRender(1)
            }else{
                setautoRepairInfo(response)
            }
        }
    }
    
    React.useEffect(() => {
        if(autoRepairInfo != null){
            setformRender(2)

            setFormData((prevFormData) => ({
                ...prevFormData,
                exist: true,
                auto_repair_id: autoRepairInfo.id
            }));
        }
    }, [autoRepairInfo])
      
    const handleStateChange = (event) => {
        const state = event.target.value;

        handleInputChange(event)

        const stateData = locations.estados.find(est => est.sigla === state);

        setCities(stateData ? stateData.cidades : []);
    };

    const handleStateChangeAutoRepair = (event) => {
        const state = event.target.value;

        handleInputChange(event)

        const stateData = locations.estados.find(est => est.sigla === state);

        setCitiesAutoRepair(stateData ? stateData.cidades : []);
    };

    function steps(activeStepVerify){
        switch(activeStepVerify){
            case 0:
                return(
                    <Box noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} value={formData.name} key="name" required fullWidth id="name" label="Nome" name="name" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleInputChange} value={formData.document} key="document" required fullWidth id="document" label="CPF" name="document" InputProps={{
                                    inputComponent: MaskedInput,
                                        inputProps: {
                                            mask: '000.000.000-00',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleInputChange} value={formData.phone} key="phone" required fullWidth id="phone" label="Celular" name="phone" InputProps={{
                                    inputComponent: MaskedInput,
                                        inputProps: {
                                            mask: '(00) 0 0000-0000',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="gender">Gênero</InputLabel>
                                    <Select required fullWidth labelId="gender" label="Gênero" value={formData.gender} onChange={handleInputChange} name="gender">
                                        <MenuItem key="gender-female" value="Feminino">Feminino</MenuItem>
                                        <MenuItem key="gender-male" value="Masculino">Masculino</MenuItem>
                                        <MenuItem key="gender-other" value="Outros">Outros</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleInputChange} value={formData.born_at} key="born_at" required fullWidth id="born_at" label="Data de Nascimento" name="born_at" InputProps={{
                                    inputComponent: MaskedInput,
                                        inputProps: {
                                            mask: '00/00/0000',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} value={formData.email} key="email" required fullWidth id="email" label="Email" name="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} key="password" required fullWidth id="password" label="Senha" name="password" type="password" />
                            </Grid>
                        </Grid>
                    </Box>
                )
            case 1:
                return(
                    <Box noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InputLabel id="state-select-label">Estado</InputLabel>
                                <Select required fullWidth labelId="state-select-label" value={formData.state} onChange={handleStateChange} name="state">
                                    {locations.estados.map((estado) => (
                                        <MenuItem key={estado.sigla} value={estado.sigla}>{estado.nome}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel id="city-select-label">Cidade</InputLabel>
                                <Select required fullWidth labelId="city-select-label" value={formData.city} onChange={handleInputChange} name="city">
                                    {cities.map((cidade, index) => (
                                        <MenuItem key={index} value={cidade}>{cidade}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} value={formData.street} required fullWidth id="street" label="Rua" name="street" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleInputChange} value={formData.number} required fullWidth id="number" label="Número" name="number" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleInputChange} value={formData.cep} required fullWidth id="cep" label="CEP" name="cep" InputProps={{
                                    inputComponent: MaskedInput,
                                        inputProps: {
                                            mask: '00000-000',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )
            case 2:
            return(
                <div>
                    <Box noValidate sx={{ mt: 8, ml: 5 }}>
                        <Grid container spacing={2}>
                            <FormControlLabel required control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} name="check" />} label="Possui ou trabalha em oficina?" />
                        </Grid>
                    </Box>
    
                    { isChecked && (
                        <Box noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField required fullWidth id="cnpj" label="CNPJ" name="cnpj" value={formData.cnpj} InputProps={{
                                        inputComponent: MaskedInput,
                                            inputProps: {
                                                mask: '00.000.000/0000-00',
                                            },
                                        }}
                                    onChange={handleCNPJVerify} />
    
                                    {formAutoRepair(formRender)}
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </div>
            )
        }
    }

    function formAutoRepair(form){
        switch(form){
            case 1:
                return(
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} value={formData.fantasy_name} fullWidth id="fantasy_name" label="Nome Fantasia" name="fantasy_name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} value={formData.role} fullWidth id="role" label="Cargo" name="role" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleInputChange} value={formData.branch_activity} fullWidth id="branch_activity" label="Ramo de atividade" name="branch_activity" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleInputChange} value={formData.auto_repair_phone} fullWidth id="auto_repair_phone" label="Telefone da oficina" name="auto_repair_phone" InputProps={{
                                    inputComponent: MaskedInput,
                                        inputProps: {
                                            mask: '(00) 0 0000-0000',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel id="auto-repair-state-select-label">Estado</InputLabel>
                                <Select required fullWidth labelId="auto-repair-state-select-label" value={formData.auto_repair_state} onChange={handleStateChangeAutoRepair} name="auto_repair_state">
                                    {locations.estados.map((estado) => (
                                        <MenuItem key={estado.sigla} value={estado.sigla}>{estado.nome}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel id="auto-repair-city-select-label">Cidade</InputLabel>
                                <Select required fullWidth labelId="auto-repair-city-select-label" value={formData.auto_repair_city} onChange={handleInputChange} name="auto_repair_city">
                                    {citiesAutoRepair.map((cidade, index) => (
                                        <MenuItem key={index} value={cidade}>{cidade}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} value={formData.auto_repair_street} required fullWidth id="auto_repair_street" label="Rua" name="auto_repair_street" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleInputChange} value={formData.auto_repair_number} required fullWidth id="auto_repair_number" label="Número" name="auto_repair_number" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField onChange={handleInputChange} value={formData.auto_repair_cep} required fullWidth id="auto_repair_cep" label="CEP" name="auto_repair_cep" InputProps={{
                                    inputComponent: MaskedInput,
                                        inputProps: {
                                            mask: '00000-000',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                )
            case 2:
                return(
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField value={autoRepairInfo.fantasy_name} fullWidth id="fantasy_name" label="Nome Fantasia" name="fantasy_name" aria-readonly />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={autoRepairInfo.branch_activity} fullWidth id="branch_activity" label="Ramo de atividade" name="branch_activity" aria-readonly />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onChange={handleInputChange} value={formData.role} fullWidth id="role" label="Cargo" name="role" />
                            </Grid>
                        </Grid>
                    </Box>
                )
        }
    }

    return(
        steps(activeStep)
    )
}