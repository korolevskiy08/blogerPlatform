import React, { FC, useEffect } from 'react';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';

import { getDevices } from './devices-actions';
import { ThisDevices } from './ThisDevisev/ThisDevices';

export const Devices: FC = () => {
  const devices = useAppSelector(state => state.devices.devices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDevices());
  }, []);

  return (
    <div>
      <ul>
        {devices.map(d => {
          return (
            <li key={d.deviceId}>
              <ThisDevices
                ip={d.ip}
                title={d.title}
                deviceId={d.deviceId}
                lastActiveDate={d.lastActiveDate}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
