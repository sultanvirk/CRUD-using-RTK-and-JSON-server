import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './userReducer';

function Home() {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch()
  const handleDelete=(id)=>{
    dispatch(deleteUser({id : id}))
  }

  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl font-bold my-12'>CRUD Application with JSON server using RTK</h2>
      <Link to='/create' className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-xl text-white font-semibold'>Create User +</Link>
      <table className='my-4 w-[100%]'>
        <thead>
          <tr>
            <th>ID</th>
            <th className='px-12'>Name</th>
            <th className='px-12'>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='text-center '>
          {users.map((user, index) => (  // Added closing parenthesis here
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className='flex justify-center gap-2'>
                <Link to={`/edit/${user.id}`} className='bg-blue-500 hover:bg-blue-700 px-4 py-2 my-3 rounded-xl text-white font-semibold'>Edit</Link>
                <button onClick={()=>handleDelete(user.id)} className='bg-red-500 hover:bg-red-700 px-4 py-2 my-3 rounded-xl text-white font-semibold'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
