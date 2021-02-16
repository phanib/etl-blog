import styled from "styled-components";

export const Button = styled.button`
  -webkit-appearance: none;
  background: linear-gradient(
    180deg,
    rgb(136, 220, 109) 0%,
    rgb(92, 168, 65) 100%
  );
  color: #fff;
  margin: 10px;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;

  :hover {
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  }
`;
