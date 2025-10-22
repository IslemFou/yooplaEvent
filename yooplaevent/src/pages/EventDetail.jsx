import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import {
    Container, Typography, Box, Button, Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle, TextField
} from '@mui/material';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import events from '../data/events';

export default function EventDetail() {
    const { id } = useParams();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tickets: 1,
    });

    const eventFromState = location.state?.event; // si on arrive via Link avec state

    // fallback basique si aucun state (à remplacer par fetch / contexte)
    const fallback = {
        id,
        title: eventFromState?.title || 'Nom de l\'evenement',
        date: eventFromState?.date || 'Date de l\'evenement',
        description: eventFromState?.description || 'Description de l\'evenement',
        image: eventFromState?.image || 'https://via.placeholder.com/150',
        organizer: eventFromState?.organizer || 'Nom de l\'organisateur',
    };

    const found = events.find(ev => String(ev.id) === String(id)); // fallback local
    const e = eventFromState || found || fallback;

    if (!e) {
        return <div>Event not found</div>;
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        console.log('Réservation soumise:', { eventId: e.id, ...formData });
        alert(`Merci ${formData.name} ! Votre réservation pour ${formData.tickets} place(s) pour l'événement "${e.title}" a bien été prise en compte. Un email de confirmation sera envoyé à ${formData.email}.`);
        handleClose();
    };

    const formattedDate = e.date ? new Date(e.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) : 'Date non disponible';
    return (
        <Container sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Button component={Link} to="/" startIcon={<ArrowUturnLeftIcon className="h-5 w-5" />}>
                    Retour
                </Button>
                <Typography variant="h6" color="text.secondary">Détails de l'événement</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" gutterBottom>{e.title}</Typography>
                <Box
                    component="img"
                    src={e.image} alt={e.title}
                    sx={{
                        maxWidth: '100%',
                        borderRadius: 2,
                        height: 300,
                        objectFit: 'cover',
                        mb: 2
                    }} />
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
                    {e.organizer} — {formattedDate}
                </Typography>
                <Typography sx={{ mt: 2 }}>{e.description}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h6" color="primary.main" fontWeight="bold">
                        {e.price}€
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClickOpen}
                        size="small"
                        sx={{
                            borderRadius: 2,
                            px: 2,
                            textTransform: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        Réserver
                    </Button>
                </Box>
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Réserver pour : {e.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Pour réserver votre place, veuillez remplir les informations ci-dessous.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Nom complet"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        name="email"
                        label="Adresse Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        id="tickets"
                        name="tickets"
                        label="Nombre de places"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={formData.tickets}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={handleSubmit}>Confirmer la réservation</Button>
                </DialogActions>
            </Dialog>
        </Container >
    );
}