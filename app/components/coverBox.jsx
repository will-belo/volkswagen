import { Box, Grid } from "@mui/material";

export default function CoverBox(props) {
    return(
        <Grid item xs={3}>
            <Box>
                <Box className="overflow-hidden">
                    <img src="https://placehold.co/500"/>
                </Box>
            </Box>
        </Grid>
    )
}