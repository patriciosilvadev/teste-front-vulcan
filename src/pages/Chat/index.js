import React from 'react';

import { Container } from './styles';

import SidebarClients from '../../components/SidebarClients';
import SidebarProfile from '../../components/SidebarProfile';
import MainChat from '../../components/MainChat';

export default function Chat() {
  return (
    <Container>
      <SidebarClients />
      <MainChat />
      <SidebarProfile />
    </Container>
  );
}
