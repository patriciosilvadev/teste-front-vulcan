import React, { useState, useEffect } from 'react';

import { FaPlus } from 'react-icons/fa';

import {
  Container,
  Sidebar,
  Actions,
  Profile,
  UsersList,
  Logo,
} from './styles';

import down from '../../assets/images/down.svg';
import logo from '../../assets/images/pecaZap-branco.svg';

import api from '../../services/api';

export default function SidebarUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <Container>
      <Sidebar>
        <Profile className="profile">
          {users.map(user => (
            <>
              {user.login === true ? (
                <>
                  <img key={user.id} src={user.image} alt="Avatar" />
                  <div>
                    <strong>{user.name}</strong>
                    <p>{user.company}</p>
                  </div>
                  <button type="button">
                    <img src={down} alt="" />
                  </button>
                </>
              ) : null}
            </>
          ))}
        </Profile>
        <input type="text" />
        <Actions>
          <div>
            <p>EM ANDAMENTO</p>
            <button type="button">
              <img src={down} alt="" />
            </button>
          </div>
          <button type="button">
            <FaPlus color="#fff" size={20} />
          </button>
        </Actions>
        <UsersList>
          {users
            .filter(user => user.login === false)
            .map(user => (
              <ul key={user.id}>
                {user.active === true ? (
                  <li className="active">
                    <img src={user.image} alt="" />
                    <div>
                      <strong>{user.name}</strong>
                      <p>{user.company}</p>
                    </div>
                    {user.notification > 0 ? (
                      <span>{user.notification}</span>
                    ) : null}
                  </li>
                ) : (
                  <li>
                    <img src={user.image} alt="" />
                    <div>
                      <strong>{user.name}</strong>
                      <p>{user.company}</p>
                    </div>
                    {user.notification > 0 ? (
                      <span>{user.notification}</span>
                    ) : null}
                  </li>
                )}
              </ul>
            ))}
        </UsersList>
      </Sidebar>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
    </Container>
  );
}
