import ComponentC from "./ComponentC";


function ComponentA(props){
    return (<div>
        <h1>This is componet A</h1>
        <ComponentC name={props.name}/>
    </div>)
}

export default ComponentA;