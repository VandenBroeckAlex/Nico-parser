export class Heading{

    semaine! : number
    name! : string
    patient! : string
    date! : string


    GetKey() : string[]
    {
        return ["semaine","name","patient","date"]
    }
}
    