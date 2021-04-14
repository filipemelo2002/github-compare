import React, { useState } from 'react';

import ClayDropDown from '@clayui/drop-down';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Container } from './styles';
import { useDispatch } from 'react-redux';
import * as Actions from '../../redux/action/repository';
const FilterDropDown: React.FC = () => {
  const dispatch = useDispatch();

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOnSelectSortOption = (sort: Sort) => {
    dispatch(Actions.sort(sort));
    setOpenDropdown(false);
  };
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
            <ClayDropDown.Item
              onClick={() => handleOnSelectSortOption('stars')}
            >
              Stars
            </ClayDropDown.Item>
            <ClayDropDown.Item
              onClick={() => handleOnSelectSortOption('forks')}
            >
              Forks
            </ClayDropDown.Item>
            <ClayDropDown.Item
              onClick={() => handleOnSelectSortOption('openIssues')}
            >
              Open Issues
            </ClayDropDown.Item>
            <ClayDropDown.Item onClick={() => handleOnSelectSortOption('age')}>
              Age
            </ClayDropDown.Item>
            <ClayDropDown.Item
              onClick={() => handleOnSelectSortOption('lastCommit')}
            >
              Last commit
            </ClayDropDown.Item>
          </ClayDropDown.Group>
        </ClayDropDown.ItemList>
      </ClayDropDown>
    </Container>
  );
};

export default FilterDropDown;
