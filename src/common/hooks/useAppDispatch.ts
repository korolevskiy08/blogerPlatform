import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../app/AppRoutes/store';

export const useAppDispatch = (): Function => useDispatch<AppDispatch>();
