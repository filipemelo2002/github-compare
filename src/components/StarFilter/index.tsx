import React, { useState } from 'react';

import { Button } from '../commons/GlobalComponents';
import { MdStar, MdStarBorder } from 'react-icons/md';

const StarFilter: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <Button type="button" onClick={() => setActive(!active)}>
      {active ? <MdStarBorder size={25} /> : <MdStar size={25} />}
    </Button>
  );
};

export default StarFilter;
