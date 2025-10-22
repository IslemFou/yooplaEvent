import React from 'react';
import EventCard from '../components/EventCard';
import events from '../data/events';
import { Container, Grid, Typography, Box, Button, } from '@mui/material';

export default function Home() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* En-tête de la page */}
            <Box>
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            color: 'secondary.main'
                        }}
                    >
                        Découvrez nos événements
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ mb: 4 }}
                    >
                        Découvrez et réservez vos événements préférés
                    </Typography>
                </Box>
            </Box>

            {/* Grille d'événements */}
            <Grid container spacing={3}>
                {events.map((event) => (
                    <Grid key={event.id}
                        xs={12} sm={6} md={4} sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'flex-start', px: 2, py: 2
                        }}>
                        <EventCard event={event} />
                    </Grid>
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