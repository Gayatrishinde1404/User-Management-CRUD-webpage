import React, { useState, useEffect } from 'react';

function UserTable() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({
    id: null,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      city: '',
    },
    company: {
      name: '',
    },
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUserList(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setUser({
        ...user,
        address: {
          ...user.address,
          [field]: value,
        },
      });
    } else if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setUser({
        ...user,
        company: {
          ...user.company,
          [field]: value,
        },
      });
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const handleAddOrUpdateUser = () => {
    if (isEditing) {
      const updatedList = userList.map((item) =>
        item.id === user.id ? user : item
      );
      setUserList(updatedList);
      setIsEditing(false);
    } else {
      setUserList([...userList, { ...user, id: userList.length + 1 }]);
    }
    setUser({
      id: null,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        city: '',
      },
      company: {
        name: '',
      },
    });
  };

  const handleDelete = (id) => {
    const filteredUsers = userList.filter((user) => user.id !== id);
    setUserList(filteredUsers);
  };

  const handleEdit = (user) => {
    setUser(user);
    setIsEditing(true);
  };

  return (
    <div className='container mx-auto p-6'>
      <div className='bg-white p-6 rounded-lg shadow-md mb-8 max-w-md mx-auto border border-gray-300'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
          {isEditing ? 'Edit User' : 'Add New User'}
        </h2>
        <div className='space-y-3'>
          <input
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            type='text'
            name='name'
            value={user.name}
            placeholder='Name'
            onChange={handleChange}
          />
          <input
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            type='text'
            name='username'
            value={user.username}
            placeholder='Username'
            onChange={handleChange}
          />
          <input
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            type='email'
            name='email'
            value={user.email}
            placeholder='Email'
            onChange={handleChange}
          />
          <input
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            type='text'
            name='address.street'
            value={user.address.street}
            placeholder='Street Address'
            onChange={handleChange}
          />
          <input
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            type='text'
            name='address.city'
            value={user.address.city}
            placeholder='City'
            onChange={handleChange}
          />
          <input
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            type='text'
            name='company.name'
            value={user.company.name}
            placeholder='Company Name'
            onChange={handleChange}
          />
          <button
            className='w-full bg-cyan-900 text-white p-2 rounded-md hover:bg-cyan-800 transition-all duration-200'
            onClick={handleAddOrUpdateUser}
          >
            {isEditing ? 'Update User' : 'Add User'}
          </button>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full bg-gray-100 rounded-lg shadow-lg border border-gray-300'>
          <thead className='bg-cyan-900 text-white rounded-t-lg'>
            <tr>
              <th className='py-3 px-4 text-left rounded-tl-lg'>Name</th>
              <th className='py-3 px-4 text-left'>Username</th>
              <th className='py-3 px-4 text-left'>Email</th>
              <th className='py-3 px-4 text-left'>Address</th>
              <th className='py-3 px-4 text-left'>Company</th>
              <th className='py-3 px-4 text-left rounded-tr-lg'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id} className='border-b hover:bg-gray-50'>
                <td className='py-2 px-4'>{user.name}</td>
                <td className='py-2 px-4'>{user.username}</td>
                <td className='py-2 px-4'>{user.email}</td>
                <td className='py-2 px-4'>
                  {user.address?.street}, {user.address?.city}
                </td>
                <td className='py-2 px-4'>{user.company?.name}</td>
                <td className='py-2 px-4 flex gap-2'>
                  <button
                    className='bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-all duration-200'
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all duration-200'
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
