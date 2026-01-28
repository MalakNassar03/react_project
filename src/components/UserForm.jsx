import {useState} from 'react';

function UserForm(){
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        subscribe:false
    });
    const handleChange = (e) =>{

        const {name,value,type,checked} = e.target;
        setFormData(prev=>({
            ...prev,//so i dont delete the old data
                [name]:type === 'checkbox'?checked:value // of it was a check nox save the value else save the value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(JSON.stringify(formData,null,2))
    }

    return(
        <div className="container">
        <form onSubmit={handleSubmit}  className="user-form" >
            <div className="user-form-header">user form</div>
            <div className="form-control">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="form-control" >
                <label>email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="form-control">
                <label>subscribe</label>
                <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange}/>
            </div>
            <button type="submit">submit</button>

            <div className="live-preview">
                <h3>Live Preview</h3>
                <div>Name: {formData.name || 'Not assigned'}</div>
                <div>Email: {formData.email || "Not assigned"}</div>
                <div>Subscribe: {formData.subscribe? "yes assigned":"no"}</div>

            </div>
        </form>
        </div>
    )

}
export default UserForm