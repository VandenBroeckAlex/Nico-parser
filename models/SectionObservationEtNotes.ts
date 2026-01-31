
export class Observation{
    resumeClinique! : string
    observations! : string
    impression! : string
    notes! : string
}





export type ObservationSchema = {
    property: keyof Observation;  
    parser: (obj: Observation, raw: string) => void; 
    keyText: string; // text in the file 
};

export const observationSchema: ObservationSchema[] = [
    
    { property: "resumeClinique", keyText: "Résumé Clinique:", parser: (obj, v) => obj.resumeClinique = v },
    { property: "observations", keyText: "Observations globales", parser: (obj, v) => obj.observations = v },
    { property: "impression", keyText: "Impression Générale", parser: (obj, v) => obj.impression = v },
    { property: "notes", keyText: "Notes Supplémentaires", parser: (obj, v) => obj.notes = v },
    
];



