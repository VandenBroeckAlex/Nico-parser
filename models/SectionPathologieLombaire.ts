
export class PathologieLombaire{
    antecedents ! : string
    episodeInitial ! : string
    traumatisme ! : string
    recidive ! : string
    pireEpisode ! : string
    dureeTotal ! : string
    typeLBP ! : string
}


type PathologieLombaireSchema = {
    property: keyof PathologieLombaire;  
    parser: (obj: PathologieLombaire, raw: string) => void; 
    keyText: string; 
};

export const pathologieLombaireSchema: PathologieLombaireSchema[] = [
    { property: "antecedents", keyText: "Antécédents LBP (Oui/Non)", parser: (obj, v) => obj.antecedents = v },
    { property: "episodeInitial", keyText: "Episode Initial", parser: (obj, v) => obj.episodeInitial = v },
    { property: "traumatisme", keyText: "Traumatisme, progressif ou spontané: Spontané", parser: (obj, v) => obj.traumatisme = v },
    { property: "recidive", keyText: "Récidive (Oui/Non)", parser: (obj, v) => obj.recidive = v },
    { property: "pireEpisode", keyText: "Pire Episode", parser: (obj, v) => obj.pireEpisode = v },
    { property: "dureeTotal", keyText: "Durée Totale LBP (mois)", parser: (obj, v) => obj.dureeTotal = v },
    { property: "typeLBP", keyText: "Type LBP", parser: (obj, v) => obj.typeLBP= v },
];