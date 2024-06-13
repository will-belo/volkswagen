import { Box, Button, Grid, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

export default function Agenda(){
    return(
        <Box>
            <Grid container columnSpacing={{ xs: 2, sm: 3, md: 5 }}>
                <Grid item xs={3} className="flex flex-col justify-between ">
                    <Box className="h-full flex flex-col justify-between bg-volks-grey-100 py-3 px-5 border-rounded">
                        <Typography className="flex items-center text-volks-blue-800 font-bold" gutterBottom>
                            <LockOpenOutlinedIcon className="mr-2" />Injeção Eletrônica
                        </Typography>
                        <Typography variant="subtitle uppercase">
                            Virtus 1.6 - 16 Válvulas
                        </Typography>
                        <Typography className="text-volks-blue-800 font-bold mt-5" gutterBottom>
                            Dia 16 de Abril
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#022663", ":hover": { backgroundColor: "#184a9b" } }} fullWidth>Inscreva-se</Button>
                    </Box>
                </Grid>

                <Grid item xs={3} className="flex flex-col justify-between ">
                    <Box className="h-full flex flex-col justify-between bg-volks-grey-100 py-3 px-5 border-rounded">
                        <Typography className="flex items-center text-volks-blue-800 font-bold" gutterBottom>
                            <LockOutlinedIcon className="mr-2" /> Arrefecimento
                        </Typography>
                        <Typography variant="subtitle uppercase">
                            Golf GTI 2.0 EA888
                        </Typography>
                        <Typography className="text-volks-blue-800 font-bold mt-5" gutterBottom>
                            Dia 16 de Abril
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#022663", ":hover": { backgroundColor: "#184a9b" } }} fullWidth>Em Breve</Button>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box className="h-full flex flex-col justify-between bg-volks-grey-100 py-3 px-5 border-rounded">
                        <Typography className="flex items-center text-volks-blue-800 font-bold" gutterBottom>
                            <LockOutlinedIcon className="mr-2" /> Motor
                        </Typography>
                        <Typography variant="subtitle uppercase">
                            Amarok V6
                        </Typography>
                        <Typography className="text-volks-blue-800 font-bold mt-5" gutterBottom>
                            Dia 16 de Abril
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#022663", ":hover": { backgroundColor: "#184a9b" } }} fullWidth>Em Breve</Button>
                    </Box>
                </Grid>

                <Grid item xs={3} className="flex flex-col justify-between ">
                    <Box className="h-full flex flex-col justify-between bg-volks-grey-100 py-3 px-5 border-rounded">
                        <Typography className="flex items-center text-volks-blue-800 font-bold" gutterBottom>
                            <LockOutlinedIcon className="mr-2" /> Treinamento
                        </Typography>
                        <Typography variant="subtitle uppercase">
                            Novas técnolgioas em motores turbo T-Cross
                        </Typography>
                        <Typography className="text-volks-blue-800 font-bold mt-5" gutterBottom>
                            Dia 16 de Abril
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#022663", ":hover": { backgroundColor: "#184a9b" } }} fullWidth>Em Breve</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}