import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectUsers } from '../features/dashboard/usersSlice';
import { User } from './User';


export function UsersList() {
  const { usersList } = useAppSelector(selectUsers);


  return (
    <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Usernme</th>
          <th>City</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      {usersList.map(user => <User key={user.id} user={user} />)}
    </table>
  );
}
