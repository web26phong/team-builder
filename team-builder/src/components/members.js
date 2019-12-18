import React, {useState} from "react";

const Members = props => {

    return (
        <div className="members-list">
           {props.members.map(member => (
               <div className="member" key={member.id}>
                   <p>Name:  <span>{member.fname} {member.lname}</span></p>
                   <p>Email: <span>{member.email}</span></p>
                   <p>Role: <span>{member.role}</span></p>
                   <p>Biography: <span>{member.bio}</span></p>
               </div>
           ))} 
        </div>
    );
}

export default Members;