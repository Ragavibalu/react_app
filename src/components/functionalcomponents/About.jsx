import { useEffect,useState } from "react";
const About=()=>{
    const [tabName,setTabname]=useState("you are free from cold Don't take any pills to avvoid sideeffects")
    const updateTablet=()=>{
        setTabname("Welcome to cold club take this tablet Citricin cure it");
    }
    const updateTablet1=()=>{
        setTabname("Welcome to fever club take this tablet Citricin cure it");
    }
    const updateTablet2=()=>{
        setTabname("Welcome to seizure club take this tablet Citricin cure it");
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
    },[tabName])
    return(
        <div>
            <h1>{tabName}</h1> 
            <button onDoubleClick={updateTablet}>Click me if you get cold</button>
            <button onDoubleClick={updateTablet1}>Click me if you get fever</button>
            <button onDoubleClick={updateTablet2}>Click me if you get epilepsy</button>
        </div>
    )
}
export default About;