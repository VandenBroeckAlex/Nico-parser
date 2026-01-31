
export class AntropoMetric{
    poids ! : string
    taille ! : string
    imc ! : string
}


type AntropoMetricSchema = {
    property: keyof AntropoMetric;  
    parser: (obj: AntropoMetric, raw: string) => void; 
    keyText: string; 
};

export const antropoMetricSchema: AntropoMetricSchema[] = [
    { property: "poids", keyText: "Poids (kg)", parser: (obj, v) => obj.poids = v },
    { property: "taille", keyText: "Taille (cm)", parser: (obj, v) => obj.taille = v },
    { property: "imc", keyText: "IMC Calculé", parser: (obj, v) => obj.imc = v },
];