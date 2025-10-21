import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

export default function EventDetail() {
    const { id } = useParams();
    const location = useLocation();
    // si tu as passé l'event via Link state
    const event = location.state?.event;

    // fallback basique si aucun state (à remplacer par fetch / contexte)
    const fallback = {
        id,
        title: event?.title || 'Nom de l\'evenement',
        date: event?.date || 'Date de l\'evenement',
        description: event?.description || 'Description de l\'evenement',
        image: event?.image || 'https://via.placeholder.com/150',
        organizer: event?.organizer || 'Nom de l\'organisateur',
    };

    const e = event || fallback;

    return (
        <Container sx={{ py: 4 }}>
            <Link to="/">{<ArrowUturnLeftIcon className="h-5 w-5" />}</Link>
            <Box>
                <Typography variant="h4" gutterBottom>{e.title}</Typography>
                <img src={e.image} alt={e.title} style={{ maxWidth: '100%', borderRadius: 8 }} />
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
                    {e.organizer} — {e.date}
                </Typography>
                <Typography sx={{ mt: 2 }}>{e.description}</Typography>
            </Box>
        </Container>
    );
}