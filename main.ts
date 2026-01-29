
import {Header, headerSchema} from "./models/header"
import{InfoAdmin, Profession, infoAdminSchema} from "./models/infoAdmin"
import {AntropoMetric, antropoMetricSchema} from "./models/antropometric"
import { PathologieLombaire, pathologieLombaireSchema } from "./models/pathologieLombaire";

import * as fs from 'fs';
const Sections  = fs.readFileSync('file.txt','utf8').split("SECTION")


let header = new Header() 
let infoAdmin = new InfoAdmin()
let antropoMetric =  new AntropoMetric()
let pathologieLombaire = new PathologieLombaire()

// Their is probably better than this awful else if list
//It work for now
Sections.forEach((section, index) => {
    

    if(section.includes("FICHE BILAN SCALENEO")){
        header = BuildHeader(section)
    }
    else if(section.includes("INFORMATION ADMINISTRATIVE")){
        infoAdmin = BuildInfoAdmin(section)
    }
    else if(section.includes("DONNÉES ANTHROPOMÉTRIQUES")){
        antropoMetric = BuildAnthropoMetric(section)
    }
    else if(section.includes("PATHOLOGIE LOMBAIRE")){
        pathologieLombaire = BuildPathologieLombaire(section)
    }
});
    console.log(header)
    console.log(infoAdmin)
    console.log(antropoMetric)
    console.log(pathologieLombaire)

function BuildHeader(section : string){

    const lines = SeparateLines(section)

    const headerObj = new Header()
    const schema = headerSchema

    for (const line of lines) {
            for (const entry of headerSchema) {
                if (line.trim().toLowerCase().startsWith(entry.keyText.toLowerCase())){
                    const value = CleanLine(line, entry.keyText);
                    entry.parser(headerObj, value);
                }
            }
        }
    return headerObj;
}

function BuildInfoAdmin(section : string){
    const lines = SeparateLines(section)
    const administratifObj = new InfoAdmin()
    const schema = infoAdminSchema

     for (const line of lines) {
            for (const entry of schema) {
                if (line.trim().toLowerCase().startsWith(entry.keyText.toLowerCase())) {
                    const value = CleanLine(line, entry.keyText);
                    entry.parser(administratifObj, value);
                }
            }
        }
    return administratifObj;
}

function BuildAnthropoMetric(section:string){
    const lines = SeparateLines(section)
    const anthropometricObj =  new AntropoMetric()
    const schema = antropoMetricSchema

       for (const line of lines) {
        console.log(line)
            for (const entry of schema) {
                if (line.trim().toLowerCase().startsWith(entry.keyText.toLowerCase())) {
                    console.log(line)
                    const value = CleanLine(line, entry.keyText);
                    console.log(value)
                    entry.parser(anthropometricObj, value);
                }
            }
        }
    return anthropometricObj;

}

function BuildPathologieLombaire(section:string){
    const lines = SeparateLines(section)
    const pathoLombaireObj =  new PathologieLombaire()
    const schema = pathologieLombaireSchema

       for (const line of lines) {
        console.log(line)
            for (const entry of schema) {
                if (line.trim().toLowerCase().startsWith(entry.keyText.toLowerCase())) {
                    console.log(line)
                    const value = CleanLine(line, entry.keyText);
                    console.log(value)
                    entry.parser(pathoLombaireObj, value);
                }
            }
        }
    return pathoLombaireObj;
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




