import React,{useState} from 'react'
import axios from 'axios'; 
import { useNavigate } from 'react-router';

const Appointment = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [date,setDate] = useState('');
  const [message,setMessage] = useState('');
  const sendData= ()=>{
    axios.post("http://localhost:3001/getData", {data:{name:name, email:email, date:date, message:message}}).then((res)=>{
      console.log(res);
      navigate(0);
    })
  }
  const navigate = useNavigate();
  

  return (
    <section className="appointment">
      <h2>Appointment</h2>
      <form className='appointment-form'>
        <div >
          <input type="text" id="name" name="name" placeholder='Name' onChange={(e)=>{setName(e.target.value)}} required />
        </div>
        <div >
          <input type="email" id="email" name="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} required />
        </div>
        <div className='date'>
          {/* <label >Date</label> */}
          <input type="date" id='date' name="date" onChange={(e)=>{setDate(e.target.value)}} required />
        </div>
        <div >
          <textarea id="message" name="message" placeholder='Message' onChange={(e)=>{setMessage(e.target.value)}} required></textarea>
        </div>
        <button type="submit" onClick={sendData} >Submit</button>
      </form>
    </section>
  )
}

export default Appointment