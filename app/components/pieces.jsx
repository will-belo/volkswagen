import { Box, Grid } from "@mui/material";

export default function Pieces(props) {
    return(
        <Box sx={{ 
            background: 'linear-gradient(180deg, rgba(30,26,103,1) 35%, rgba(51,51,237,1) 35%, rgba(51,51,237,1) 50%, rgba(255,255,255,1) 50%);',
            borderTopLeftRadius: 25,
            width: '100%',
            padding: 7,
        }}>
            <Grid container spacing={9} sx={{
                '& > *': {
                    '& > div': {
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'white',
                        borderRadius: 2,
                        borderTopRightRadius: 25,
                        borderBottomLeftRadius: 25,
                    }
                }
            }}>
                {props.children}
            </Grid>
        </Box>
    )
}