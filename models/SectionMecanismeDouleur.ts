

const SENSATIONS = [
  "Sourde",
  "Aiguë",
  "Brûlante",
  "Piquante",
  "Irradiante",
  "Engourdie",
] as const;

type Sensation = typeof SENSATIONS[number];


export class MecanismeDeDouleur{
    douleurArticulaire! : string
    douleurMyofasciale ! : string
    douleurNeurologique ! : string
    sensibilisationCentrale ! : string
    deficit  ! : string
    caractereSensations ! : Sensation
    observationsMecanismes ! : string
}


type MecanismeDeDouleurSchema = {
    property: keyof MecanismeDeDouleur;  
    parser: (obj: MecanismeDeDouleur, raw: string) => void; 
    keyText: string; 
};


//TODO caractère sensation require underline handeling
export const mecanismeDeDouleurSchema: MecanismeDeDouleurSchema[] = [
    { property: "douleurArticulaire", keyText: "Douleur Articulaire", parser: (obj, v) => obj.douleurArticulaire = v },
    { property: "douleurMyofasciale", keyText: "Douleur Myofasciale", parser: (obj, v) => obj.douleurMyofasciale = v },
    { property: "douleurNeurologique", keyText: "Douleur Neurologique", parser: (obj, v) => obj.douleurNeurologique = v },
    { property: "sensibilisationCentrale", keyText: "Sensibilisation Centrale (nociceptive, neuropathique ou nociplastique)", parser: (obj, v) => obj.sensibilisationCentrale = v },
    { property: "deficit", keyText: "Déficit Sensorimotor", parser: (obj, v) => obj.deficit= v },
    { property: "caractereSensations", keyText: "Caractère sensations", parser: (obj, v) => obj.caractereSensations = parseSensation(v) },
    { property: "observationsMecanismes", keyText: "Observations Mécanismes", parser: (obj, v) => obj.observationsMecanismes= v },
];


//TODO more than one sensation possible
function parseSensation(line: string):  Sensation {
    const parts = line.split(" | ");
    let sensation: Sensation | undefined;

    for (const part of parts) {
        if (part.includes("☒")) {
            const value = part.replace(/☒|☐/g, "").trim();
            if (isSensation(value)) {
                sensation = value as Sensation;
            }
        }


    }
    if (!sensation) throw new Error("No profession selected");
    return  sensation;
}

function isSensation(value: string): value is Sensation {
  return (SENSATIONS as readonly string[]).includes(value);
}