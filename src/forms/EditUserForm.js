import { useEffect, useState } from "react";
import "./Edit.css"

const EditUserForm = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    return (
        <div class=' addForm'>
        <form class="form" onSubmit={
            event => {
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.updateUser(user.id,user);
            }
        }>
            <div class="name">
            <input type="text" onChange={handleInputChange} name="name" value={user.name} />
            </div>
          <div className="username">
            <input type="text" onChange={handleInputChange} name="username" value={user.username} />
            </div>
            <button>Update user</button>
            <button className="button muted-button" onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
          </form>
          </div>
    )
}

export default EditUserForm;