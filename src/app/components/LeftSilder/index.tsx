/**
 *
 * LeftSilder
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Layout, Tooltip } from 'antd';

import { ACTION_LIST } from './config';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  padding-top: 12px;
`;

const StyledItem = styled.div`
  padding: 12px;
  cursor: pointer;
`;

const StyleIcon = styled.img`
  width: 24px;
  height: 24px;
`;

interface Props {}
export const LeftSilder = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <StyledSider width={48} theme="light">
      {ACTION_LIST.map(i => (
        <Tooltip placement="right" title={i.name} key={i.id}>
          <StyledItem>
            <StyleIcon src={i.icon} alt={i.name} />
          </StyledItem>
        </Tooltip>
      ))}
    </StyledSider>
  );
});
