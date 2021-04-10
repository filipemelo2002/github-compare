import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #fff;
  height: 64px;
  padding: 0px 40px 0px 40px;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    label {
      margin-left: 28px;
    }
  }

  #brand {
    color: var(--secondary);
    font-weight: 500;
    
  }

  #menu-button {
    width: 20%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    li {
      display: flex;
      align-items: center;
    }
  }
`;

export const Button = styled.button`
  height: 32px;
  width: 32px;
  display: flex;
  border: 1px solid #fff;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: 200ms all ease;
  border-radius: 4px;
  color: var(--secondary);
  :hover {
    background: #f1f2f5;
    border: 1px solid #cdced9;
  }
`;
