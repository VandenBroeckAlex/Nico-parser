
import {Header, headerSchema} from "./models/header"
import{InfoAdmin, Profession, infoAdminSchema} from "./models/infoAdmin"
import {AntropoMetric, antropoMetricSchema} from "./models/antropometric"
import { PathologieLombaire, pathologieLombaireSchema } from "./models/pathologieLombaire";
import { Symptome, symptomeSchema } from "./models/symptome";

import * as fs from 'fs';
const Sections  = fs.readFileSync('file.txt','utf8').split("SECTION")


let header = new Header() 
let infoAdmin = new InfoAdmin()
let antropoMetric =  new AntropoMetric()
let pathologieLombaire = new PathologieLombaire()
let symptome = new Symptome()

// Their is probably better than this awful else if list
//It work for now
Sections.forEach((section, index) => {
    

    if(section.includes("FICHE BILAN SCALENEO")){
        BuildObject(section,header,headerSchema)
    }
    else if(section.includes("INFORMATION ADMINISTRATIVE")){
        BuildObject(section,infoAdmin,infoAdminSchema)
    }
    else if(section.includes("DONNÉES ANTHROPOMÉTRIQUES")){
        BuildObject(section,antropoMetric,antropoMetricSchema)
    }
    else if(section.includes("PATHOLOGIE LOMBAIRE")){
        BuildObject(section,pathologieLombaire,pathologieLombaireSchema)
    }
    else if(section.includes("SYMPTÔMES - INTENSITÉ DOULEUR (NRS 0-10)")){
        BuildObject(section,symptome,symptomeSchema)
    }
});
    console.log(header)
    console.log(infoAdmin)
    console.log(antropoMetric)
    console.log(pathologieLombaire)
    console.log(symptome)



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




