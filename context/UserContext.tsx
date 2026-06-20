import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Gender, AgeGroup, PoolType } from '../utils/dataManager';

export interface SwimParams {
  gender: Gender;
  poolType: PoolType;
  ageGroup: AgeGroup;
  event: string;
  userTime: string;
}

interface UserContextType {
  params: SwimParams | null;
  setParams: (params: SwimParams | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [params, setParams] = useState<SwimParams | null>(null);

  const value = React.useMemo(() => ({ params, setParams }), [params]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}


