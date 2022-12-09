import React, { useState } from 'react'
import axios from "axios"

const objUser = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: ""

}
function UsersCreate(props) {

    const [check, setCheck] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")


    const submit = () => {
        if (check) {
            if (objUser.firstName !== "" && objUser.lastName !== "" && objUser.phoneNumber !== "" && objUser.email !== "") {
                uploadData()
                props.userCreatedHandler("User created correctly")
                props.goHome()
            } else {
                setErrorMsg(<div className='text-danger'>Error, data is incomplete</div>)

            }

        } else {
            setErrorMsg(<div className='text-danger'>Error, you have to check confirm button</div>)
        }
    }

    const firstNameHandler = (e) => {
        objUser.firstName = e.target.value
    }
    const lastNameHandler = (e) => {
        objUser.lastName = e.target.value
    }

    const phoneHandler = (e) => {
        objUser.phoneNumber = e.target.value
    }

    const emailHandler = (e) => {
        objUser.email = e.target.value
    }

    const uploadData = () => {
        axios
            .post("http://localhost:8080/users/create", objUser)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }



    return (
        <div className='w-50 d-flex flex-column'>
            {errorMsg}
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">First Name</label>
                <input type="" onChange={firstNameHandler} className="form-control" id="inputFirstName" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInput">Last name</label>
                <input type="" onChange={lastNameHandler} className="form-control" id="inputLastName" placeholder="Enter your last name" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInput">Phone Number</label>
                <input type="" onChange={phoneHandler} className="form-control" id="inputPhoneNum" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" onChange={emailHandler} className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-check">
                <input type="checkbox" onChange={() => { if (check) { setCheck(false) } else { setCheck(true) } }} className="form-check-input" id="checkBox1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Confirm</label>
            </div>
            <button type="submit" onClick={props.goHome} className="btn btn-primary ">Go Back</button>
            <button type="submit" onClick={submit} className="btn btn-primary mt-2">Submit</button>

        </div>
    )
}

export default UsersCreate