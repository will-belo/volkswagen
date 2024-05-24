"use client"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HeroCards(props) {
  return (
    <Card sx={{ display: 'flex', backgroundColor: 'rgb(56, 54, 219)', color: 'white', minWidth: 420, maxWidth: 420, maxHeight: 150 }}>
        <CardContent sx={{ width: 150, padding: 1 }}>
            <img src="https://placehold.co/200" width={150} className="rounded" />
        </CardContent>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <Typography variant="subtitle2" className="uppercase text-amber-500 font-bold">
                {props.title}
            </Typography>
            <Typography sx={{ maxWidth: 250 }} variant="caption" className="uppercase font-bold" gutterBottom>
                {props.children}
            </Typography>
            <Typography variant="caption">
                {props.date}
            </Typography>
            <CardActions sx={{padding: 0}}>
                <Button fullWidth variant="contained" size="small">{props.button}</Button>
            </CardActions>
        </CardContent>
        <CardActions sx={{padding: 0}}></CardActions>
    </Card>
  );
}