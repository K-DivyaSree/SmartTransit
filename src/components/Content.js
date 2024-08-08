import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 20px;
  flex: 1;
  background-color: #f9f9f9;
`;

const Content = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Content;
