
export class Hypothese{
    pathology ! : string
    sourceOfSymptome ! : string
    painType! : string
    impairments! : string
    painMechanisme! : string
    precaution! : string
    patientPerspective! : string
    activityParticipation! : string
    contributingFactor! : string
    managementPrognosis! : string
}





export type HypotheseSchema = {
    property: keyof Hypothese;  
    parser: (obj: Hypothese, raw: string) => void; 
    keyText: string;
};

export const hypotheseSchema: HypotheseSchema[] = [
    
    { property: "pathology", keyText: "1. PATHOLOGY", parser: (obj, v) => obj.pathology = v },
    { property: "sourceOfSymptome", keyText: "2. SOURCES OF SYMPTOMS", parser: (obj, v) => obj.sourceOfSymptome = v },
    { property: "painType", keyText: "3. PAIN TYPE", parser: (obj, v) => obj.painType = v },
    { property: "impairments", keyText: "4. IMPAIRMENTS", parser: (obj, v) => obj.impairments = v },

    { property: "painMechanisme", keyText: "5. PAIN MECHANISMS", parser: (obj, v) => obj.painMechanisme = v },
    { property: "precaution", keyText: "6. PRECAUTIONS", parser: (obj, v) => obj.precaution = v },
    { property: "patientPerspective", keyText: "7. PATIENTS' PERSPECTIVES", parser: (obj, v) => obj.patientPerspective = v },
    { property: "activityParticipation", keyText: "8. ACTIVITY & PARTICIPATION", parser: (obj, v) => obj.activityParticipation = v },
    { property: "contributingFactor", keyText: "9. CONTRIBUTING FACTORS", parser: (obj, v) => obj.contributingFactor = v },
    { property: "managementPrognosis", keyText: "10. MANAGEMENT & PROGNOSIS", parser: (obj, v) => obj.managementPrognosis = v },
];



