import React, { useState, useEffect } from 'react';

import { FaPlus } from 'react-icons/fa';

import {
  Container,
  Sidebar,
  Actions,
  Profile,
  ClientsList,
  Logo,
} from './styles';

import down from '../../assets/images/down.svg';
import logo from '../../assets/images/pecaZap-branco.svg';

import api from '../../services/api';

export default function SidebarClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('clients');

      setClients(response.data);
    }

    loadClients();
  }, []);

  return (
    <Container>
      <Sidebar>
        <Profile className="profile">
          <img
            src="https://avatars0.githubusercontent.com/u/48219669?s=460&v=4"
            alt="Avatar"
          />
          <div>
            <strong>Rodrigo Sakamoto</strong>
            <p>VulcanNet</p>
          </div>
          <button type="button">
            <img src={down} alt="" />
          </button>
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
        <ClientsList>
          {clients.map(client => (
            <li key={client.id}>
              <img src={client.image} alt="" />
              <div>
                <strong>{client.name}</strong>
                <p>{client.company}</p>
              </div>
              {client.notification > 0 ? (
                <span>{client.notification}</span>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ClientsList>
      </Sidebar>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
    </Container>
  );
}
