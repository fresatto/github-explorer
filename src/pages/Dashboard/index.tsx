import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/img/logo.svg';
import { Title, Form, Repositories, RepositoryLink } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <RepositoryLink to="/meupai">
          <img
            src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="User"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </div>

          <FiChevronRight size={20} />
        </RepositoryLink>
        <RepositoryLink to="/meupai">
          <img
            src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="User"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </div>

          <FiChevronRight size={20} />
        </RepositoryLink>
      </Repositories>
    </>
  );
};

export default Dashboard;
