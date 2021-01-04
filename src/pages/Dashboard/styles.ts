import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  color: #3a3a4a;
  font-size: 48px;
  font-weight: bold;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    border: 0;
    border-radius: 5px 0px 0px 5px;
    flex: 1;
    height: 70px;
    padding: 0 24px;
    color: #3a3a3a;
    border: 2px solid #ffffff;
    ${props =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04d361;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    color: #ffffff;
    font-weight: bold;
    height: 70px;
    width: 210px;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 700px;
  margin-top: 80px;

  a {
    background: #ffffff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: block;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translate(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 5px;
`;
