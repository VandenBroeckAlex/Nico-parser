export class ControleQuality{
    confianceExtraction  ! : string
    data ! : string
    manualRevision! : string
    moddifiedBy! : string
    ModifDate!: string
}

export type ControleQualitySchema = {
    property: keyof ControleQuality;  
    parser: (obj: ControleQuality, raw: string) => void; 
    keyText: string; // text in the file 
};

export const controleQualitySchema: ControleQualitySchema[] = [
    { property: "confianceExtraction", keyText: "Confiance Extraction (estimée %)", parser: (obj, v) => obj.confianceExtraction = v },
    { property: "data", keyText: "Données Complètes (Oui/Non)", parser: (obj, v) => obj.data = v },
    { property: "manualRevision", keyText: "Révision Manuelle Requise (Oui/Non)", parser: (obj, v) => obj.manualRevision = v },
    { property: "moddifiedBy", keyText: "Modifié Par", parser: (obj, v) => obj.moddifiedBy = v },
    { property: "ModifDate", keyText: "Date Modification", parser: (obj, v) => obj.ModifDate = v },
];



