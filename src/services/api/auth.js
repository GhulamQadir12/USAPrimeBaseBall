import { PostLoginData } from "./api-compo"

export const LoginAuth = async (url,data)=> {
    try {
        console.log('From Auth :',url,data)
        const res = await PostLoginData(url,data)   
        return res;     
    } catch (error) {
        console.log('Error in Sending Data in Auth',error);
        return null;
    }
}