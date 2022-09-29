import { UserAddOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUsers } from '../services/Toolkit/user.slice';


const AddUserWidget = () => {
    const dispatch = useDispatch();


    const [open, setOpen] = useState(false);
    const [newUser, setnewUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setnewUser({
            name: '',
            email: '',
            phone: '',
            address: ''
        })
    };

    const handleChangeInput = e => {
        const { name, value } = e.target
        setnewUser({ ...newUser, [name]: value })
        console.log(newUser)
    }

    const handleSubmit = () => {
        dispatch(addUsers(newUser));
    }

    return (
        <div>

            <button className='rounded-full py-2 px-4 bg-primary text-white flex items-center gap-1' onClick={showDrawer}>Add new user <UserAddOutlined /></button>

            <>
                <Drawer title={`Add User Details`} placement="right" onClose={onClose} open={open}>
                    <form className='mt-10' onSubmit={handleSubmit}>
                        <div className='my-5'>
                            <label>Name:</label>
                            <input name='name' value={newUser.name} onChange={handleChangeInput} className='w-full p-2 outline-none border border-gray-300 rounded-md' type='text' placeholder='Enter user User' />
                        </div>
                        <div className=' my-5'>
                            <label>Email:</label>
                            <input name='email' value={newUser.email} onChange={handleChangeInput} className='w-full p-2 outline-none border border-gray-300 rounded-md' type='text' placeholder='Enter user Email' />
                        </div>
                        <div className=' my-5'>
                            <label>Phone:</label>
                            <input name='phone' value={newUser.phone} onChange={handleChangeInput} className='w-full p-2 outline-none border border-gray-300 rounded-md' type='text' placeholder='Enter user Number' />
                        </div>
                        <div className=' my-5'>
                            <label>Address:</label>
                            <input name='address' value={newUser.address} onChange={handleChangeInput} className='w-full p-2 outline-none border border-gray-300 rounded-md' type='text' placeholder='Enter user Address' />
                        </div>
                        <div className='flex justify-center'>
                            <button disabled={!newUser.name || !newUser.email || !newUser.phone || !newUser.address}
                                 className={`border border-secondary rounded-full py-2 px-4 hover:bg-primary hover:border-white hover:text-white flex items-center gap-1 
                            ${!newUser.name || !newUser.email || !newUser.phone || !newUser.address ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} >Submit <UserAddOutlined /></button>
                        </div>
                    </form>
                </Drawer>
            </>
        </div>
    )
}

export default AddUserWidget