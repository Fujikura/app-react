import styled from "styled-components";

export const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const DropdownItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;

  > svg {
    margin-right: 10px;
    font-size: 40px;
  }

  > a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: #fff;
  }
`;

export const DropdownSubItem = styled.li`
  width: 100%;
  padding: 8px 30px;
  cursor: pointer;

  > a {
    display: block ;
    width: 100%;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
  }
`;
