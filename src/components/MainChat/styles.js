import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 10px;
  border-radius: 20px 0px 0px 0px;
`;

export const Sidebar = styled.div`
  width: 64px;
  background: #f8fafc;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.04);
  border-radius: 20px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  &:first-child {
    padding: 0;
  }

  button {
    width: 64px;
    height: 64px;
    background: none;
    border: none;

    img {
      margin-top: 15px;
    }

    &.active {
      background: #25d366;
    }

    div {
      display: flex;
      justify-content: flex-end;
      margin-right: 3px;
      span {
        display: flex;
        justify-content: center;
        width: 16px;
        height: 16px;
        font-size: 10px;
        line-height: 10px;
        font-weight: bold;
        text-align: center;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.6);
        color: #fff;
        background: #e33e1a;
      }
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 13px 20px;
  background: #fff;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.02);

  form {
    display: flex;

    justify-content: space-between;
    max-width: 280px;
    height: 38px;
    color: #222;
    padding: 0 10px 0 12px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #e0e0e0;
    border-radius: 4px;

    input {
      border: 0;
      max-width: 280px;
      color: #999;
    }

    button {
      border: 0;
      background: #fff;

      @media (max-width: 1080px) {
        font-size: 50%;
      }
    }

    @media (max-width: 890px) {
      display: none;
    }
  }

  div {
    display: flex;

    button {
      height: 38px;
      background: none;
      border: none;
      background: #fff;
      border: 1px solid #e5e5e5;
      box-shadow: 0px 1px 0px #e5e5e5;
      border-radius: 4px;
      color: #00a7cf;
      font-size: 15px;
      font-weight: bold;
      line-height: 18px;
      padding: 10px;

      @media (max-width: 1280px) {
        padding: 0px;
      }

      @media (max-width: 890px) {
        padding: 10px;
      }
      &.blue {
        background: #00a7cf;
        border: none;
        box-shadow: 0px 1px 0px #0794b6;
        border-radius: 4px;
        color: #fff;
        margin-left: 10px;
      }
    }
  }
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f5f8fa;
`;

export const Badge = styled.div`
  margin: 20px auto;
  display: flex;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 324px;
    height: 44px;
    background: #dbf3f8;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    padding: 10px 24px;
    color: #636466;

    p {
      color: #222;
      margin-left: 3px;
    }
  }
`;

export const Recive = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;

  div.recive {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;

      &.check {
        width: 16px;
        height: 16px;
        margin-left: 10px;
      }
    }

    p {
      margin-left: 10px;
      font-size: 15px;
      line-height: 16px;
      font-weight: bold;
      color: #636466;

      @media (max-width: 1080px) {
        font-size: 95%;
      }
    }

    span {
      margin-left: 5px;
      font-size: 15px;
      line-height: 16px;
      color: #636466;

      @media (max-width: 1080px) {
        font-size: 95%;
      }
    }
  }

  div.message {
    max-width: 600px;
    margin-top: 28px;
    padding: 20px;
    background: #fff;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 10px;
  }
`;

export const Send = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;

  div.send {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;

      &.check {
        width: 16px;
        height: 16px;
        margin-left: 10px;
      }
    }

    p {
      margin-left: 10px;
      font-size: 15px;
      line-height: 16px;
      font-weight: bold;
      color: #636466;

      @media (max-width: 1080px) {
        font-size: 95%;
      }
    }

    span {
      margin-right: 10px;
      font-size: 15px;
      line-height: 16px;
      color: #636466;

      @media (max-width: 1080px) {
        font-size: 95%;
      }
    }
  }
`;

export const MessageSend = styled.div`
  display: flex;
  justify-content: flex-end;

  div {
    display: flex;
    max-width: 600px;
    margin-top: 28px;
    padding: 20px;
    background: #d1fadf;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px 0px 10px 10px;
  }
`;

export const MessageRecive = styled.div`
  display: flex;
  justify-content: flex-start;

  div {
    display: flex;
    max-width: 600px;
    margin-top: 28px;
    padding: 20px;
    background: #fff;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px 0px 10px 10px;
  }
`;

export const SendMessage = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;

  input {
    display: flex;
    flex: 1;

    width: 100%;
    align-items: center;
    height: 64px;
    background: #fff;
    box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);
    border: 0;
    padding: 24px 30px;
    color: #999;
    font-size: 15px;
    line-height: 16px;
  }

  button {
    background: #fff;
    border: none;
    margin: 20px 13px;
  }
`;

export const Message = styled.div``;
