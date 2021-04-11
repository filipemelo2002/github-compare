import React, { useState } from 'react';

import { Button } from '../commons/GlobalComponents';
// import { Container } from './styles';
import { BsFillGridFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
const ListType: React.FC = () => {
  const [listType, setListType] = useState<'grid' | 'row'>('grid');
  return (
    <>
      {listType === 'grid' ? (
        <Button type="button" onClick={() => setListType('row')}>
          <BsFillGridFill size={20} />
        </Button>
      ) : (
        <Button type="button" onClick={() => setListType('grid')}>
          <FaThList size={20} />
        </Button>
      )}
    </>
  );
};

export default ListType;
