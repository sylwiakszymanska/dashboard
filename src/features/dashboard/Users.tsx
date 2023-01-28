import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
 setUsers,
 selectUsers,
 getUsers
} from './usersSlice';
import styles from './Counter.module.css';
import { UsersList } from '../../components/UsersList';

export function Users() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());

  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <UsersList />
      
    </div>
  );
}
