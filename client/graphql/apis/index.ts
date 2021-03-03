import client from '../../lib/with-apollo';
import { ContactsDocument,Contact } from '../../generated/graphql'

interface Reponse{
    data:Contact[] | null,
    error:boolean | null
}
export const getContacts = async(limit:number,offset:number):Promise<Reponse>=>{
    try{
        const {data}=await client.query({query:ContactsDocument,
            variables:{
                limit,
                offset
        }
        })
        return {data:data.contacts,error:false};
    }
    catch(err){
        console.log("asdasdas")
        return {data:null,error:true}
    }
}