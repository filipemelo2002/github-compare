import React from 'react';
import { render } from '@testing-library/react';
import DeleteModal from '../../components/DeleteModal';

describe('Delete Confirmation Modal', () => {
  it('should test if DeleteModal renders', function () {
    const { debug } = render(<DeleteModal />);
    debug();
  });
});
