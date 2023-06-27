import { useState } from "react";
import "./addForm.css"

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target


        setUser({ ...user, [name]: value })
    }
    return (
        <div className="addForm">
            <form class="form" onSubmit={
                event => {
                    event.preventDefault();
                    if (!user.name || !user.username) return;
                    props.addUser(user);
                    setUser(initialFormState);
                }
            }>
                <div class="name">

                    <input type="text" onChange={handleInputChange} name="name" value={user.name} placeholder="Enter The Name" />
                </div>
                <div class="username">

                    <input type="text" onChange={handleInputChange} name="username" value={user.username} placeholder="Enter The UserName
        "/>
                </div>
                <button>Add new user</button>
            </form>
        </div>
    )
}

export default AddUserForm;