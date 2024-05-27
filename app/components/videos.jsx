import { Box, Divider, Grid, Typography } from "@mui/material";

export default function Videos(props) {
    return(
        <Box sx={{ backgroundColor: 'rgb(56, 54, 219)', color: 'white', padding: 5, borderRadius: 2 }}>
            <Box className="flex items-center justify-center" sx={{ mb: 7 }}>
                <Box flexGrow={1}>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
                </Box>
                <Box px={2}>
                    <Typography variant="h5" className="uppercase font-bold">
                    Treinamentos anteriores
                    </Typography>
                </Box>
                <Box flexGrow={1}>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
                </Box>
            </Box>
            <Grid container spacing={7}>
                {props.children}
            </Grid>
        </Box>
    )
}