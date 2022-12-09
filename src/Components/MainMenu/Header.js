import React from 'react'

function Header(props) {

    const selectOption = (option) => {
        props.userCreatedHandler("")
        props.menuHandler(option)
    }


    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100 flex-column'>
            <div className='text-danger'><h3>{props.userCraeted}</h3></div>
            <div>
                <button className='btn btn-primary btn-lg ms-2 p-5' id="createUser" onClick={() => selectOption("create")}>Create User</button>
                <button className='btn btn-primary btn-lg ms-2 p-5' id="showUsersList" onClick={() => selectOption("show")}>Show Users List</button>
            </div>
        </div>
    )
}

export default Header