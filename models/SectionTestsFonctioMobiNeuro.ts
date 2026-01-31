export class FonctioMobiNeuro{
    flexion ! : string
    extension ! : string
    inclinaisonLateraleDroit ! : string
    inclinaisonLateraleGauche ! : string
    rotationDroite! : string
    rotationGauche! : string
    combinaisonMouvements ! : string
    mobiliteSegmentaire ! : string
    hanche ! : string
    slrDroit ! : string
    slrGauche ! : string
    asymetrie ! : string
    slumpTest ! : string
    pKB ! : string
    forceMusculaire ! : string
    reflexes ! : string
    sensation! : string
    profilSensoriel! : string
    signesMeninges! : string
    tensionMusculaire! : string
    triggerPoints ! : string
    hypersensibilitePression ! : string
    spasmeMusculaire! : string
    sorensen ! : string
    itoShirado ! : string
    coreStrength! : string
    sidePlank ! : string
    csm ! : string
}

export type FonctioMobiNeuroSchema = {
    property: keyof FonctioMobiNeuro;  
    parser: (obj: FonctioMobiNeuro, raw: string) => void; 
    keyText: string; // text in the file 
};

export const fonctioMobiNeuroSchema: FonctioMobiNeuroSchema[] = [
    { property: "flexion", keyText: "Flexion Avant (cm/grade)", parser: (obj, v) => obj.flexion = v },
    { property: "extension", keyText: "Extension (cm/grade)", parser: (obj, v) => obj.extension = v },
    { property: "inclinaisonLateraleDroit", keyText: "Inclinaison Latérale Droit (cm/grade)", parser: (obj, v) => obj.inclinaisonLateraleDroit = v },
    { property: "inclinaisonLateraleGauche", keyText: "Inclinaison Latérale Gauche (cm/grade)", parser: (obj, v) => obj.inclinaisonLateraleGauche = v },
    { property: "rotationDroite", keyText: "Rotation droite(degré/grade)", parser: (obj, v) => obj.rotationDroite = v },
    { property: "rotationGauche", keyText: "Rotation Gauche(degré/grade)", parser: (obj, v) => obj.rotationGauche = v },
    { property: "combinaisonMouvements", keyText: "Combinaison de mouvements (mouvements/grade)", parser: (obj, v) => obj.combinaisonMouvements = v },
    { property: "mobiliteSegmentaire", keyText: "Mobilité segmentaire PA (étage/grade)", parser: (obj, v) => obj.mobiliteSegmentaire = v },
    { property: "hanche", keyText: "Hanche (mouvements/grade)", parser: (obj, v) => obj.hanche = v },
    { property: "slrDroit", keyText: "SLR Droit (degrés)", parser: (obj, v) => obj.slrDroit = v },
    { property: "slrGauche", keyText: "SLR Gauche (degrés)", parser: (obj, v) => obj.slrGauche = v },
    { property: "asymetrie", keyText: "Asymétrie SLR", parser: (obj, v) => obj.asymetrie = v },
    { property: "slumpTest", keyText: "Slump test (degrés)", parser: (obj, v) => obj.slumpTest = v },
    { property: "pKB", keyText: "PKB (degrés)", parser: (obj, v) => obj.pKB = v },
    { property: "forceMusculaire", keyText: "Force musculaire (MRC scale 0-5)", parser: (obj, v) => obj.forceMusculaire = v },
    { property: "reflexes", keyText: "Réflexes (Oui/Non)", parser: (obj, v) => obj.reflexes = v },
    { property: "sensation", keyText: "Sensation", parser: (obj, v) => obj.sensation = v },
    { property: "profilSensoriel", keyText: "Profil sensoriel", parser: (obj, v) => obj.profilSensoriel = v },
    { property: "signesMeninges", keyText: "Signes méningés", parser: (obj, v) => obj.signesMeninges = v },
    { property: "tensionMusculaire", keyText: "Tension musculaire", parser: (obj, v) => obj.tensionMusculaire = v },
    { property: "triggerPoints", keyText: "Trigger points", parser: (obj, v) => obj.triggerPoints = v },
    { property: "hypersensibilitePression", keyText: "Hypersensibilité à la pression (Oui/Non)", parser: (obj, v) => obj.hypersensibilitePression = v },
    { property: "spasmeMusculaire", keyText: "Spasme musculaire", parser: (obj, v) => obj.spasmeMusculaire = v },
    { property: "sorensen", keyText: "Sorensen (secondes)", parser: (obj, v) => obj.sorensen = v },
    { property: "itoShirado", keyText: "Ito Shirado (secondes)", parser: (obj, v) => obj.itoShirado = v },
    { property: "coreStrength", keyText: "Core Strength Index", parser: (obj, v) => obj.coreStrength = v },
    { property: "sidePlank", keyText: "Side plank D/G (secondes)", parser: (obj, v) => obj.sidePlank = v },
    { property: "csm", keyText: "CSM (Plank, Pelvic tilt, Bridge,...)", parser: (obj, v) => obj.csm = v },
];





