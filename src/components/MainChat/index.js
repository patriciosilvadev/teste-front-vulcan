import React from 'react';

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
} from './styles';

import calendario from '../../assets/images/calendario.svg';
import whats from '../../assets/images/whitewhats.svg';
import mail from '../../assets/images/redmail.svg';
import skype from '../../assets/images/blueskype.svg';
import tel from '../../assets/images/tel.svg';
import message from '../../assets/images/message.svg';
import act from '../../assets/images/act.svg';
import check from '../../assets/images/check.svg';

export default function MainChat() {
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
          <input type="text" />
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
          <Recive>
            <div className="recive">
              <img
                src="https://avatars0.githubusercontent.com/u/48219669?s=460&v=4"
                alt="avatar"
              />
              <p>Rodrigo Sakamoto </p>
              <span> - 07/10/2019 14h10 </span>
              <img className="check" src={check} alt="" />
            </div>
            <MessageRecive>
              <div className="message">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem itaque, sint ducimus dignissimos ipsam iure
                  quis, possimus architecto repellat optio atque porro qui
                  facilis est cupiditate, voluptatem magnam! Optio, enim.
                </p>
              </div>
            </MessageRecive>
          </Recive>
          <Send>
            <div className="send">
              <img className="check" src={check} alt="" />
              <p>Rodrigo Sakamoto </p>
              <span> - 07/10/2019 14h10 </span>

              <img
                src="https://avatars0.githubusercontent.com/u/48219669?s=460&v=4"
                alt="avatar"
              />
            </div>
            <MessageSend>
              <div className="message">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem itaque, sint ducimus dignissimos ipsam iure
                  quis, possimus architecto repellat optio atque porro qui
                  facilis est cupiditate, voluptatem magnam! Optio, enim.
                </p>
              </div>
            </MessageSend>
          </Send>

          <Recive>
            <div className="recive">
              <img
                src="https://avatars0.githubusercontent.com/u/48219669?s=460&v=4"
                alt="avatar"
              />
              <p>Rodrigo Sakamoto </p>
              <span> - 07/10/2019 14h10 </span>
              <img className="check" src={check} alt="" />
            </div>
            <MessageRecive>
              <div className="message">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem itaque, sint ducimus dignissimos ipsam iure
                  quis, possimus architecto repellat optio atque porro qui
                  facilis est cupiditate, voluptatem magnam! Optio, enim.
                </p>
              </div>
            </MessageRecive>
          </Recive>
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
