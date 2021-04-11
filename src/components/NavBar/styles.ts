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
