import React from 'react';

import { Container, Button } from './styles';

import { FaGithub, FaAdjust } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';

import SearchBar from '../SearchBar';
import FilterDropDown from '../FilterDropDown';
import StarFilter from '../StarFilter';
import NewRepositoryForm from '../NewRepositoryForm';

const NavBar: React.FC = () => {
  return (
    <Container>
      <section>
        <FaGithub size={25} color="#6B6C7E" className="brand-icon" />
        <label id="brand">Github Compare</label>
      </section>
      <FilterDropDown />
      <section>
        <SearchBar />
      </section>
      <ul id="menu-button">
        <li>
          <StarFilter />
        </li>
        <li>
          <Button type="button">
            <FaAdjust size={20} />
          </Button>
        </li>
        <li>
          <Button type="button">
            <BsFillGridFill size={20} />
          </Button>
        </li>
        <li>
          <NewRepositoryForm />
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
