import { useEffect } from "react"; //import useEffect here
import data from './data';
export default function Welcome() {
   
    useEffect(() => {
    console.log("Welcome COmponent didMount");
    console.log(data);
    console.log("data", data);
   
    return () => {
      console.log("Welcome Component will unmount");
    };
  });
  // Create DidMount & WillUnmount with useEffect
  // inside it can print "Welcome Component Did Mount" & "Welcome Component Will Unmount"

  return (
    <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">
      Welcome
    </div>
  );
}
