
export class Header{
    semaine! : string
    patient! : string
    date! : string
}



function capitalizeFirstLetter(str : string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

type HeaderSchema = {
    property: keyof Header;  
    parser: (obj: Header, raw: string) => void; 
    keyText: string; 
};

export const headerSchema: HeaderSchema[] = [
    { property: "semaine", keyText: "Semaine", parser: (obj, v) => obj.semaine = v },
    { property: "patient", keyText: "Patient", parser: (obj, v) => obj.patient = capitalizeFirstLetter(v) },
    { property: "date", keyText: "Date", parser: (obj, v) => obj.date = v },
];