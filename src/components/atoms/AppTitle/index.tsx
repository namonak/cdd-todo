import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  color: #ffffff;
  font-size: 20px;
  text-detection: none;
  cursor: pointer;
`;

export const AppTitle = () => {
  return <Container>할 일 목록 앱</Container>;
};
