import styled from 'styled-components';

import back from '../../assets/images/Union.svg';
import search from '../../assets/images/search.svg';

export const Container = styled.aside`
  width: 310px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${back}) no-repeat bottom;

  input {
    width: 280px;
    height: 38px;
    color: #fff;
    padding: 0 40px 0 12px;
    background: rgba(255, 255, 255, 0.15) url(${search}) no-repeat 250px center;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin: 0 15px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;

  button {
    width: 38px;
    height: 38px;
    background: none;
    border: none;
    margin-left: 10px;
  }

  div {
    display: flex;
    align-items: center;

    p {
      color: #fff;
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 280px;
  margin: 15px;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  button {
    width: 38px;
    background: none;
    border: none;
    margin-left: 40px;
  }

  div {
    width: 160px;
    height: 34px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    strong {
      font-size: 15px;
      line-height: 16px;
      font-weight: bold;
      color: #fff;
    }

    p {
      color: rgba(255, 255, 255, 0.4);
      font-size: 15px;
      line-height: 16px;
    }
  }
`;

export const ClientsList = styled.ul`
  padding: 15px;

  li {
    display: flex;
    align-items: center;
    width: 310px;
    height: 70px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    div {
      width: 160px;
      height: 34px;
      margin-left: 10px;

      strong {
        font-size: 15px;
        line-height: 16px;
        font-weight: bold;
        color: #fff;
      }

      p {
        color: rgba(255, 255, 255, 0.4);
        font-size: 15px;
        line-height: 16px;
      }
    }

    span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #e33e1a;
      margin-left: 33px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
`;
