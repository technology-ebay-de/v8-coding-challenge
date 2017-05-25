const Config = {
    zones: [
        { id: 'front', label: 'Fußraum vorne' },
        { id: 'back', label: 'Fußraum hinten' },
        { id: 'trunk', label: 'Kofferraum' }
    ],
    spec: [
        { set: ['front'], basic: 1, additional: 0},
        { set: ['back'], basic: 1, additional: 0},
        { set: ['trunk'], basic: 1, additional: 0},
        { set: ['front', 'back'], basic: 1, additional: 1},
        { set: ['front', 'trunk'], basic: 2, additional: 0},
        { set: ['back', 'trunk'], basic: 2, additional: 0}
    ]
};

export default Config;
