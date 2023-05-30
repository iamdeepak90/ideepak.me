import { Rule, SchemaTypeDefinition } from "sanity";

const portfolioCat:SchemaTypeDefinition = {
    title:"Portfolio Categories",
    name:"portfolio-cat",
    type:"document",
    fields:[
        {
            title:"Title",
            name:"title",
            type:"string",
            validation:(rule:Rule)=>rule.required()
        },
        {
            title:"Image",
            name:"image",
            type:"image",
            validation:(rule:Rule)=>rule.required(),
        },
        {
            title:"Description",
            name:"description",
            type:"text"
        }
    ],
    preview:{
        select:{title:"title", media:"image"}
    }
}

export default portfolioCat;