export interface Player {
    id: number;
    name: string;
    imageUrl: string;
    club: Club
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
