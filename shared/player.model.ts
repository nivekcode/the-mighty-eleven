export interface Player {
    id: number;
    name: string;
    imageUrl: string;
    club: Club;
    position: position;
}

export enum Club {
    Chelsea,
    Liverpool,
    ManCity,
    RealMadrid,
    Bayern,
    PSG,
    Napoli
}

export interface UpdateDreamTeamDTO {
    playerId: number;
    playerIdToReplace?: number;
}

export type position = 'GK' | 'DEF' | 'MID' | 'FWD';
