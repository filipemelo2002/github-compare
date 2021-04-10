import React, { useState } from 'react';

import ClayDropDown from '@clayui/drop-down';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Container } from './styles';
const FilterDropDown: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <Container>
      <ClayDropDown
        className="dropDown"
        active={openDropdown}
        onActiveChange={setOpenDropdown}
        trigger={
          <button className="dropdown-trigger">
            {`Filter and order `}
            {!openDropdown ? (
              <IoMdArrowDropdown size={25} className="icon" />
            ) : (
              <IoMdArrowDropup size={25} className="icon" />
            )}
          </button>
        }
      >
        <ClayDropDown.ItemList>
          <ClayDropDown.Group header="ORDER BY">
            <ClayDropDown.Item onClick={() => setOpenDropdown(false)}>
              Stars
            </ClayDropDown.Item>
            <ClayDropDown.Item>Forks</ClayDropDown.Item>
            <ClayDropDown.Item>Open Issues</ClayDropDown.Item>
            <ClayDropDown.Item>Age</ClayDropDown.Item>
            <ClayDropDown.Item>Last commit</ClayDropDown.Item>
          </ClayDropDown.Group>
        </ClayDropDown.ItemList>
      </ClayDropDown>
    </Container>
  );
};

export default FilterDropDown;
