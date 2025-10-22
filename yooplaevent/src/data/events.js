import { duration } from "@mui/material";

const events = [
    {
        id: 1,
        title: "Concert de Jazz",
        date: "2024-03-15",
        duration: "2h",
        description: "Une soirée jazz exceptionnelle avec des artistes renommés dans un cadre intimiste.",
        image: "https://i.imgur.com/KzsAG1B.jpeg",
        organizer: "Jazz Association",
        price: 50,
        place: "Rue de la Musique, Paris"
    },
    {
        id: 2,
        title: "Conférence Tech",
        duration: "1h30",
        date: "2024-03-20",
        description: "Découvrez les dernières innovations technologiques avec des experts du domaine.",
        image: "https://i.imgur.com/oVrFuNr.jpeg",
        organizer: "Tech Events",
        price: 30,
        place: "Salle Informatique, Lyon"
    },
    {
        id: 3,
        title: "Festival de Musique",
        duration: "3 jours",
        date: "2024-04-05",
        description: "3 jours de musique avec des artistes internationaux et des food trucks.",
        image: "https://i.imgur.com/ShfPlgj.jpeg",
        organizer: "Music Fest Org",
        price: 100,
        place: "Salle Musicale, Marseille"
    },
    {
        id: 4,
        title: "Théâtre Classique",
        duration: "2h",
        date: "2024-03-25",
        description: "Représentation exclusive des plus grandes pièces du répertoire classique.",
        image: "https://i.imgur.com/mgLu8I4.jpeg",
        organizer: "Théâtre National",
        price: 60,
        place: "Salle du Théatre, Nice"
    },
    {
        id: 5,
        title: "Tournoi de Basketball",
        duration: "1 jour",
        date: "2024-04-10",
        description: "Tournoi amateur ouvert à toutes les équipes. Inscriptions sur place.",
        image: "https://i.imgur.com/74kciZy.jpeg",
        organizer: "Sports Association",
        price: 20,
        place: "Salle de Sport, Nantes"
    },
    {
        id: 6,
        title: "Atelier Cuisine",
        duration: "1h30",
        date: "2024-03-18",
        description: "Apprenez les secrets de la cuisine française avec un chef étoilé.",
        image: "https://i.imgur.com/QLCmJYF.jpeg",
        organizer: "Culinary Arts",
        price: 40,
        place: "Salle Cuisine, Rennes"
    }
];

export default events;