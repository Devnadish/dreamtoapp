import { sanityFetch } from "../live"
import { defineQuery, groq } from "next-sanity"



export const getAllServices=async()=>{
    const ALL_SERVICES_QUERY=defineQuery(`
    *[_type=="post"]{title}
        
        `)

        try {
            const post=await  sanityFetch({query:ALL_SERVICES_QUERY})
            return post.data || []

        } catch (error) {
            console.log(error)
            return []
            
        }
}
