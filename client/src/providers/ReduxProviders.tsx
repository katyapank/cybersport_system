'use client';

import { Provider } from 'react-redux';
import React, {ReactNode} from 'react';
import store from '../redux/store';

export default function ReduxProviders({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
