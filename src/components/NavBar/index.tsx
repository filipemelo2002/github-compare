import React from 'react';

import { Container } from './styles';
import { Button } from '../commons/GlobalComponents';

import { FaGithub, FaAdjust } from 'react-icons/fa';

import SearchBar from '../SearchBar';
import FilterDropDown from '../FilterDropDown';
import StarFilter from '../StarFilter';
import NewRepositoryForm from '../NewRepositoryForm';
import ListTypeToggleButton from '../ListTypeToggleButton';

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
          <ListTypeToggleButton />
        </li>
        <li>
          <NewRepositoryForm />
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
