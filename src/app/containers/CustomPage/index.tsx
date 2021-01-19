/**
 *
 * CustomPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectCustomPage } from './selectors';
import { customPageSaga } from './saga';

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
      <Div></Div>
    </>
  );
}

const Div = styled.div``;
