import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  border: 0;
  border-radius: 4px;
  color: #fff;
`;

export const Content = styled.form`
  h4 {
    font-size: 18px;
  }
  @keyframes FadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  border-radius: 4px;
  background: #fff;
  width: 448px;
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 9999;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.12);
  animation-name: FadeIn;
  animation-duration: 300ms;

  .input-group {
    padding: 9px 24px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      color: var(--dark);
      font-weight: 400;
      span {
        color: var(--warning);
      }
    }
  }
  footer {
    padding: 9px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button + button {
      margin-left: 16px;
    }
  }
`;
