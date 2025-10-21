import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

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
        <Card sx={{ maxWidth: 345 }}>
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
                height="194"
                image={event.image}
                alt={event.title}
            />

            {/* Description */}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {event.description}
                </Typography>
            </CardContent>

            {/* Actions : favori et réservation */}
            <CardActions disableSpacing>
                <div className="flex space-x-2 w-full justify-between py-2 px-2">
                    <IconButton aria-label="add to favorites">
                        <FavoriteBorderIcon />
                    </IconButton>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab variant="extended" size="meduim" color="secondary">
                            Réserver
                        </Fab>
                    </Box>
                </div>
            </CardActions>
        </Card>
    );
};

export default EventCard;