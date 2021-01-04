import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer logo" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/42156470?s=460&u=00c46c0af7fa68c113730d973fdcdd3220d0db9e&v=4"
            alt="Foto do dono do repositório"
          />
          <div>
            <strong>guilherme-farias/github-explorer</strong>
            <p>Aplicação em ReactJS utilizando a API do Github</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/42156470?s=460&u=00c46c0af7fa68c113730d973fdcdd3220d0db9e&v=4"
            alt="Foto do dono do repositório"
          />
          <div>
            <strong>guilherme-farias/github-explorer</strong>
            <p>Aplicação em ReactJS utilizando a API do Github</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/42156470?s=460&u=00c46c0af7fa68c113730d973fdcdd3220d0db9e&v=4"
            alt="Foto do dono do repositório"
          />
          <div>
            <strong>guilherme-farias/github-explorer</strong>
            <p>Aplicação em ReactJS utilizando a API do Github</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
