import { Box, Grid } from "@mui/material";

export default function Video(props) {
    return(
        <Grid item xs={3}>
            <Box className="flex aligm-center aspect-video overflow-hidden" sx={{ width: '100%', backgroundColor: 'white', borderRadius: 2 }}>
                <img src={props.url} />
            </Box>
        </Grid>
    )
}