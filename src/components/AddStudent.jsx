

import { useState } from 'react'

export const AddStudent = () => {
  const [formData ,setformData]=useState([])
 
  
const Handle=(e)=>{

  const {name, value}=e.target
      setformData({
          ...formData,[name]:value,
      })
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    
 
    const create={
      "first_name": formData.first_name,
      "last_name": formData.last_name,
      "email": formData.first_email,
      "gender": formData.gender,
      "age": formData.age,
      "tenth_score": formData.tenth_score,
      "twelth_score": formData.twelth_score,
      "preferred_branch": formData.preferred_branch,
    }
    fetch("http://localhost:8080/students",{
      method:"POST",
      headers:{
          "content-type":"application/json",
      },
      body:JSON.stringify(create),
    
    }).then(()=>{
      
    })
    alert("registration succesful")
    
    }
  return (
    
    <form onSubmit={handleSubmit}  className="addstudent">
      
      <div>
        Firstname:{" "}
        <input onChange={Handle}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input onChange={Handle}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>
      <div>
        {" "}
        Email:
        <input onChange={Handle}
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input onChange={Handle}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input onChange={Handle}
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input onChange={Handle}
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input onChange={Handle}
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input onChange={Handle}
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select onChange={Handle}
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};