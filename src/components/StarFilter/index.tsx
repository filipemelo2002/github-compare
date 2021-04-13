import React from 'react';

import { Button } from '../commons/GlobalComponents';
import { MdStar, MdStarBorder } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../../redux/action/repository';

const StarFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: State) => state.repository.filter);
  return (
    <Button
      type="button"
      onClick={() => dispatch(Actions.filterByStar(!filter.starred))}
    >
      {filter.starred ? <MdStar size={25} /> : <MdStarBorder size={25} />}
    </Button>
  );
};

export default StarFilter;
