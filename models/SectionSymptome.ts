
export class Symptome{
    douleurRepos ! : string
    douleurActivite ! : string
    douleurMax ! : string
    doulerHoraire ! : string
    variationJournaliaire ! : string
    facteurAgravant ! : string
    facteurSoulageants ! : string
    progression ! : string
}


type SymptomeSchema = {
    property: keyof Symptome;  
    parser: (obj: Symptome, raw: string) => void; 
    keyText: string; 
};

export const symptomeSchema: SymptomeSchema[] = [
    { property: "douleurRepos", keyText: "NRS Douleur au Repos", parser: (obj, v) => obj.douleurRepos = v },
    { property: "douleurActivite", keyText: "NRS Douleur à l'Activité", parser: (obj, v) => obj.douleurActivite = v },
    { property: "douleurMax", keyText: "NRS Douleur Maximum", parser: (obj, v) => obj.douleurMax = v },
    { property: "doulerHoraire", keyText: "Horaire Douleur (Matin/Midi/Soir/Nuit)", parser: (obj, v) => obj.doulerHoraire = v },
    { property: "variationJournaliaire", keyText: "Variation Journalière", parser: (obj, v) => obj.variationJournaliaire = v },
    { property: "facteurAgravant", keyText: "Facteurs Aggravants", parser: (obj, v) => obj.facteurAgravant= v },
    { property: "facteurSoulageants", keyText: "Facteurs Soulageants", parser: (obj, v) => obj.facteurSoulageants= v },
    { property: "progression", keyText: "Évolution", parser: (obj, v) => obj.progression= v },
];