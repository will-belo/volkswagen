import { Box, Button, Grid, Typography } from "@mui/material";

export default function HeroCard(props) {
    const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ]

    const format = (dateStr) => {
        const [day, month] = dateStr.split('/')
        const monthName = monthNames[parseInt(month, 10) - 1]

        return `Dia ${day} de ${monthName}`
    }

    return(
        <Box>
            <Box sx={{ backgroundColor: 'blue' }} className="rounded-lg">
                <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Grid item xs={4} className="p-3">
                        <Box className="rounded-lg overflow-hidden">
                            <img src={props.image} width={200} />
                        </Box>
                    </Grid>
                    <Grid item xs={8} className="p-3">
                        <Typography variant="subtitle1" className="uppercase text-amber-500 font-bold">
                            {props.subtitle}
                        </Typography>
                        <Typography variant="body1" className="uppercase font-bold">
                            {props.title}
                        </Typography>
                        <Typography variant="caption">
                            {format(props.date)}
                        </Typography>
                        <Box className="mt-2">
                            <Button variant="contained" fullWidth>{props.status ? 'Em Breve' : 'Saiba mais'}</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}