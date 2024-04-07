import React, { useState } from 'react'


interface NewReminderProps{
    onAddReminder: (title:string)=>void;
}
const NewReminder = ({onAddReminder}:NewReminderProps):JSX.Element => {
    const [title,setTitle]= useState('');

    const handleSubmit = (e :React.FormEvent)=>{
  e.preventDefault()
 if(!title) 
 {return}
  onAddReminder(title)
  setTitle('');
    }
  return (
  <form onSubmit={handleSubmit} >
    <label htmlFor="title">Title</label>
    <input value={title} onChange={e =>setTitle(e.target.value)} id='title'  type="text" className="form-control" />
    <button type='submit' className="btn btn-primary my-3 rouded-pill">Add Reminder</button>
  </form>
  )
}

export default NewReminder
