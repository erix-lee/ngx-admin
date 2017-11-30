/**
 * A model for an individual corporate employee
 */
export class CorporateEmployee {
    name: string;
    gender: string;
    company: string;


    constructor(name: string, gender: string, company: string){
        this.name = name;
        this.gender = gender;
        this.company = company;
   
    }
    
}