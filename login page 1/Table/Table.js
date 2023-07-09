import './Table.css';
import download from '../assets/image/download.jpg';
import Header from '../Header';
import {useEffect, useState } from 'react';
import axios from 'axios';

const List=[{
  Bookname:"petterjhon",
  Price:"4500",
  Available:true
},
{
  Bookname:"petterrabbit",
  Price:"2500",
  Available:true
},
{
  Bookname:"marvel",
  Price:"5500",
  Available:false
}
]

function Table(){

  const [getlist,setlist]=useState([]);

const [getform,setform]=useState({
  Bookname:"",
  Price: "",
  Available:false
});

const onChangeHandler=(event)=>{
  // console.log(event.target.checked)
  if(event.target.name==="Available")
  {
    setform({...getform,[event.target.name]:event.target.checked})
  }
  else{
  setform({...getform,[event.target.name]:event.target.value})
  }
}

const emptyvalidation=(value)=>{
  if(value)
  {
    return true;
  }
  else{
    return false;
  }
}

useEffect(()=>{

initialData();

},[])

const initialData=()=>{
  axios.get('http://localhost:3000/book').then((obj)=>{
console.log(obj);

if(obj && obj.data.length>0){
  setlist(obj.data);
}
else{
  alert("no data found");
}

  }).catch(()=>{
    alert("some error occured");
  })
}

const onSubmitHandler=(event)=>{
    event.preventDefault()
    if(!emptyvalidation(getform.Bookname))
    {
      alert("bookname cannot be empty");
      return;
    }
    if(!emptyvalidation(getform.Price))
    {
      alert("price cannot be empty");
      return;
    }
    if(getEditButton){
      onEditHandler();
    }
    else{   
    setlist([...getlist,getform]);

    axios.post( 'http://localhost:3000/book',getform).then((result)=>{
      console.log(result);
    }).catch((error)=>{
      console.log(error);
      alert("error occur");
    })
    }
}

const[getEditButton,setEditButton]=useState(false);
const[editid,setid]=useState(-1);

const onDeleteHandler=(index)=>{

  axios.delete(`http://localhost:3000/book/${getlist[index].id}`).then((obj)=>{
  initialData();
 
 }).catch((error)=>{
  console.log(error);
 })
}

const existingDetails=(index)=>{
  setEditButton(true);
  setid(index);
  setform({
    Bookname:getlist[index].Bookname,
    Price:getlist[index].Price,
    Available:getlist[index].Available,
  })
}
const onEditHandler=()=>{
  // const list = [...getlist];
  // list[editid].Bookname=getform.Bookname;
  // list[editid].Price=getform.Price;
  // list[editid].Available=getform.Available;
  // setlist(list);
axios.put(`http://localhost:3000/book/${getlist[editid].id}`,getform).then((obj)=>{
  setEditButton(false);
  // setid(-1);
  setform({
    bookname:"",
    price:'',
    available:false
  })
  initialData(); 
}).catch(()=>{
  alert("some error occur plz retry again")
})
  
}

    return (<div>
       <Header/>
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                <div  class="text-center">
                     <h1>Add Book</h1>
                  </div>
              </div>
          </div>
          <div class="row">
            
              <div class="col-md-4">
                <form>
                    <div class="form-group">
                      <label >Book name  </label>
                      <input type="text" onChange={onChangeHandler} value={getform.Bookname} class="form-control" name="Bookname"/>
                     
                    </div>
                    <div class="form-group">
                      <label >price  </label>
                      <input type="text" onChange={onChangeHandler} value={getform.Price} class="form-control" name='Price'/>
                     
                    </div>
                    <div class="form-group">
                      <label >available </label>
                      <input type="checkbox" onChange={onChangeHandler} checked={getform.Available} class="form-control" name="Available"/>
                     
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div  class="text-center">
                              <button type="submit" onClick={onSubmitHandler} class="btn btn-outline-success">{getEditButton?"Edit":"Add"}</button>
                            </div>
                           
                        </div>
                    </div>
                   
                  </form>
              </div>
              <div class="col-md-4">

            </div>
              <div class="col-md-4">

              </div>
          </div>
          <div class="row">
              <div class="col-md-1">

              </div>
              <div class="col-md-10">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Availabe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        getlist.map((obj,index)=>{
                            return(
                              <tr>
                              <th scope="row">{index+1}</th>
                              <td>{obj.Bookname}</td>
                              <td>{obj.Price}</td>
                              <td><i class="fa fa-pencil-square-o" onClick={()=>existingDetails(index)} aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-trash" onClick={()=>onDeleteHandler(index)} aria-hidden="true"></i></td>
                              <td><a href="">{obj.Available?"Available":"notAvailable"}</a></td>
                            </tr>
                            )
                        }
                        )
                      }
                    </tbody>
                  </table> 
            </div>
            <div class="col-md-1">
                  
            </div>
        </div>
        </div>
    </div>)
}

export default Table;