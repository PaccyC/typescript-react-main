import React from 'react'
import Reminder from '../interfaces/Reminder'
interface ReminderListProps {
    items:Reminder[];
    onRemoveReminder:(id:number)=>void;
}


const RemindersList = ({items,onRemoveReminder}:ReminderListProps) => {
  return (
 <ul>
    {items.map((item)=>(
        <li className='list-group-item' key={item.id}>{item.title}
        <button onClick={()=>onRemoveReminder(item.id)} className="btn btn-outline-danger mx-2 rounded-pill">Delete</button>
        </li>
    ))}
 </ul>
  )
}

export default RemindersList
