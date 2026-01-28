
import {Header, headerSchema} from "./models/header"
import{InfoAdmin, Profession, infoAdminSchema} from "./models/infoAdmin"

import * as fs from 'fs';
const Sections  = fs.readFileSync('file.txt','utf8').split("SECTION")
// .split(/\r?\n/);;

let header = new Header() 
let infoAdmin = new InfoAdmin()

// 1 header
Sections.forEach((section, index) => {
    

    if(section.includes("FICHE BILAN SCALENEO")){
        header = BuildHeader(section)
    }
    if(section.includes("INFORMATION ADMINISTRATIVE")){
        infoAdmin = BuildInfoAdmin(section)
    }
});
    console.log(header)
    console.log(infoAdmin)



function BuildHeader(section : string){

    const lines = SeparateLines(section)

    const headerObj = new Header()
    const schema = headerSchema

    for (const line of lines) {
            for (const entry of headerSchema) {
                 if (line.toLowerCase().includes(entry.keyText.toLowerCase())) {
                    const value = CleanLine(line, entry.keyText);
                    entry.parser(headerObj, value);
                }
            }
        }
    return headerObj;
}

function BuildInfoAdmin(section : string){
    const lines = SeparateLines(section)
    const infoObj = new InfoAdmin()
    const schema = infoAdminSchema

     for (const line of lines) {
            for (const entry of schema) {
                if (line.trim().toLowerCase().startsWith(entry.keyText.toLowerCase())) {
                    const value = CleanLine(line, entry.keyText);
                    entry.parser(infoObj, value);
                }
            }
        }
    return infoObj;
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




