import React, { useState } from 'react';

import { Button, Container, Content } from './styles';
import ClayForm, { ClayInput } from '@clayui/form';
import { FiPlus } from 'react-icons/fi';

const NewRepositoryForm: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <Container>
      <Button type="button" onClick={() => setOpenDropdown(!openDropdown)}>
        <FiPlus size={20} />
      </Button>
      {openDropdown && (
        <Content onSubmit={() => console.log('SUBMITED FORM')}>
          <ClayForm.Group className="input-group">
            <h4>New repository</h4>
            <label htmlFor="repository">
              Repository <span>*</span>
            </label>
            <ClayInput component="input" id="repository" type="text" />
          </ClayForm.Group>
          <hr />
          <footer>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setOpenDropdown(false)}
            >
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </footer>
        </Content>
      )}
    </Container>
  );
};

export default NewRepositoryForm;
