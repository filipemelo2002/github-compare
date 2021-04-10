import styled from 'styled-components';

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  h4 {
    margin-left: 4px;
    font-weight: 600;
  }
  section {
    display: flex;
    align-items: center;
  }
  #btn-section {
    margin-left: auto;
    display: flex;
    align-items: center;
    button {
      width: 32px;
      height: 32px;
      background: transparent;
      border: 0px;
      border-radius: 4px;
      transition: all 200ms ease;
      :hover {
        background: rgba(39, 40, 51, 0.04);
      }
    }
  }
`;

export const CardBody = styled.div`
  padding: 12px 16px;
  display: flex;
  ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 778px;
    li {
      margin-left: 30px;
      p {
        font-weight: 500;
        color: var(--secondary);
        span {
          font-weight: 400;
        }
      }
    }
  }
`;
