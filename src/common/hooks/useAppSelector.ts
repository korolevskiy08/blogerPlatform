import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppRootStateType } from '../../app/AppRoutes/store';

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
