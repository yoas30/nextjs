import { Metadata } from "next"

export const metadata : Metadata ={
    title: 'About Page',
    description: 'This Is About Page'
}

export default function About(){
    return <h2>About Page</h2>
}