import React, { useState } from 'react';

import { Button } from './styles';
import { FiTrash2, FiAlertTriangle } from 'react-icons/fi';
import ClayModal, { useModal } from '@clayui/modal';
import ClayButton from '@clayui/button';

const DeleteModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { observer, onClose } = useModal({
    onClose: () => setVisible(false),
  });

  return (
    <>
      {visible && (
        <ClayModal observer={observer} size="sm" status="warning" center>
          <ClayModal.Header className="warning">
            <FiAlertTriangle size={25} /> Delete Repository
          </ClayModal.Header>
          <ClayModal.Body>
            <p>
              Are you sure you want to delete <strong>liferay/senna.js</strong>{' '}
              repository?
            </p>
          </ClayModal.Body>
          <ClayModal.Footer
            last={
              <ClayButton.Group spaced>
                <ClayButton displayType="secondary" onClick={onClose}>
                  Cancel
                </ClayButton>
                <ClayButton
                  className="btn btn-warning"
                  onClick={() => {
                    console.log('DELETED BUTTON CLICKED');
                    onClose();
                  }}
                >
                  Delete
                </ClayButton>
              </ClayButton.Group>
            }
          />
        </ClayModal>
      )}
      <Button type="button" onClick={() => setVisible(true)}>
        <FiTrash2 size={20} color="#6B6C7E" />
      </Button>
    </>
  );
};

export default DeleteModal;
