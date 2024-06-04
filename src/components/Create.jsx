import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUser } from './userReducer';
import { useNavigate } from 'react-router-dom';

function Create() {
    const negivate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name : formData.name, email : formData.email
         }))
        setFormData({ name: '', email: '' });
        negivate('/')
    };

    return (
        <div className="container mx-auto p-4 my-[200px]">
            <h2 className='text-3xl font-bold my-2 text-center'>Create User</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 mx-auto">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                />
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Create User
                </button>
            </form>
        </div>
    );
}

export default Create;
