/**
 *
 * App
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectApp } from './selectors';
import { appSaga } from './saga';

import { HomePage } from '../HomePage/Loadable';
import { CustomPage } from '../CustomPage';
import { NotFoundPage } from '../../components/NotFoundPage/Loadable';

interface Props {}

export function AppPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: appSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const app = useSelector(selectApp);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Switch>
        <Route exact path="/" component={CustomPage} />
        <Route path="/home" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
