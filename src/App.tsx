import React, { useEffect, useState } from 'react';

import './App.css';
import RemindersList from './components/RemindersList';
import Reminder from './interfaces/Reminder'
import reminderService from './services/reminder'
import NewReminder from './components/NewReminder';

function App() {

  const [reminders,setReminders]= useState<Reminder[]>([])

  useEffect(()=>{
    loadReminders()

  },[])

  const loadReminders= async()=>{
  const reminders=await reminderService.getReminders();
  setReminders(reminders);
  }
  const removeReminder =(id:number)=>{

    setReminders(reminders.filter(reminder => reminder.id !== id))
  }
  const addReminder = async(title:string)=>{
    console.log(title);
    
   const newReminder= await reminderService.addReminder(title)
   setReminders([newReminder,...reminders])
  }
  return (
    <div className="App">
      <NewReminder onAddReminder = {addReminder}/>
    <RemindersList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
