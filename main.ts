
import {Header, headerSchema} from "./models/SectionHeader"
import {InfoAdmin, infoAdminSchema} from "./models/SectionInfoAdmin"
import {AntropoMetric, antropoMetricSchema} from "./models/SectionAntropometric"
import { PathologieLombaire, pathologieLombaireSchema } from "./models/SectionPathologieLombaire";
import { Symptome, symptomeSchema } from "./models/SectionSymptome";
import { MecanismeDouleur, mecanismeDouleurSchema } from "./models/SectionMecanismeDouleur";
import { Satisfaction, satisfactionSchema } from "./models/SectionSatisfaction";
import { Observation, observationSchema } from "./models/SectionObservationEtNotes";
import { Hypothese,hypotheseSchema } from "./models/SectionHypothese";
import { ControleQuality, controleQualitySchema } from "./models/SectionControleQuality";
import { FonctioMobiNeuro, fonctioMobiNeuroSchema } from "./models/SectionTestsFonctioMobiNeuro";
import { QuestionnaireValide, questionnaireValideSchema } from "./models/SectionQuestionnaireValide";

import * as fs from 'fs';
const Sections  = fs.readFileSync('file.txt','utf8').split("SECTION")

const startTime = performance.now();
let header = new Header() 
let infoAdmin = new InfoAdmin()
let antropoMetric =  new AntropoMetric()
let pathologieLombaire = new PathologieLombaire()
let symptome = new Symptome()
let mecaDouleur = new MecanismeDouleur()
let satisfaction = new Satisfaction()
let observationEtNotes = new Observation()
let hypothese = new Hypothese()
let controleQuality = new ControleQuality()
let fonctioMobiNeuro = new FonctioMobiNeuro()
let questionnaireValide = new QuestionnaireValide()
type SectionHandler = {
  match: string;
  target: unknown;
  schema: unknown;
};

const SECTION_HANDLERS: SectionHandler[] = [
  {
    match: "FICHE BILAN SCALENEO",
    target: header,
    schema: headerSchema,
  },
  {
    match: "INFORMATION ADMINISTRATIVE",
    target: infoAdmin,
    schema: infoAdminSchema,
  },
  {
    match: "DONNÉES ANTHROPOMÉTRIQUES",
    target: antropoMetric,
    schema: antropoMetricSchema,
  },
  {
    match: "PATHOLOGIE LOMBAIRE",
    target: pathologieLombaire,
    schema: pathologieLombaireSchema,
  },
  {
    match: "SYMPTÔMES - INTENSITÉ DOULEUR (NRS 0-10)",
    target: symptome,
    schema: symptomeSchema,
  },
  {
    match: "MÉCANISMES DE DOULEUR (Cocher: 1=Oui, 0=Non)",
    target: mecaDouleur,
    schema: mecanismeDouleurSchema,
  },
  {
    match: ": Satisfaction",
    target: satisfaction,
    schema: satisfactionSchema,
  },
  {
    match: "OBSERVATIONS CLINIQUES & NOTES",
    target: observationEtNotes,
    schema: observationSchema,
  },
   {
    match: "Hypothèse de travail (SCALENEO)",
    target: hypothese,
    schema: hypotheseSchema,
  },
  {
    match: "CONTRÔLE QUALITÉ",
    target: controleQuality,
    schema: controleQualitySchema,
  },
  {
    match :"TESTS FONCTIONNELS - MOBILITÉ LOMBAIRE - TESTS NEURODYNAMIQUES - SIGNES NEUROLOGIQUES ",
    target: fonctioMobiNeuro,
    schema: fonctioMobiNeuroSchema
  },
  {
    match : "QUESTIONNAIRES VALIDÉS - SCORES [À remplir si indiqué]",
    target : questionnaireValide,
    schema : questionnaireValideSchema,
  }
];

// Their is probably better than this awful else if list
//It work for now

Sections.forEach(section => {
  const handler = SECTION_HANDLERS.find(h =>
    section.toLowerCase().includes(h.match.toLowerCase())
  );

  if (handler) {
    //console.log(handler.match)
    BuildObject(section, handler.target, handler.schema);
  }
});
    console.log(header)
    console.log(infoAdmin)
    console.log(antropoMetric)
    console.log(pathologieLombaire)
    console.log(symptome)
    console.log(mecaDouleur)
    console.log(fonctioMobiNeuro)
    console.log(satisfaction)
    console.log(observationEtNotes)
    console.log(hypothese)
    console.log(controleQuality)
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Time for parsing file : ${elapsedTime} ms`);
// ------------------------------------

function BuildObject(section : string, objectToBuild : any , _schema : any){

    const lines = SeparateLines(section)
    const schema = _schema

       for (const line of lines) {
            for (const entry of schema) {
                if (line.trim().toLowerCase().startsWith(entry.keyText.toLowerCase())) {
                    const value = CleanLine(line, entry.keyText);
                    entry.parser(objectToBuild, value);
                }
            }
        }
    return objectToBuild;
}





function SeparateLines(section : string) : string[]{
    return section.split("\n");
} 


function CleanLine(line: string, key: string): string {

     const lineLower = line.toLowerCase();
     const keyLower = key.toLowerCase();


    const keyIndex = lineLower.indexOf(keyLower);

    if (keyIndex === -1){
        return line.trim(); 
    } 

    
    let valueStart = keyIndex + key.length;
    while (valueStart < line.length && [":", "-", "=", " "].includes(line[valueStart])) {
        valueStart++;
    }

    // extract value
    const value = line.slice(valueStart).trim();
    return value;
}




