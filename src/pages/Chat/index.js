import React from 'react';

import { Container } from './styles';

import SidebarUsers from '../../components/SidebarUsers';
import SidebarProfile from '../../components/SidebarProfile';
import MainChat from '../../components/MainChat';

export default function Chat() {
  return (
    <Container>
      <SidebarUsers />
      <MainChat />
      <SidebarProfile />
    </Container>
  );
}
