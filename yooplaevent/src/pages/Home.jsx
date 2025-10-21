import React from 'react';
import EventCard from '../components/EventCard';
import events from '../data/events';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';

export default function Home() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* En-tête de la page */}
            <Box textAlign="center" mb={6}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: 'primary.main'
                    }}
                >
                    Événements à Venir
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Découvrez et réservez vos événements préférés
                </Typography>
            </Box>

            {/* Grille d'événements */}
            <Grid container spacing={4}>
                {events.map((event) => (
                    <Card
                        component={Link}
                        to={`/event/${event.id}`}
                        item key={event.id} xs={12} sm={6} md={4}>
                        <EventCard event={event} />
                    </Card>
                ))}
            </Grid>

            {/* Message si aucun événement */}
            {events.length === 0 && (
                <Box textAlign="center" py={8}>
                    <Typography variant="h5" color="text.secondary">
                        Aucun événement prévu pour le moment
                    </Typography>
                </Box>
            )}
        </Container>
    );
}   