/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  z-index: 1001;
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
`;

interface Props {}

export const HeaderCom = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <StyledHeader>Header</StyledHeader>;
});
