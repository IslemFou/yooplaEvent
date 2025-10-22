import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';

const EventCard = ({
    event = {
        title: "Concert de Jazz",
        date: "2024-03-15",
        description: "Un super concert de jazz en plein air",
        image: "https://i.imgur.com/KzsAG1B.jpeg",
        organizer: "Jazz Club",
        avatar: "https://i.imgur.com/KzsAG1B.jpeg"
    }
}) => {
    return (
        <Card
            component={Link}
            to={`/event/${event.id}`}
            sx={{
                width: 335, // Largeur fixe pour la carte
                maxWidth: '100%', // Assure la responsivité sur les petits écrans
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                cursor: 'pointer'
            }}>
            {/* En-tête avec avatar et titre */}
            <CardHeader
                avatar={
                    <Avatar
                        alt={event.organizer || 'Organisateur'}
                        src={event.avatar || event.image}
                        sx={{ bgcolor: 'primary.main' }} aria-label="event">
                        {event.organizer?.charAt(0) || 'E'}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={event.title}
                subheader={new Date(event.date).toLocaleDateString('fr-FR')}
            />

            {/* Image de l'événement */}
            <CardMedia
                component="img"
                image={event.image}
                alt={event.title}
                sx={{ height: 140, width: '100%', objectFit: 'cover', flexShrink: 0 }}
            />

            {/* Description */}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="text.secondary">
                    {event.description}
                </Typography>
            </CardContent>

            {/* Actions : favori et réservation */}
            <CardActions disableSpacing sx={{ flexShrink: 0 }}>
                <div className="flex space-x-2 w-full justify-between">
                    <IconButton aria-label="add to favorites">
                        <FavoriteBorderIcon />
                    </IconButton>
                    <Fab variant="extended" size="medium" color="secondary">
                        Réserver
                    </Fab>
                </div>
            </CardActions>
        </Card>
    );
};

export default EventCard;