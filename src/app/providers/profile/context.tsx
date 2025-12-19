import { createContext } from 'react';
import type { ProfileContextType } from './model/types';

export const ProfileContext = createContext<ProfileContextType | null>(null);
