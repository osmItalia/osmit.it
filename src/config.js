export default {
    headerGradientOverlay: `linear-gradient(rgba(255, 255, 255, 0.40), rgba(255, 255, 255, 0.6))`,
    osmTitle: 'OpenStreetMap',
    osmDescription: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>', // supports HTML
    osmItalyTitle: 'OpenStreetMap Italia',
    osmItalyDescription: '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>', // supports HTML
    center: [51.505, -0.09],
    zoom: 13,
    layers: [
        /* 
            Only the active layer must be set as `checked: true`
            all the others MUST use `checked: false`
        */
        {
            checked: true,
            name: 'OSM',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    ],
    projects: [
        /*
            Images of projects MUST be placed inside the image/projects folder.
            It's recommended to keep the filename simple and without spaces or special characters (replace space with _).
            When configuring a project specify the filename without extension.
        */
        {
            image: 'icon',
            name: 'Progetto di esempio',
            description: 'Breve descrizione di questo progetto',
            link: 'https://google.com',
        },
        {
            image: 'icon',
            name: 'Progetto di esempio',
            description: 'Breve descrizione di questo progetto',
            link: 'https://google.com',
        },
        {
            image: 'icon',
            name: 'Progetto di esempio',
            description: 'Breve descrizione di questo progetto',
            link: 'https://google.com',
        },
        {
            image: 'icon',
            name: 'Progetto di esempio',
            description: 'Breve descrizione di questo progetto',
            link: 'https://google.com',
        },
        {
            image: 'icon',
            name: 'Progetto di esempio',
            description: 'Breve descrizione di questo progetto',
            link: 'https://google.com',
        },
    ],
    projectsDescription: '', // supports HTML
    contactDescription: '', // supports HTML
    contactTitle: 'Contatti',
    github: {
        url: 'https://google.com',
        text: 'Visita GitHub'
    },
    facebook: {
        url: 'https://google.com',
        text: ''
    }
}
