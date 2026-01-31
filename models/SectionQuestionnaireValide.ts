export class QuestionnaireValide{
    sbt  ! : string
    csiScore ! : string
    odiScore  ! : string
    pcsScore ! : string
    anxietyScore ! : string
    depressionScore ! : string
    workScore ! : string
    acivityScore ! : string
    waiScore ! : string
    ipaq ! : string
    psfs ! : string
    sfScore ! : string
    otherQuestionary ! : string
}

export type QuestionnaireValideSchema = {
    property: keyof QuestionnaireValide;  
    parser: (obj: QuestionnaireValide, raw: string) => void; 
    keyText: string; // text in the file 
};

export const questionnaireValideSchema: QuestionnaireValideSchema[] = [
    { property: "sbt", keyText: "SBT (STarT Back Screening Tool, 0-9)", parser: (obj, v) => obj.sbt = v },
    { property: "csiScore", keyText: "CSI Score (Central Sensitization Inventory, 0-100)", parser: (obj, v) => obj.csiScore = v },
      { property: "odiScore", keyText: "ODI Score (Oswestry Disability Index, 0-100)", parser: (obj, v) => obj.odiScore = v },
      { property: "pcsScore", keyText: "PCS Score (Pain Catastrophizing Scale, 0-52)", parser: (obj, v) => obj.pcsScore = v },
      { property: "anxietyScore", keyText: "HADS Score Anxiété (0-21)", parser: (obj, v) => obj.acivityScore = v },
      { property: "depressionScore", keyText: "HADS Score Dépression (0-21)", parser: (obj, v) => obj.depressionScore = v },
      { property: "workScore", keyText: "FABQ Score Travail (0-100)", parser: (obj, v) => obj.workScore = v },
      { property: "acivityScore", keyText: "FABQ Score Activité (0-100)", parser: (obj, v) => obj.acivityScore = v },
      { property: "waiScore", keyText: "WAI Score (Work Ability Index, 0-100)", parser: (obj, v) => obj.waiScore = v },
      { property: "ipaq", keyText: "IPAQ (International Physical Activity)", parser: (obj, v) => obj.ipaq = v },
      { property: "psfs", keyText: "PSFS (Patient-Specific Functional Scale, 0-10) Activités limitantes", parser: (obj, v) => obj.psfs = v },
      { property: "sfScore", keyText: "SF-36 ou EQ-5D (Qualité de vie)", parser: (obj, v) => obj.sfScore = v },
      { property: "otherQuestionary", keyText: "Autres Questionnaires", parser: (obj, v) => obj.otherQuestionary = v },

];



