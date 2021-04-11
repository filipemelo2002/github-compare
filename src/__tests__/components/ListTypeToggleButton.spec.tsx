import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListTypeToggleButton from '../../components/ListTypeToggleButton';

describe('List Type Toggle Button', () => {
  it('should test if Button fires event', function () {
    const { getByTestId } = render(<ListTypeToggleButton />);
    fireEvent.click(getByTestId('btn-grid'));
    expect(getByTestId('btn-row')).not.toBeNull();
  });
});
