import React, { FC, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { IUser, selectUsers } from '../features/dashboard/usersSlice';

interface IProps {
  user: IUser;
}
export const User: FC<IProps> = ({ user }) => {

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.address.city}</td>
      <td>{user.email}</td>
      <td><button>Edit</button></td>
      <td><button>Delete</button></td>
    </tr>
  );
}
