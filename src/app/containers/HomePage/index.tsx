import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';

import { StyleWrapperDiv, StyleTitleDiv } from 'app/components/NotFoundPage/P';
import { Button } from 'antd';

import { selectMessageCount } from '../App/selectors';
import { CHANGE_COUNT } from '../App/saga';

export function HomePage() {
  const dispatch = useDispatch();

  const messageCount = useSelector(selectMessageCount);

  const handleChangeCount = () => {
    const increment = createAction<number | undefined>(CHANGE_COUNT);
    dispatch(increment(messageCount + 1));
  };

  return (
    <StyleWrapperDiv>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <StyleTitleDiv>
        <span>Wellcome</span>
      </StyleTitleDiv>
      <Button
        type="primary"
        size="large"
        style={{ width: '368px', marginTop: 10 }}
        onClick={handleChangeCount}
      >
        点击次数：{messageCount}
      </Button>
    </StyleWrapperDiv>
  );
}
