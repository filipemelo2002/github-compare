import React, { useState, useCallback } from 'react';

import { Container, Button } from './style';
import { ClayInput } from '@clayui/form';

import ClayManagementToolbar from '@clayui/management-toolbar';
import { FiSearch } from 'react-icons/fi';
import debounce from 'lodash.debounce';
import * as Actions from '../../redux/action/repository';
import { useDispatch } from 'react-redux';
const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  const debounceSearch = useCallback(
    debounce(value => {
      dispatch(Actions.search(value));
    }, 200),
    [],
  );

  function onChangeTerm(value: string) {
    setTerm(value);
    debounceSearch(value);
  }
  return (
    <Container>
      <ClayManagementToolbar>
        <ClayManagementToolbar.ItemList>
          <ClayManagementToolbar.Search>
            <ClayInput.Group>
              <ClayInput.GroupItem>
                <ClayInput
                  aria-label="Search"
                  className="form-control input-group-inset input-group-inset-after"
                  type="text"
                  placeholder="Search"
                  onChange={e => onChangeTerm(e.target.value)}
                  value={term}
                />
                <ClayInput.GroupInsetItem after tag="span">
                  <Button type="button" onClick={() => debounceSearch(term)}>
                    <FiSearch color="#6B6C7E" />
                  </Button>
                </ClayInput.GroupInsetItem>
              </ClayInput.GroupItem>
            </ClayInput.Group>
          </ClayManagementToolbar.Search>
        </ClayManagementToolbar.ItemList>
      </ClayManagementToolbar>
    </Container>
  );
};

export default SearchBar;
