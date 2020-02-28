import React, { useState, useEffect } from 'react';

import {
  Container,
  Sidebar,
  Main,
  Header,
  Chat,
  SendMessage,
  Badge,
  Recive,
  Send,
  MessageSend,
  MessageRecive,
  Message,
} from './styles';

import calendario from '../../assets/images/calendario.svg';
import whats from '../../assets/images/whitewhats.svg';
import mail from '../../assets/images/redmail.svg';
import skype from '../../assets/images/blueskype.svg';
import tel from '../../assets/images/tel.svg';
import message from '../../assets/images/message.svg';
import act from '../../assets/images/act.svg';
import check from '../../assets/images/check.svg';
import search from '../../assets/images/search2.svg';

import api from '../../services/api';

export default function MainChat() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    async function loadChats() {
      const response = await api.get('chat');

      setChats(response.data);
    }

    loadChats();
  }, []);

  return (
    <Container>
      <Sidebar>
        <button type="button">
          <img src={calendario} alt="calendario" />
        </button>

        <button className="active" type="button">
          <img src={whats} alt="whats" />
          <div>
            <span>2</span>
          </div>
        </button>

        <button type="button">
          <img src={mail} alt="email" />
          <div>
            <span>1</span>
          </div>
        </button>
        <button type="button">
          <img src={skype} alt="skype" />
        </button>
        <button type="button">
          <img src={tel} alt="tel" />
        </button>
        <button type="button">
          <img src={message} alt="message" />
        </button>
      </Sidebar>
      <Main>
        <Header>
          <form>
            <input />
            <button type="button">
              <img src={search} alt="" />
            </button>
          </form>

          <div>
            <button type="button">TRANSFERIR</button>
            <button className="blue" type="button">
              FINALIZAR ATENDIMENTO
            </button>
          </div>
        </Header>
        <Chat>
          <Badge>
            <span>
              Atendimento finalizado em <p> 07/10/2019</p>
            </span>
          </Badge>
          <Message>
            {chats.map(chat => (
              <>
                {chat.sended === false ? (
                  <Recive key={chat.name}>
                    <div className="recive">
                      <img src={chat.image} alt="avatar" />
                      <p>{chat.name}</p>
                      <span> - {chat.date} </span>
                      <img className="check" src={check} alt="" />
                    </div>
                    <MessageRecive>
                      <div className="message">
                        <p>{chat.body}</p>
                      </div>
                    </MessageRecive>
                  </Recive>
                ) : (
                  <Send>
                    <div className="send">
                      <img className="check" src={check} alt="" />
                      <p>{chat.name}</p>
                      <span> - {chat.date} </span>

                      <img src={chat.image} alt="avatar" />
                    </div>
                    <MessageSend>
                      <div className="message">
                        <p>{chat.body}</p>
                      </div>
                    </MessageSend>
                  </Send>
                )}
              </>
            ))}
          </Message>
        </Chat>
        <SendMessage>
          <input type="text" placeholder="Digite sua mensagem..." />
          <button type="button">
            <img src={act} alt="" />
          </button>
        </SendMessage>
      </Main>
    </Container>
  );
}
