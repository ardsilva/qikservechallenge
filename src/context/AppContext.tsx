/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer, Dispatch, ReactNode } from 'react';
import { Sections, Venue } from '../types';

// Definindo o tipo para o children
type AppProviderProps = {
  children: ReactNode;
};

// Defina os tipos de estado e ação
type State = {
  menuItems: Sections[];
  venue: Venue | undefined;
};

type Action = 
  | { type: 'SET_MENU_ITEMS'; payload: Sections[] }
  // | { type: 'ADD_TO_BASKET'; payload: Items }
  | { type: 'SET_VENUE'; payload: Venue };

// Defina o tipo do contexto
type AppContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

// Crie o contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Reducer para modificar o estado
const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_MENU_ITEMS':
      return {
        ...state,
        menuItems: action.payload,
      };
    // case 'ADD_TO_BASKET':
    //   // Lógica para adicionar ao carrinho
    //   return state;
    
      case 'SET_VENUE':
      return {
        ...state,
        venue: action.payload,
      }
    default:
      return state;
  }
};

// Provedor do contexto
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    menuItems: [],
    venue: undefined,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
};
