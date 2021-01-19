/*
 * @Description:
 * @Author: shaojia
 * @Date: 2021-01-19 19:23:44
 * @LastEditTime: 2021-01-19 19:36:25
 * @LastEditors: shaojia
 */
import styled from 'styled-components/macro';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledContent = styled(Content)`
  padding: 24px;
`;

export const Div = styled.div`
  background: #fff;
  height: 100%;
  overflow-x: auto;
`;
