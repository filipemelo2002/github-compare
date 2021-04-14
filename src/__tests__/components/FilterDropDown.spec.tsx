import React from 'react';
import { render } from '@testing-library/react';
import FilterDropDown from '../../components/FilterDropDown';

describe('Filter Dropdown Component', () => {
  it('should test if FilterDropDown renders', function () {
    const { debug } = render(<FilterDropDown />);
    debug();
  });
});
