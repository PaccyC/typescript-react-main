import React from 'react'
import Reminder from '../interfaces/Reminder'
interface ReminderListProps {
    items:Reminder[];
}


const RemindersList = (props:ReminderListProps) => {
  return (
 <ul>
    {props.items.map((item)=>(
        <li className='list-group-item' key={item.id}>{item.title}</li>
    ))}
 </ul>
  )
}

export default RemindersList
