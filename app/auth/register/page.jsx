"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import locations from '@/src/locations.json'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Checkbox, Container, CssBaseline, FormControlLabel, Grid, InputLabel, Link, Menu, MenuItem, Select, TextField } from '@mui/material';
import MaskedInput from '@/app/components/mask/inputMask';

const steps = ['Cadastro básico', 'Adicionar endereço', 'Informações finais'];

const defaultTheme = createTheme();

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedState, setSelectedState] = React.useState('');
  const [cities, setCities] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleCounter = (event) => {
    console.log(event.target.value.length)
  }
  
  const handleStateChange = (event) => {
    const state = event.target.value;

    setSelectedState(state);

    const stateData = locations.estados.find(est => est.sigla === state);

    setCities(stateData ? stateData.cidades : []);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  function StepToRender(activeStepVerify){
    switch(activeStepVerify){
      case 0:
        return(
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="name" label="Nome" name="name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="gender" required fullWidth id="gender" label="Gênero" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="born_at" label="Data de Nascimento" name="born_at" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Senha" type="password" id="password" autoComplete="new-password" />
              </Grid>
            </Grid>
          </Box>
        )
      case 1:
        return(
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel id="state-select-label">Estado</InputLabel>
                <Select required fullWidth labelId="state-select-label" value={selectedState} onChange={handleStateChange}>
                  {locations.estados.map((estado) => (
                    <MenuItem key={estado.sigla} value={estado.sigla}>{estado.nome}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel id="city-select-label">Cidade</InputLabel>
                <Select required fullWidth labelId="city-select-label">
                  {cities.map((cidade, index) => (
                    <MenuItem key={index} value={cidade}>{cidade}</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="name" label="Rua" name="name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="name" label="Número" name="name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="name" label="CEP" name="name" />
              </Grid>
            </Grid>
          </Box>
        )
      case 2:
        return(
          <div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 8, ml: 5 }}>
              <Grid container spacing={2}>
                <FormControlLabel required control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label="Possui ou trabalha em oficina?" />
              </Grid>
            </Box>

            { isChecked && (
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="cnpj" label="CNPJ" name="cnpj" InputProps={{
                      inputComponent: MaskedInput,
                      inputProps: {
                        mask: '00.000.000/0000-00',
                      },
                    }}
                    onChange={handleCounter} />
                  </Grid>
                </Grid>
              </Box>
            )}
          </div>
        )
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box sx={{ marginTop: 8 }}>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography className='mb-5' component="h1" variant="h5">
              Faça seu cadastro
            </Typography>
          </Box>

          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Cadastro completo, você será redirecionado em breve.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {StepToRender(activeStep)}

              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Voltar</Button>
                
                <Box sx={{ flex: '1 1 auto' }} />

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                </Button>
              </Box>
            </React.Fragment>
          )}
          
        </Box>
      </Container>
    </ThemeProvider>
  );
}
