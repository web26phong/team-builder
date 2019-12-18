import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Members from "./components/members";
import Form from "./components/forms";

function App() {
  const [members, setMembers] = useState([]);
  
  const addMember = member => {
    const newMember = {
      id: Date.now(),
      fname: member.fname,
      lname: member.lname,
      email: member.email,
      title: member.title
    }
    setMembers([...members, newMember]);
  }
  
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addMember={addMember} />
      <Members />
    </div>
  );
}

export default App;
