import React, {useState} from "react";

const Form = props => {
    const [member, setMember] = useState({
        fname: "",
        lname: "",
        email: "",
        title: ""
    });

const handleChanges = e => {
    setMember({
        ...member, [e.target.name]: e.target.value
    });
    // console.log(e.target.value)
}

const submitForm = e => {
    e.preventDefault();
    props.addMember(member);
    setMember({fname: "", lname: "", email: "", title: "", role: "", bio: ""});
}

    return (
        <form onSubmit={submitForm}>
            <div className="formSections">
                <label htmlFor="fname">First Name: </label>
                <input 
                    id="fname"
                    type="text"
                    placeholder="FIRST NAME"
                    name="fname"
                    onChange={handleChanges}
                    value={member.fname}
                />
            </div>
            
            <div className="formSections">
                <label htmlFor="lname">Last Name: </label>
                <input 
                    id="lname"
                    type="text"
                    placeholder="LAST NAME"
                    name="lname"
                    onChange={handleChanges}
                    value={member.lname}
                />
            </div>

            <div className="formSections">
                <label htmlFor="email">Email: </label>
                <input 
                    id="email"
                    type="text"
                    placeholder="EMAIL"
                    name="email"
                    onChange={handleChanges}
                    value={member.email}
                />
            </div>
            
            <div className="formSections">
                <label htmlFor="role">Role: </label>
                <input 
                    id="role"
                    type="text"
                    placeholder="ROLE"
                    name="role"
                    onChange={handleChanges}
                    value={member.role}
                />
            </div>

            <div className="bio">
                <label htmlFor="bio">Biography: </label>
                <textarea name="bio" id="bio" onChange={handleChanges} value={member.bio} />
            </div>
            
            <button type="submit">Add New Member</button>
        </form>
    );
}

export default Form;