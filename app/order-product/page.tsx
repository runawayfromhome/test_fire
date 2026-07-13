//this part is where i learned how to use the useRouter navgation

'use client'

import { useRouter } from "next/navigation";
// importing useRouter from next/navigation since theres also next/router
export default function OrderProduct (){
    //declare the router to store useRouter
    const router = useRouter();
        
    const handleClick = () => {
        console.log("hello");
        // now when the place order button is click, it will log hello and will also push the / directory
        router.push("/")
    };      
    return (
        <>
            <h1> hello this is order </h1>
            <button onClick={handleClick}> place order</button>
        </>
    ); 
}