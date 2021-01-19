/**
 *
 * CustomPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Layout } from 'antd';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectCustomPage } from './selectors';
import { customPageSaga } from './saga';

import { HeaderCom } from '../../components/Header';
import { LeftSilder } from '../../components/LeftSilder';
import { RightSider } from '../../components/RightSider';

const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 24px;
`;

const Div = styled.div`
  background: #fff;
  height: 100%;
  overflow-x: auto;
`;

interface Props {}
export function CustomPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: customPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const customPage = useSelector(selectCustomPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>自定义页面</title>
      </Helmet>
      <Layout style={{ height: '100vh' }}>
        <HeaderCom />
        <Layout>
          <LeftSilder />
          <StyledContent>
            <Div>Content</Div>
          </StyledContent>
          <RightSider />
        </Layout>
      </Layout>
    </>
  );
}
