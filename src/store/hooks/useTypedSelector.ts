import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../reducrers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
