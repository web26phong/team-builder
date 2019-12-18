import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Members from "./components/Members";
import Form from "./components/Form";

function App() {
  const [members, setMembers] = useState([]);
  
  const addMember = member => {
    const newMember = {
      id: Date.now(),
      fname: member.fname,
      lname: member.lname,
      email: member.email,
      role: member.role,
      bio: member.bio
    }
    setMembers([...members, newMember]);
  }
  
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addMember={addMember} />
      <Members members={members}/>
    </div>
  );
}

export default App;
