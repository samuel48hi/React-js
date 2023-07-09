import {UserContext} from './App';

function ComponentC(props){
return(<div>
        <UserContext.Consumer>
            {
                (obj)=>{
                    return (<div>{obj}</div>)
                }
            }
        </UserContext.Consumer>
        {/* This is component C - {props.name} */}
        </div>
        )
}

export default ComponentC;