import styled from 'styled-components';

export const Container = styled.div`
  width: 296px;
  background: #fff;
  margin-top: 10px;
  box-shadow: -4px 0px 2px rgba(0, 0, 0, 0.02);
  padding: 20px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 10px;
    strong {
      color: #222222;
      font-size: 15px;
      line-height: 14px;
    }

    p {
      color: #79accd;
      font-size: 15px;
      line-height: 16px;
      font-weight: bold;
    }
  }
`;

export const Actions = styled.div`
  margin-top: 20px;

  button {
    width: 123px;
    height: 37px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    box-shadow: 0px 1px 0px #e5e5e5;
    border-radius: 4px;
  }

  button:last-child {
    margin-left: 10px;
  }
`;

export const Historic = styled.div`
  margin-top: 20px;

  p {
    font-size: 12px;
    line-height: 22px;
    font-weight: bold;
    color: #79accd;
    margin-bottom: 10px;
  }

  ul {
    img {
      width: 16px;
      height: 16px;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      span {
        font-size: 15px;
        line-height: 18px;
        color: #222222;
        margin-left: 8px;
      }
    }
  }
`;

export const Note = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 12px;
    line-height: 22px;
    color: #79accd;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    color: #222222;
  }
`;

export const Contact = styled.div`
  margin-top: 30px;
  ul {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      img {
        width: 24px;
        height: 24px;
      }

      div {
        margin-left: 16px;

        p {
          font-size: 12px;
          line-height: 18px;
          font-weight: bold;
          color: #8fbad6;
        }

        span {
          font-size: 14px;
          line-height: 18px;
          color: #222222;
        }
      }
    }
  }
`;

export const Address = styled.div`
  margin-top: 30px;
  p {
    font-size: 12px;
    font-weight: bold;
    line-height: 22px;
    color: #8fbad6;
  }

  span {
    font-size: 13px;
    line-height: 22px;
  }
`;
