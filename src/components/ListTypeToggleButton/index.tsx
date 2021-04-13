import React from 'react';

import { Button } from '../commons/GlobalComponents';
// import { Container } from './styles';
import { BsFillGridFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../redux/action/repository';

const ListType: React.FC = () => {
  const dispatch = useDispatch();
  const listType = useSelector((state: State) => state.repository.listType);

  return (
    <>
      {listType === 'grid' ? (
        <Button
          type="button"
          onClick={() => dispatch(Actions.listType('row'))}
          data-testid="btn-grid"
        >
          <BsFillGridFill size={20} />
        </Button>
      ) : (
        <Button
          type="button"
          onClick={() => dispatch(Actions.listType('grid'))}
          data-testid="btn-row"
        >
          <FaThList size={20} />
        </Button>
      )}
    </>
  );
};

export default ListType;
