import { phones } from "../data/phone";

export const  getPhoneById =(id)=>{

    return phones.find( phone => phone.id === id);
}