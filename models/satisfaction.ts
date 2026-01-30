export class Satisfaction{
    satisfaction ! : string
    gas ! : string
}

export type SatisfactionSchema = {
    property: keyof Satisfaction;  
    parser: (obj: Satisfaction, raw: string) => void; 
    keyText: string; // text in the file 
};

export const satisfactionSchema: SatisfactionSchema[] = [
    { property: "satisfaction", keyText: "Treatment Satisfaction Score (0-100) ", parser: (obj, v) => obj.satisfaction = v },
    { property: "gas", keyText: "GAS (Goal Attainment Scaling)", parser: (obj, v) => obj.gas = v },
];



