import { useState } from "react";
import "./App.css";
import { MyArray } from "./util/array";
function App() {

  const[input,setInput] = useState({
    name:"",
    email:"",
    phone : ""
  });

  const [list,setList] = useState(new MyArray());

//  list.map((ele) =>{
//     console.log(ele);
//  })

console.log(list);

  const handelChange = (e) =>{
      setInput(
        {
          ...input, [e.target.name] : e.target.value
        }
      )
  }

  const display = (e) =>{
    e.preventDefault();
      console.log(input);
      list.push(input);
      setList(list);
  }
  
  return (
    <>
      <div className="container">
        <form action="" className = "from">
          <div>
            <label>Name : </label>
            <input name="name" type="text" placeholder = "Enter Your Name" value={input.name} onChange={handelChange} />
          </div>

          <div>
            <label>Email : </label>
            <input name="email" type="email" placeholder = "Enter Your Email" value={input.email} onChange={handelChange} />
          </div>

          <div>
            <label>Ph No : </label>
            <input name="phone" type="text" placeholder = "Enter Your Phone Number" value={input.phone} onChange={handelChange}/>
          </div>
          <button onClick={display}>Submit</button>
        </form>
        <div className='table'>
          {
            list.getLength()> 0 ? 
            list.map((ele,index) =>(
                <div key={index}>
                  <p>
                  {ele.name}
                  </p>
                </div>
            )  
            )
            :
            null
          }
        </div>
      </div>
    </>
  );
}

export default App;
