import React, { useEffect, useState } from 'react';

import './App.css';
import RemindersList from './components/RemindersList';
import Reminder from './interfaces/Reminder'
import reminderService from './services/reminder'

function App() {

  const [reminders,setReminders]= useState<Reminder[]>([])

  useEffect(()=>{
    loadReminders()

  },[])

  const loadReminders= async()=>{
  const reminders=await reminderService.getReminders();
  setReminders(reminders);
  }
  return (
    <div className="App">
    <RemindersList items={reminders}/>
    </div>
  );
}

export default App;
