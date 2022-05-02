

import { useState,useEffect } from 'react'


export const ShowStudents = () => {
  

    const [studentdata,setStudentdata] = useState([])
    const [text,setText] = useState("")
    const [sortquery,setsort] = useState("")
    const [sortby,setsortby] = useState("")
   

    useEffect(()=>{
        getData()
       
    },[])
        const  getData=async()=>{
         const data= await fetch("http://localhost:8080/students").then((d)=>
            d.json()
          )
            console.log(data)
            setStudentdata(data)
        }



        // sortr 1
        function Handlequery(e){
setsort(e.target.value)
        }

        // sorting 
        function Handle(e){
          setsortby(e.target.value)
          
        }

        function Sort(){
          // age
        if(sortquery=="age" && sortby=="asc"){
  
            const sortdata=[...studentdata]
            sortdata.sort(function(a,b){
              return (a.age-b.age)
             
            })
            console.log(sortdata)
            setStudentdata(sortdata)

          console.log("yes")
        }  else  if(sortquery=="age" && sortby=="desc"){
  
          const sortdata=[...studentdata]
          sortdata.sort(function(a,b){
            return (b.age-a.age)
           
          })
          console.log(sortdata)
          setStudentdata(sortdata)

        console.log("yes")
      }

      //10 th
      else if(sortquery=="tenth_score" && sortby=="asc"){
        const sortdata=[...studentdata]
          sortdata.sort(function(a,b){
            return (a.tenth_score-b.tenth_score)
           
          })
          console.log(sortdata)
          setStudentdata(sortdata)

        console.log("yes")
      }
      else if(sortquery=="tenth_score" && sortby=="desc"){
        const sortdata=[...studentdata]
          sortdata.sort(function(a,b){
            return (b.tenth_score-a.tenth_score)
           
          })
          console.log(sortdata)
          setStudentdata(sortdata)

        console.log("yes")
      }
       //12 th
       else if(sortquery=="twelth_score" && sortby=="asc"){
        const sortdata=[...studentdata]
          sortdata.sort(function(a,b){
            return (a.twelth_score-b.twelth_score)
           
          })
          console.log(sortdata)
          setStudentdata(sortdata)

        console.log("yes")
      }
      else if(sortquery=="twelth_score" && sortby=="desc"){
        const sortdata=[...studentdata]
          sortdata.sort(function(a,b){
            return (b.twelth_score-a.twelth_score)
           
          })
          console.log(sortdata)
          setStudentdata(sortdata)

        console.log("yes")
      }
       //gender
       else if(sortquery=="first_name" && sortby=="asc"){
        const sortdata=[...studentdata]
          sortdata.sort(function(a,b){
           if(a.first_name>b.first_name){
             return 1
           }else if(a.first_name<b.first_name){
             return -1
           }else{
             return 0
           }
           
          })
          console.log(sortdata)
          setStudentdata(sortdata)

        console.log("yes")
      }
      else if(sortquery=="first_name" && sortby=="desc"){
        const sortdata=[...studentdata]
          sortdata.sort(function(a,b){
           if(a.first_name<b.first_name){
             return 1
           }else if(a.first_name>b.first_name){
             return -1
           }else{
             return 0
           }
           
          })
          console.log(sortdata)
          setStudentdata(sortdata)

        console.log("yes")
      }
      else if(sortquery=="gender" && sortby=="asc"){
        const sortdata=[...studentdata]
          sortdata.sort(function(a,b){
           if(a.gender>b.gender){
             return 1
           }else if(a.gender<b.gender){
             return -1
           }else{
             return 0
           }
           
          })
          console.log(sortdata)
          setStudentdata(sortdata)

        console.log("yes")
      }
      else if(sortquery=="gender" && sortby=="desc"){
        const sortdata=[...studentdata]
          sortdata.sort(function(a,b){
           if(a.gender<b.gender){
             return 1
           }else if(a.gender>b.gender){
             return -1
           }else{
             return 0
           }
           
          })
          console.log(sortdata)
          setStudentdata(sortdata)

        console.log("yes")
      }
     

      //
        }

        
        
          
// search
  function handlechange(e){
    setText(e.target.value)
              }

    return (
      <div>
         <input className='search' onChange={handlechange} type="text" placeholder='search by student name'/>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select onChange={Handlequery}
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option>--</option>
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select  onChange={Handle}
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option>--</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button onClick={Sort} className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            { studentdata.filter((user)=>user.first_name.toLowerCase().includes(text)).map((e)=>(

            <tr className="row">
              <td className="first_name">{e.first_name}</td>
              <td className="last_name">{e.last_name}</td>
              <td className="email">{e.email}</td>
              <td className="gender">{e.gender}</td>
              <td className="age">{e.age}</td>
              <td className="tenth_score">{e.tenth_score}</td>
              <td className="twelth_score">{e.twelth_score}</td>
              <td className="preferred_branch">{e.preferred_branch}</td>
            </tr>
             ))}
          </tbody>
        </table>
      </div>
    );
  };