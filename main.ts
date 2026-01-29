
import {Header, headerSchema} from "./models/header"
import {InfoAdmin, infoAdminSchema} from "./models/infoAdmin"
import {AntropoMetric, antropoMetricSchema} from "./models/antropometric"
import { PathologieLombaire, pathologieLombaireSchema } from "./models/pathologieLombaire";
import { Symptome, symptomeSchema } from "./models/symptome";
import { MecanismeDouleur, mecanismeDouleurSchema } from "./models/mecanismeDouleur";
import { Satisfaction, satisfactionSchema } from "./models/satisfaction";
import { Observation, observationSchema, ObservationSchema } from "./models/observationEtNotes";


import * as fs from 'fs';
const Sections  = fs.readFileSync('file.txt','utf8').split("SECTION")


let header = new Header() 
let infoAdmin = new InfoAdmin()
let antropoMetric =  new AntropoMetric()
let pathologieLombaire = new PathologieLombaire()
let symptome = new Symptome()
let mecaDouleur = new MecanismeDouleur()
let satisfaction = new Satisfaction()
let observationEtNotes = new Observation()


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
];

// Their is probably better than this awful else if list
//It work for now
Sections.forEach(section => {
  const handler = SECTION_HANDLERS.find(h =>
    section.includes(h.match)
  );

  if (handler) {
    BuildObject(section, handler.target, handler.schema);
  }
});
    console.log(header)
    console.log(infoAdmin)
    console.log(antropoMetric)
    console.log(pathologieLombaire)
    console.log(symptome)
    console.log(mecaDouleur)
    console.log(satisfaction)
    console.log(observationEtNotes)

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
    return section.split(/\r?\n/);
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




