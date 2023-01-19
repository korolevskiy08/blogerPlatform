import { createSlice } from '@reduxjs/toolkit';

import Chrome from '../../../common/icons/chrome.svg';
import Edge from '../../../common/icons/edge.svg';
import Firefox from '../../../common/icons/firefox.svg';
import Iphone from '../../../common/icons/Iphone.svg';
import Safari from '../../../common/icons/safari.svg';
import Yandex from '../../../common/icons/yandex.svg';
import { Status } from '../../Blog/blog-slice';

import { getDevices } from './devices-actions';
import { DevicesItemType, DeviceType } from './devices-types';

const slice = createSlice({
  name: 'devices',
  initialState: {
    status: 'idle' as Status,
    devices: [] as DeviceType[],
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDevices.fulfilled, (state, action) => {
      const iconsDevices = { Chrome, Firefox, Iphone, Edge, Safari, Yandex };

      return {
        ...state,
        status: 'succeeded',
        error: null,

        devices: action.payload!.data.map((d: DevicesItemType) => {
          let browser: string = '';

          if (/Edg/i.test(d.title)) {
            browser = 'Edge';
          } else if (/Firefox/.test(d.title)) {
            browser = 'Firefox';
          } else if (/Chrome/i.test(d.title)) {
            browser = 'Chrome';
          } else if (/Iphone/i.test(d.title)) {
            browser = 'Iphone';
          } else if (/YaBrowser/i.test(d.title)) {
            browser = 'Yandex Browser';
          } else if (/^((?!chrome|android).)*Safari/i.test(d.title)) {
            browser = 'Safari';
          }

          return {
            ...d,
            title: browser,
            icon: iconsDevices[browser as keyof typeof iconsDevices] || null,
          };
        }),
      };
    });
    builder.addMatcher(
      action => action.type.endsWith('pending'),
      state => {
        state.status = 'loading';
        state.error = null;
      },
    );
    builder.addMatcher(
      action => action.type.endsWith('fulfilled'),
      state => {
        state.status = 'succeeded';
        state.error = null;
      },
    );
    builder.addMatcher(
      action => action.type.endsWith('rejected'),
      (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      },
    );
  },
});

export const devicesSlice = slice.reducer;
