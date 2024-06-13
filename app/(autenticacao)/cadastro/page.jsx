"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import locations from '@/src/locations.json';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Checkbox, Container, CssBaseline, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import MaskedInput from '@/app/components/mask/inputMask';


const steps = ['Cadastro básico', 'Adicionar endereço', 'Informações finais'];

const defaultTheme = createTheme();

export default function HorizontalLinearStepper() {
  const router = useRouter()
  const [alert, setAlert] = React.useState(null)
  const [address, setAddress] = React.useState('')
  const [autoRepairAddress, setAutoRepairAddress] = React.useState('')
  const [formRender, setformRender] = React.useState(0)
  const [isChecked, setIsChecked] = React.useState(true) 
  const [autoRepairInfo, setautoRepairInfo] = React.useState(null)
  
  const { register, handleSubmit, setValue, control } = useForm({
    defaultValues: {
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
      complement: '',
      city: '',
      cep: '',


      role: '',
      cnpj: '',
      check: '',
      exist: '',
      fantasy_name: '',
      auto_repair_id: '',
      auto_repair_cep: '',
      branch_activity: '',
      auto_repair_city: '',
      auto_repair_phone: '',
      auto_repair_state: '',
      auto_repair_street: '',
      auto_repair_number: '',
    },
  })

  const handleSearchDocument = async (event) => {
    if(event.target.value.length >= 14){

      const data = 'cpf=' + encodeURIComponent(event.target.value)

      const request = await fetch('https://apivw.oficinabrasil.com.br/api/getByCpf', { // 127.0.0.1:80
        cache: 'no-store',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': 'no-Cors'
        }
      })

      const response = await request.json()
      
      if(request.ok){
        setValue('name', response.Nome)
        setValue('phone', response.Celular)
        setValue('born_at', response.Nascimento)
        setValue('email', response.Email)
      }else{
        setValue('name', '')
        setValue('phone', '')
        setValue('born_at', '')
        setValue('email', '')
      }
    }else{
      setValue('name', '')
      setValue('phone', '')
      setValue('born_at', '')
      setValue('email', '')
    }
  }

  const handleSearchCep = async (event) => {
    if(event.target.value.length == 9){
      const cep = event.target.value.replace(/-/g, '')
      const request = await fetch(`https://viacep.com.br/ws/${cep}/json/ `, {
        cache: 'no-store',
        method: 'GET',
      })

      const response = await request.json()

      if(response.erro){
        setAlert('CEP não encontrado')
        return null
      }else{
        setAlert(null)
        return response
      }
    }else{
      setAlert(null)
    }
  }

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.value)
    
    setValue('check', event.target.value)
  }

  const handleCNPJVerify = async (event) => {
    if(event.target.value.length >= 18){
      const data = 'cnpj=' + encodeURIComponent(event.target.value)

      const request = await fetch('https://apivw.oficinabrasil.com.br/api/getByCNPJ', {
        cache: 'no-store',
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
    }else{
      setformRender(0)
    }
  }

  React.useEffect(() => {
    if(address){
      setValue('state', address.uf)
      setValue('city', address.localidade)
      setValue('street', address.logradouro)
    }else{
      setValue('state', '')
      setValue('city', '')
      setValue('street', '')
    }
  }, [address, setValue])

  React.useEffect(() => {
    if(autoRepairAddress){
      setValue('auto_repair_state', autoRepairAddress.uf)
      setValue('auto_repair_city', autoRepairAddress.localidade)
      setValue('auto_repair_street', autoRepairAddress.logradouro)
    }else{
      setValue('auto_repair_state', '')
      setValue('auto_repair_city', '')
      setValue('auto_repair_street', '')
    }
  }, [autoRepairAddress, setValue])
    
  React.useEffect(() => {
    if(autoRepairInfo != null){
        setformRender(2)

        setValue('exist', true) 
        setValue('auto_repair_id', autoRepairInfo.id)
        setValue('fantasy_name', autoRepairInfo.fantasy_name)
        setValue('branch_activity', autoRepairInfo.branch_activity)
    }
}, [autoRepairInfo])
  
  const onSubmit = async (data) => {
    const formData = new FormData()

    for (const key in data) {
      formData.append(key, data[key])
    }

    const request = await fetch('/api/signup',{
      method: 'POST',
      body: formData,
    })

    const response = await request.text()
    
    if( !request.ok ){
      setAlert(response)
    }else{
      setAlert(null)
      router.push('/login')
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box sx={{ marginTop: 8 }}>

          <form onSubmit={handleSubmit(onSubmit)}>
          
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography className='mb-5 text-volks-blue-900 font-bold' component="h1" variant="h5">
                Faça seu cadastro
              </Typography>
            </Box>

            <Box noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="document"
                    control={control}
                    {...register('document', {onChange: handleSearchDocument})}
                    render={({ field }) => 
                      <TextField key="document" id="document" label="CPF" fullWidth required InputProps={{
                        inputComponent: MaskedInput,
                            inputProps: {
                                mask: '000.000.000-00',
                            },
                        }}
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field}
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => 
                      <TextField key="name" id="name" label="Nome Completo" fullWidth required
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field}
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => 
                      <TextField key="phone" id="phone" label="Telefone" fullWidth required InputProps={{
                        inputComponent: MaskedInput,
                          inputProps: {
                            mask: '(00) 0 0000-0000',
                          },
                        }}
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field} 
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel id="gender">Gênero</InputLabel>
                        <Select labelId="gender" label="Gênero" fullWidth required
                          sx={{backgroundColor: '#F8F8F8','& .MuiOutlinedInput-notchedOutline': {border: 'none'},}}
                          {...field}
                        >
                          <MenuItem key="gender-female" value="Feminino">Feminino</MenuItem>
                          <MenuItem key="gender-male" value="Masculino">Masculino</MenuItem>
                          <MenuItem key="gender-other" value="Outros">Outros</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name="born_at"
                    control={control}
                    render={({ field }) => 
                      <TextField key="born_at" id="born_at" label="Data de Nascimento" fullWidth required InputProps={{
                        inputComponent: MaskedInput,
                          inputProps: {
                            mask: '00/00/0000',
                          },
                        }}
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field}
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => 
                      <TextField key="email" id="email" label="E-Mail" fullWidth required
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field}
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => 
                      <TextField key="password" id="password" label="Senha (mínimo 6 caracteres)" type="password" fullWidth required
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field}
                      />
                    }
                  />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography className='m-5 text-volks-blue-900 font-bold' component="h1" variant="h5">
                Adicione seu endereço
              </Typography>
            </Box>

            <Box noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="cep"
                    control={control}
                    {...register('cep', {
                      onChange: async (event) => {
                        setAddress(await handleSearchCep(event))
                      }
                    })}
                    render={({ field }) => 
                      <TextField key="cep" id="cep" label="CEP" fullWidth required InputProps={{
                        inputComponent: MaskedInput,
                            inputProps: {
                                mask: '00000-000',
                            },
                        }}
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field}
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => 
                      <TextField key="state" id="state" label="Estado" fullWidth required InputProps={{
                          readOnly: true,
                        }}
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field}
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => 
                      <TextField key="city" id="city" label="Cidade" fullWidth required InputProps={{
                          readOnly: true,
                        }}
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field} 
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={8}>
                  <Controller
                    name="street"
                    control={control}
                    render={({ field }) => 
                      <TextField key="street" id="street" label="Rua" fullWidth required
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field} 
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Controller
                    name="number"
                    control={control}
                    render={({ field }) => 
                      <TextField key="number" id="number" label="Número" fullWidth required
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field} 
                      />
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name="complement"
                    control={control}
                    render={({ field }) => 
                      <TextField key="complement" id="complement" label="Complemento" fullWidth
                        sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                        {...field} 
                      />
                    }
                  />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography className='m-5 text-volks-blue-900 font-bold' component="h1" variant="h5">
                Dados da oficina
              </Typography>
            </Box>

            <Box noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2} className="mb-5">
                <Grid item xs={12}>
                  <Controller
                    name="check"
                    control={control}
                    {...register('check', { 
                      onChange: handleCheckboxChange 
                    })}
                    render={({ field }) =>
                      <FormControlLabel control={<Checkbox checked={isChecked} {...field} />} label="Possui ou trabalha em oficina?" />
                    }
                  />
                </Grid>
              </Grid>
              
              { isChecked && (
                <>
                  <Grid item xs={12}>
                    <Controller
                      name="cnpj"
                      control={control}
                      {...register('cnpj', { 
                        onChange: handleCNPJVerify
                      })}
                      render={({ field }) =>
                        <TextField key="cnpj" id="cnpj" label="CNPJ" fullWidth InputProps={{
                          inputComponent: MaskedInput,
                            inputProps: {
                              mask: '00.000.000/0000-00',
                            },
                          }}
                          sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                          {...field} 
                        />
                      }
                    />
                  </Grid>

                  {formAutoRepair(formRender)}
                </>
              )}
            </Box>

            { alert && <Box className="mt-5"><Alert severity="error">{alert}</Alert></Box> }

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button type="submit" variant="contained" sx={{ mr: 1, backgroundColor: "#022663", ":hover": { backgroundColor: "#184a9b" } }}>Finalizar</Button>
            </Box>
          </form>
          
        </Box>
      </Container>
    </ThemeProvider>
  )

  function formAutoRepair(form){
    switch(form){
      case 1:
      return(
        <Box noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="fantasy_name"
                control={control}
                render={({ field }) => 
                  <TextField key="fantasy_name" id="fantasy_name" label="Nome fantasia" fullWidth
                    sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                    {...field}
                  />
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="role"
                control={control}
                render={({ field }) => 
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="role">Cargo</InputLabel>
                    <Select labelId="role" label="Cargo" fullWidth required
                      sx={{backgroundColor: '#F8F8F8','& .MuiOutlinedInput-notchedOutline': {border: 'none'},}}
                      {...field}
                    >
                      <MenuItem key="chefe" value="chefe">Chefe de Oficina</MenuItem>
                      <MenuItem key="comprador" value="comprador">Comprador</MenuItem>
                      <MenuItem key="eletricista" value="eletricista">Eletricista</MenuItem>
                      <MenuItem key="funileiro" value="funileiro">Funileiro</MenuItem>
                      <MenuItem key="garantista" value="garantista">Garantista</MenuItem>
                      <MenuItem key="gerente" value="gerente">Gerente</MenuItem>
                      <MenuItem key="instalador" value="instalador">Instalador</MenuItem>
                      <MenuItem key="mecanico" value="mecanico">Mecânico</MenuItem>
                      <MenuItem key="pintor" value="pintor">Pintor</MenuItem>
                      <MenuItem key="proprietario" value="proprietario">Proprietário</MenuItem>
                      <MenuItem key="retificador" value="retificador">Retificador</MenuItem>
                      <MenuItem key="soldador" value="soldador">Soldador</MenuItem>
                      <MenuItem key="supervisor" value="supervisor">Supervisor</MenuItem>
                      <MenuItem key="tecnico" value="tecnico">Técnico</MenuItem>
                      <MenuItem key="outros" value="outros">Outros</MenuItem>
                    </Select>
                  </FormControl>
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="branch_activity"
                control={control}
                render={({ field }) => 
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="branch_activity">Ramo de atividade</InputLabel>
                    <Select labelId="branch_activity" label="Cargo" fullWidth required
                      sx={{backgroundColor: '#F8F8F8','& .MuiOutlinedInput-notchedOutline': {border: 'none'},}}
                      {...field}
                    >
                      <MenuItem key="eletrica" value="eletrica">Auto Elétrica</MenuItem>
                      <MenuItem key="automotivo" value="automotivo">Centro Automotivo</MenuItem>
                      <MenuItem key="concessionaria" value="concessionaria">Concessionária</MenuItem>
                      <MenuItem key="distribuidor" value="distribuidor">Distribuidor</MenuItem>
                      <MenuItem key="frota" value="frota">Frota</MenuItem>
                      <MenuItem key="funilaria" value="funilaria">Funilaria e Pintura</MenuItem>
                      <MenuItem key="acessorios" value="acessorios">Loja de Acessórios</MenuItem>
                      <MenuItem key="autopecas" value="autopecas">Loja de Autopeças</MenuItem>
                      <MenuItem key="mecanica" value="mecanica">Oficina Mecânica</MenuItem>
                      <MenuItem key="escapamentos" value="escapamentos">Posto de Escapamentos</MenuItem>
                      <MenuItem key="retefica" value="retefica">Retífica</MenuItem>
                      <MenuItem key="Outros" value="outros">Outros</MenuItem>
                    </Select>
                  </FormControl>
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="auto_repair_phone"
                control={control}
                render={({ field }) => 
                  <TextField key="auto_repair_phone" id="auto_repair_phone" label="Telefone da oficina" fullWidth InputProps={{
                    inputComponent: MaskedInput,
                      inputProps: {
                        mask: '(00) 0 0000-0000',
                      },
                    }}
                    sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                    {...field}
                  />
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="auto_repair_cep"
                control={control}
                {...register('auto_repair_cep', {
                  onChange: async (event) => {
                    setAutoRepairAddress(await handleSearchCep(event))
                  }
                })}
                render={({ field }) => 
                  <TextField key="auto_repair_cep" id="auto_repair_cep" label="CEP" fullWidth InputProps={{
                    inputComponent: MaskedInput,
                        inputProps: {
                            mask: '00000-000',
                        },
                    }}
                    sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                    {...field}
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="auto_repair_state"
                control={control}
                render={({ field }) => 
                  <TextField key="auto_repair_state" id="auto_repair_state" label="Estado" fullWidth InputProps={{
                      readOnly: true,
                    }}
                    sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                    {...field} 
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="auto_repair_city"
                control={control}
                render={({ field }) => 
                  <TextField key="auto_repair_city" id="auto_repair_city" label="Cidade" fullWidth InputProps={{
                      readOnly: true,
                    }}
                    sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                    {...field} 
                  />
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="auto_repair_street"
                control={control}
                render={({ field }) => 
                  <TextField key="auto_repair_street" id="auto_repair_street" label="Rua" fullWidth
                    sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                    {...field} 
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="auto_repair_number"
                control={control}
                render={({ field }) => 
                  <TextField key="auto_repair_number" id="auto_repair_number" label="Número" fullWidth
                    sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                    {...field} 
                  />
                }
              />
            </Grid>
          </Grid>
        </Box>
      )
      case 2:
      return(
        <Box noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="fantasy_name"
                control={control}
                render={({ field }) => 
                  <TextField key="fantasy_name" id="fantasy_name" label="Nome fantasia" fullWidth InputProps={{
                      readOnly: true,
                    }}
                    sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                    {...field}
                  />
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="branch_activity"
                control={control}
                render={({ field }) => 
                  <TextField key="branch_activity" id="branch_activity" label="Ramo de atividade" fullWidth InputProps={{
                      readOnly: true,
                    }}
                    sx={{'& .MuiOutlinedInput-root': {backgroundColor: '#F8F8F8', '& fieldset': {border: 'none'},},}}
                    {...field}
                  />
                }
              />
            </Grid>
            
            <Grid item xs={12}>
              <Controller
                name="role"
                control={control}
                render={({ field }) => 
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="role">Cargo</InputLabel>
                    <Select labelId="role" label="Cargo" fullWidth required
                      sx={{backgroundColor: '#F8F8F8','& .MuiOutlinedInput-notchedOutline': {border: 'none'},}}
                      {...field}
                    >
                      <MenuItem key="chefe" value="chefe">Chefe de Oficina</MenuItem>
                      <MenuItem key="comprador" value="comprador">Comprador</MenuItem>
                      <MenuItem key="eletricista" value="eletricista">Eletricista</MenuItem>
                      <MenuItem key="funileiro" value="funileiro">Funileiro</MenuItem>
                      <MenuItem key="garantista" value="garantista">Garantista</MenuItem>
                      <MenuItem key="gerente" value="gerente">Gerente</MenuItem>
                      <MenuItem key="instalador" value="instalador">Instalador</MenuItem>
                      <MenuItem key="mecanico" value="mecanico">Mecânico</MenuItem>
                      <MenuItem key="pintor" value="pintor">Pintor</MenuItem>
                      <MenuItem key="proprietario" value="proprietario">Proprietário</MenuItem>
                      <MenuItem key="retificador" value="retificador">Retificador</MenuItem>
                      <MenuItem key="soldador" value="soldador">Soldador</MenuItem>
                      <MenuItem key="supervisor" value="supervisor">Supervisor</MenuItem>
                      <MenuItem key="tecnico" value="tecnico">Técnico</MenuItem>
                      <MenuItem key="outros" value="outros">Outros</MenuItem>
                    </Select>
                  </FormControl>
                }
              />
            </Grid>
          </Grid>
        </Box>
      )
    }
  }
}
