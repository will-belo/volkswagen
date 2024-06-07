import { Button, styled } from "@mui/material";

const DefaultButton = styled(Button) ({
    backgroundColor: '#022663',
})

export default function VolksButton({ type, fullWidth, children, ...rest }){
    return(
        <DefaultButton type={type} variant="contained" sx={{ mt: 3, mb: 2 }} fullWidth={fullWidth} {...rest}>
            {children}
        </DefaultButton>
    )
}