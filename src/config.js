export default {
    siteTitle: 'OSM Italia',
    headerGradientOverlay: `linear-gradient(rgba(255, 255, 255, 0.40), rgba(255, 255, 255, 0.6))`,
    osmTitle: 'OpenStreetMap',
    osmDescription: '<p>OpenStreetMap (OSM) è un progetto che coinvolge volontari da tutto il mondo nella creazione ed aggiornamento di una mappa del mondo, disponibile a tutti gratuitamente e con una licenza aperta. Il progetto promuove qualsiasi utilizzo di questa mappa e dei dati che la compongono.</p>', // supports HTML
    osmItalyTitle: 'OpenStreetMap Italia',
    osmItalyDescription: '<p>OpenStreetMap Italia è la comunità italiana del progetto OpenStreetMap, coordinata da <a href="https://www.wikimedia.it/">Wikimedia Italia</a> che è il capitolo ufficiale italiano della <a href="https://wiki.osmfoundation.org/wiki/Main_Page">OpenStreetMap Foundation</a>. La comunità italiana è particolarmente attiva non soltanto nel mantenere la mappa di OpenStreetMap aggiornata, ma anche nell\'organizzare eventi di formazione, divulgazione e condivisione. La comunità italiana si riunisce annualmente nella conferenza dedicata a OpenStreetMap Italia, intitolata <i>OSMit</i> dal 2010 fino al 2016 e successivamente incorporata nel convegno <i>FOSS4G-IT</i>, che riunisce tutte le comunità italiane del software geografico libero e dei dati geografici aperti.</p>', // supports HTML
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
        url: 'https://github.com/osmItalia/',
        text: ''
    },
    facebook: {
        url: 'https://it-it.facebook.com/OpenStreetMap.Italia/',
        text: ''
    },
    twitter: {
        url: 'https://twitter.com/OpenStreetMapIt',
        text: ''
    }
}
