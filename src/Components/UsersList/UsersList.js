import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const UsersList = (props) => {
    const [post,] = useState(props.users);
    const [postPerPage] = useState(10);
    const [number, setNumber] = useState(1); // No of pages

    const lastPost = number * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPost = post.slice(firstPost, lastPost);
    const PageCount = Math.ceil(post.length / postPerPage);
    const ChangePage = ({ selected }) => {
        setNumber(selected + 1);
    };

    return (

        <div>
            <table className='table table-striped table-hover '>
                <thead className='thead-dark'>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            first_name
                        </th>
                        <th>
                            last_name
                        </th>
                        <th>
                            phone_number
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentPost.map((user) =>
                        <tr key={user.id}>
                            <td >{user.id}</td>
                            <td >{user.firstName}</td>
                            <td >{user.lastName}</td>
                            <td >{user.phoneNumber}</td>
                            <td >{user.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='d-flex flex-column align-items-center'>
                <button onClick={props.goHome} className='btn btn-primary d-flex '>Go Back</button>
                <ReactPaginate
                    previousLabel={"Previus"}
                    nextLabel={"Next"}
                    pageCount={PageCount}
                    onPageChange={ChangePage}
                    containerClassName={"paginationBttns"}
                    activeClassName={"paginationActive"}
                    marginPagesDisplayed={4}
                    pageRangeDisplayed={4}
                />
            </div>
        </div>
    )

}

export default UsersList