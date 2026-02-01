export class MecanismeDouleur{
    motifArticulaire ! : boolean
    motifMyofascial ! : boolean
    motifNeural !: boolean
    sensibilisationCentrale  !: boolean
    controleSensorimoteur  !: boolean
}

export type MecanismeDouleurSchema = {
    property: keyof MecanismeDouleur;  
    parser: (obj: MecanismeDouleur, raw: string) => void; 
    keyText: string; // text in the file 
};

export const mecanismeDouleurSchema: MecanismeDouleurSchema[] = [
    { property: "motifArticulaire", keyText: "Motif articulaire", parser: (obj, v) => obj.motifArticulaire = GetCheckboxValue(v) },
    { property: "motifMyofascial", keyText: "Motif myofascial ", parser: (obj, v) => obj.motifMyofascial = GetCheckboxValue(v) },
    { property: "motifNeural", keyText: "Motif neural", parser: (obj, v) => obj.motifNeural = GetCheckboxValue(v) },
    { property: "sensibilisationCentrale", keyText: "Sensibilisation centrale", parser: (obj, v) => obj.sensibilisationCentrale = GetCheckboxValue(v) },
    { property: "controleSensorimoteur", keyText: "Contrôle sensorimoteur", parser: (obj, v) => obj.controleSensorimoteur = GetCheckboxValue(v) },
];


function GetCheckboxValue( line : string) : boolean{
    console.log(line)
    if(line.includes("☒")){
        return true
    }
    else{
        return false
    }
}
