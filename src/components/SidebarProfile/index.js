import React from 'react';

import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import {
  Container,
  Profile,
  Actions,
  Historic,
  Note,
  Contact,
  Address,
} from './styles';

import mail from '../../assets/images/mail.svg';
import whats from '../../assets/images/whats.svg';
import skype from '../../assets/images/skype.svg';

export default function SidebarProfile() {
  return (
    <Container>
      <Profile>
        <img
          src="https://avatars0.githubusercontent.com/u/48219669?s=460&v=4"
          alt="avatar"
        />
        <div>
          <strong>Rodrigo Sakamoto</strong>
          <p>VulcanNet</p>
        </div>
      </Profile>
      <Actions>
        <button type="button">
          <FaPencilAlt size={15} color="#00a7cf" />
        </button>
        <button type="button">
          <FaTrashAlt size={15} color="#e33e1a" />
        </button>
      </Actions>
      <Historic>
        <p>ÚLTIMAS CONVERSAS</p>
        <ul>
          <li>
            <img src={whats} alt="Whatsapp" />
            <span>25/09/2019 (10 dias atrás)</span>
          </li>
          <li>
            <img src={whats} alt="Whatsapp" />
            <span>15/09/2019 (20 dias atrás)</span>
          </li>
          <li>
            <img src={skype} alt="Whatsapp" />
            <span>15/06/2019 (100 dias atrás)</span>
          </li>
        </ul>
      </Historic>
      <Note>
        <h2>OBSERVAÇÕES:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          cupiditate architecto quia ad id illo ipsum repudiandae voluptates
        </p>
      </Note>
      <Contact>
        <ul>
          <li>
            <img src={whats} alt="Whatsapp" />
            <div>
              <p>WHATSAPP</p>
              <span>55 (19) 99127-0611</span>
            </div>
          </li>
          <li>
            <img src={mail} alt="Whatsapp" />
            <div>
              <p>EMAIL</p>
              <span>daniel@wezen.com.br</span>
            </div>
          </li>
          <li>
            <img src={skype} alt="Whatsapp" />
            <div>
              <p>SKYPE</p>
              <span>@daniel_furtado</span>
            </div>
          </li>
        </ul>
      </Contact>
      <Address>
        <p>ENDEREÇO</p>
        <span>
          Cap. Augusto Salles Pupo, 49 <br />
          Campinas (SP) - CEP:
          <br /> 13070-114
        </span>
      </Address>
    </Container>
  );
}
