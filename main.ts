
import {Heading} from "./models/heading"
import * as fs from 'fs';
const lignes  = fs.readFileSync('../BENOIT_Sophie_S0.txt','utf8').split("SECTION")
// .split(/\r?\n/);;


// 1 header
lignes.forEach((ligne, index) => {


    if(ligne.includes("FICHE BILAN SCALENEO")){
        BuildHeader(ligne)
    }
});





function BuildHeader(section : string){

    console.log("Section :" + section)
    const lines = SeparateLines(section)
    const header = new Heading()

    let keys = header.GetKey()

    lines.forEach(line => {
        
    });
    
}

function SeparateLines(section : string) : string[]{
    return section.split(/\r?\n/);
} 

function CleanLine(line : string, key : string) : string {

    line.replace(key,"")
    line.replace(":","")

    line.trim()

    return line
}