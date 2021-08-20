import { useEffect } from "react"


export default function GuestGreeting() {

    useEffect(()=>{
        console.log("Guest COmponent didMount");

        return () =>{
            console.log('guest Component will unmount')
        }
    },[]);
    // Create DidMount & WillUnmount with useEffect 
    // inside it can print "Guest Greeting Component Did Mount" & "Guest Greeting Component Will Unmount"

    return (
        <div className="text-center h1 bg-secondary text-light py-5">
            Please Login !
        </div>
    )
}
