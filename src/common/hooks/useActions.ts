import { useMemo } from 'react';

import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

import { useAppDispatch } from './useAppDispatch';

export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T): any {
  const dispatch = useAppDispatch();

  const boundActions = useMemo(() => {
    // @ts-ignore
    return bindActionCreators(actions, dispatch);
  }, []);

  return boundActions;
}
