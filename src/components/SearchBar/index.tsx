import React from 'react';

import { Container, Button } from './style';
import { ClayInput } from '@clayui/form';

import ClayManagementToolbar from '@clayui/management-toolbar';
import { FiSearch } from 'react-icons/fi';
const SearchBar: React.FC = () => {
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
                />
                <ClayInput.GroupInsetItem after tag="span">
                  <Button type="button" onClick={() => console.log('SEARCHED')}>
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
