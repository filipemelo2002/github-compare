import React, { FormEvent, useState } from 'react';

import { Button, Container, Content } from './styles';
import ClayForm, { ClayInput } from '@clayui/form';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import * as Actions from '../../redux/action/repository';
import { AiFillInfoCircle } from 'react-icons/ai';

const NewRepositoryForm: React.FC = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');
  const [openDropdown, setOpenDropdown] = useState(false);
  const { loading, error } = useSelector((state: State) => state.repository);

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (term.length === 0) {
      return false;
    }
    if (term.split('/').length > 1) {
      dispatch(Actions.getRepository(term));
      setTerm('');
      return true;
    }
    dispatch(Actions.getAllUserRepositories(term));
    setTerm('');
    return true;
  };
  return (
    <Container>
      <Button type="button" onClick={() => setOpenDropdown(!openDropdown)}>
        <FiPlus size={20} />
      </Button>
      {openDropdown && (
        <Content onSubmit={onSubmitForm}>
          <ClayForm.Group className="input-group">
            <h4>New repository</h4>
            <label htmlFor="repository">
              Repository <span>*</span>
            </label>
            <ClayInput
              component="input"
              id="repository"
              type="text"
              value={term}
              onChange={e => setTerm(e.target.value)}
            />
            {error && (
              <p id="errorLabel">
                <AiFillInfoCircle size={20} />
                <span>This is an API-feedback-error</span>
              </p>
            )}
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
              {loading ? <ClayLoadingIndicator color="#fff" small /> : 'Add'}
            </button>
          </footer>
        </Content>
      )}
    </Container>
  );
};

export default NewRepositoryForm;
