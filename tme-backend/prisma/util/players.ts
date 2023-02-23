const realMadridPlayers = [
    {
        name: 'Vinicius Junior',
        club: 'RealMadrid',
        imageUrl: 'data:image/jpeg;base64,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',
        position: 'FWD'
    },
    {
        name: 'Karim Benzema',
        club: 'RealMadrid',
        imageUrl: 'https://s.hs-data.com/bilder/spieler/gross/29566.jpg',
        position: 'FWD'
    },
    {
        name: 'Luca Modric',
        club: 'RealMadrid',
        imageUrl: 'https://i2-prod.football.london/incoming/article26182026.ece/ALTERNATES/s1200c/0_GettyImages-1463103997.jpg',
        position: 'MID'
    },
    {
        name: 'Federico Valverde',
        club: 'RealMadrid',
        imageUrl: 'https://www.footmercato.net/build/images/player-covers/federico-valverde.c5203a6d.jpg',
        position: 'MID'
    },
    {
        name: 'Rodrygo Goes',
        club: 'RealMadrid',
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/xn6Xndw9AXtKsuC2Eme1xzWDBcA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23917242/1242262836.jpg',
        position: 'FWD'
    },
    {
        name: 'Thibaut Courtois',
        club: 'RealMadrid',
        imageUrl: 'https://i.guim.co.uk/img/media/d944b41ba2b11547b094d18a0709223e2e7b8176/294_459_6341_3807/master/6341.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0a6074e4d7f035381413c28f6a8a6a46',
        position: 'GK'
    },
    {
        name: 'Camavinga',
        club: 'RealMadrid',
        imageUrl: 'https://www.planetsport.com/image-library/square/1200/e/eduardo-camavinga-real-madrid-may22-2.jpg',
        position: 'MID'
    },
    {
        name: 'Antonio Rudiger',
        club: 'RealMadrid',
        imageUrl: 'https://image.stern.de/32909426/t/MZ/v1/w1440/r1.3333/-/14--hut-ab-antonio-ruediger--dfb-star-spendet-wm-praemie-fuer-gute-zwecke--aufmacher-.jpg',
        position: 'DEF'
    },
    {
        name: 'David Alaba',
        club: 'RealMadrid',
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/EpXIlSezSyNYxHyly-3PLGyyj2s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23346202/1383831410.jpg',
        position: 'DEF'
    }
];

const bayernPlayers = [
    {
        name: 'Yann Sommer',
        club: 'Bayern',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ser-Swi_%2818%29.jpg/640px-Ser-Swi_%2818%29.jpg',
        position: 'GK'
    },
    {
        name: 'Sadio Mane',
        club: 'Bayern',
        imageUrl: 'https://img.bundesliga.com/tachyon/sites/2/2022/12/sadio_mane-scaled.jpg?crop=192px%2C0px%2C1800px%2C1440px',
        position: 'FWD'
    },
    {
        name: 'Jamal Musiala',
        club: 'Bayern',
        imageUrl: 'https://i0.gmx.ch/image/926/37593926,pd=4,f=sdata11/jamal-musiala-waehrend-spiel.jpg',
        position: 'MID'
    },
    {
        name: 'Leroy Sane',
        club: 'Bayern',
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/j0uJQr1BqlS2PecNsQTFTe9z2d4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22253763/1290401354.jpg',
        position: 'FWD'
    }
];

const cityPlayers = [
    {
        name: 'Kevin De Bruyne',
        club: 'ManCity',
        imageUrl: 'https://s.hs-data.com/bilder/spieler/gross/142263.jpg',
        position: 'MID'
    },
    {
        name: 'Erling Haaland',
        club: 'ManCity',
        imageUrl: 'https://therealchamps.com/wp-content/uploads/getty-images/2017/07/1430838831.jpeg',
        position: 'MID'
    }
];


const psgPlayers = [
    {
        name: 'Neymar',
        club: 'PSG',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Neymar_PSG.jpg/800px-Neymar_PSG.jpg',
        position: 'FWD'
    },
    {
        name: 'Lionel Messi',
        club: 'PSG',
        imageUrl: 'https://phantom-marca.unidadeditorial.es/7de09fa100f3bbecc0b88eef0fa4ee7c/crop/0x0/2044x1363/resize/1320/f/jpg/assets/multimedia/imagenes/2023/02/20/16769299713481.jpg',
        position: 'FWD'
    },
    {
        name: 'Kylian Mbappe',
        club: 'PSG',
        imageUrl: 'https://www.planetsport.com/image-library/square/1200/k/kylian-mbappe-psg-france-3-april-2022.jpg',
        position: 'FWD'
    },
    {
        name: 'Sergio Ramos',
        club: 'PSG',
        imageUrl: 'https://pbs.twimg.com/media/FmOa5iWXgAERCZ0?format=jpg&name=large',
        position: 'DEF'
    }
];

const liverpoolPlayers = [
    {
        name: 'Andrew Robertson',
        club: 'Liverpool',
        imageUrl: 'https://icdn.caughtoffside.com/wp-content/uploads/2022/09/liverpool-robertson-lfc.jpg',
        position: 'DEF'
    },
    {
        name: 'Trent Alexander-Arnold',
        club: 'Liverpool',
        imageUrl: 'https://ihttps://i2-prod.liverpool.com/incoming/article26256482.ece/ALTERNATES/s1200c/0_Trent-Alexander-Arnold-vs-Everton.jpgdn.caughtoffside.com/wp-content/uploads/2022/09/liverpool-robertson-lfc.jpg',
        position: 'DEF'
    }
];

export const allPlayers = [...realMadridPlayers, ...bayernPlayers, ...cityPlayers, ...psgPlayers, ...liverpoolPlayers] as any;
