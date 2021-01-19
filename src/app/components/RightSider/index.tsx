/**
 *
 * RightSider
 *
 */
import React, { memo } from 'react';
// import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Layout } from 'antd';
const { Sider } = Layout;

interface Props {}

export const RightSider = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Sider width={300} theme="light">
      Right属性栏
    </Sider>
  );
});
