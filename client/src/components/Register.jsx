import "./register.css"
import react, { useState } from "react";
const Registration = () => {
    const [user, setUser] = useState({
        name: "", email: "", phone: "",  password: "", cpassword: "", pincode: "", state: "", district: "", address: ""
    })
    let name
    let value
    const handleInputs = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({...user, [name]: value })
    }
    const PostData=async(e)=>{
        try{
        e.preventDefault()
        console.log(user)
        const {name,email,phone,password,cpassword,pincode,state,district,address} =user
        const response = await fetch("/registers",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },           
            body:JSON.stringify({
                name,email,phone,password,cpassword,pincode,state,district,address
            })
        })
        if(response.status===200){
            console.log("sucessfully register")
        }
        }
        catch(e){
            alert("failed",e)
        }
    }
    return (<>
        <div className="register">
            <div className="register-1">
                <div className="register-1-1">
                    <h1>Laundry</h1>
                    <h1>Service</h1>
                    <h3>Doorstep Wash &</h3>
                    <h3>Dryclean Service</h3>
                </div>
                <div className="register-1-2">
                    <p>Already Have Acount</p>
                    <button>Sign In</button>
                </div>
            </div>
            <div className="register-2">
                <h1>REGISTER</h1>
                <div className="form-group">
                    <form method="POST">
                        <div className="form-group-1">
                            <div className="form-gropu-1-a">
                                <h1>Name</h1>
                                <input onChange={handleInputs} type='text' name="name" value={user.name} />
                            </div>
                            <div className="form-gropu-1-b">
                                <h1>Email</h1>
                                <input onChange={handleInputs} type='text' name="email" value={user.email} />
                            </div>
                        </div>
                        <div className="form-group-2">
                            <div className="form-gropu-2-a">
                                <h1>Phone</h1>
                                <input onChange={handleInputs} type="number" name="phone" value={user.phone} />
                            </div>
                            <div className="form-gropu-2-b">
                                <h1>State</h1>
                                <input onChange={handleInputs} type='text' name="state" value={user.state} />
                            </div>
                        </div>
                        <div className="form-group-3">
                            <div className="form-gropu-3-a">
                                <h1>District</h1>
                                <input onChange={handleInputs} type="text" name="district" value={user.district} />
                            </div>
                            <div className="form-gropu-3-b">
                                <h1>Adress</h1>
                                <input onChange={handleInputs} type='text' name="address" value={user.address} />
                            </div>
                        </div>
                        <div className="form-group-3">
                            <div className="form-gropu-3-a">
                                <h1>Pincode</h1>
                                <input onChange={handleInputs} type="number" value={user.pincode} name="pincode" />
                            </div>
                            <div className="form-gropu-3-b">
                                <h1>Password</h1>
                                <input onChange={handleInputs} type="text" name="password" value={user.password} />
                            </div>
                        </div>
                        <div className="form-group-3">
                            <div className="form-gropu-3-b">
                                <h1> Confirm password</h1>
                                <input onChange={handleInputs} type="text" name="cpassword" value={user.cpassword} />
                            </div>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" value="" /><u> I agree to Terms & Condition, receiving marketing and promotional materials</u></label>
                        </div>
                        <div className="click">
                              <input type="submit" name="signup" onClick={PostData} id="signup" className="form-submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}
export default Registration