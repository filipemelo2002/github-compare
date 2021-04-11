import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../components/Card';

describe('Card Component', () => {
  it('should test if Card renders', function () {
    const { debug } = render(<Card />);
    debug();
  });
});
