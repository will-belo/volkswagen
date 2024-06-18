import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CarRentalIcon from '@mui/icons-material/CarRental';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Painel" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <ModelTrainingIcon />
            </ListItemIcon>
            <ListItemText primary="Treinamentos" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CarRentalIcon />
            </ListItemIcon>
            <ListItemText primary="Concessionárias" />
        </ListItemButton>
    </React.Fragment>
);