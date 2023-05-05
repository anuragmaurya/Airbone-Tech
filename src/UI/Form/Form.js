import React, { useState } from 'react'

const Form  = ({onClose,hello}) => {
  const handleClose = () =>{
    if(onClose){
      onClose()
    }
  }

  const[data, setData] = useState({
    name:"",
    contact:"",
    date: new Date().toISOString().substring(0,10),
    select:"id",
    time: ""
  })
  const FormSubmit =(e) =>{
    e.preventDefault()
    // setData(data)
    console.log(data)
  }

  const handleChange =(e) => {
    setData({
    ...data,
    [e.target.name]: e.target.value
  })}
  // console.log(handleChange)

  return (
    <div className=' absolute top-10 h-[30rem] w-[30rem] rounded-sm bg-white shadow-md'>
        <button onClick={handleClose} className='flex justify-end w-full pr-5 pt-5'>X</button>
      <form onSubmit={FormSubmit} className="flex flex-col mt-10 space-y-4 ml-10 mr-10" action="">
          <div className='pl-2'>
            <label htmlFor="" >Name</label><br />
            <input className='border-2 w-full' name='name' onChange={handleChange} value={data.name} type="text" />
            </div>
            <div className='pl-2'>
            <label htmlFor="" >Email</label><br />
            <input className='border-2 w-full' name='email' onChange={handleChange} value={data.email} type="email"/>
            </div>
            <div className='pl-2'>
            <label htmlFor="Date" >Date</label> <br />
            <input className='border-2 w-full' onChange={handleChange} name='date' value={data.date} type="date" />
            </div>
            <div className='pl-2'>
              <label htmlFor="">Select Movie</label>
              <select className='w-full border-2' onChange={handleChange} name="select" value={data.select} id="">
              {hello.map(items => {
                const{show, score} = items;
                return(
                  
                <option key={show.id}  value={show.id}>{show.name}</option>
                )})}
                </select>

            </div>
            <div className='pl-2'>
              <label htmlFor="">Time</label>
              <input className='border-2 w-full' onChange={handleChange} type="time" name="time" id="" defaultValue="10:30"/>
            </div>
            <button className='p-2 rounded-md  bg-blue-500 bottom-0'>Submit</button>
        </form>        
    </div>
  )
}

export default Form 