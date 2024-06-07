"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Container, CssBaseline } from '@mui/material';
import StepToRender from './Stepper/stepper';
import { useRouter } from 'next/navigation';


const steps = ['Cadastro básico', 'Adicionar endereço', 'Informações finais'];

const defaultTheme = createTheme();

export default function HorizontalLinearStepper() {
  const router = useRouter()
  const [alert, setAlert] = React.useState(null)
  const [activeStep, setActiveStep] = React.useState(0)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    born_at: '',
    document: '',
    password: '',

    state: '',
    street: '',
    number: '',
    city: '',
    cep: '',

    role: '',
    cnpj: '',
    check: '',
    exist: '',
    auto_repair_id: '',
    fantasy_name: '',
    branch_activity: '',
    auto_repair_phone: '',
    auto_repair_state: '',
    auto_repair_city: '',
    auto_repair_street: '',
    auto_repair_number: '',
    auto_repair_cep: '',
  })    

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const sendFormData = new FormData();

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        sendFormData.append(key, formData[key]);
      }
    }

    const request = await fetch('/api/signup',{
      method: 'POST',
      body: sendFormData,
    })

    const response = await request.text()
    
    if( ! request.ok ){
      setAlert(response)
    }else{
      setAlert(null)
      router.push('/auth/login')
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box sx={{ marginTop: 8 }}>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography className='mb-5 text-volks-blue-900 font-bold' component="h1" variant="h5">
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
              {StepToRender(activeStep, formData, setFormData, alert)}

              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button disabled={activeStep === 0} onClick={handleBack} variant="contained" sx={{ mr: 1, backgroundColor: "#022663", ":hover": { backgroundColor: "#184a9b" } }}>Voltar</Button>
                
                <Box sx={{ flex: '1 1 auto' }} />

                {activeStep === steps.length - 1 ?
                  <Button onClick={handleSubmit} variant="contained" sx={{ mr: 1, backgroundColor: "#022663", ":hover": { backgroundColor: "#184a9b" } }}>Finalizar</Button>
                  :
                  <Button onClick={handleNext} variant="contained" sx={{ backgroundColor: "#022663", ":hover": { backgroundColor: "#184a9b" } }}>Próximo</Button>
                }
              </Box>

              { alert && <Alert severity="error">{alert}</Alert> }
            </React.Fragment>
          )}
          
        </Box>
      </Container>
    </ThemeProvider>
  );
}
