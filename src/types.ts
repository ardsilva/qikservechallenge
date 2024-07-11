import { Dispatch, ReactNode } from 'react';


export const AvailabilityType = {
  "availableNow": "AVAILABLE_NOW",
}

type AvailabilityType = (typeof AvailabilityType)[keyof typeof AvailabilityType];

export interface Commons {
  id: number;
  name: string;
  description: string | null;
  visible: number;
  images: Image[];
  available: boolean;
  position: number;
}

export interface Image {
  id: number;
  image: string;
}

export interface ModifiersItems extends Items {
  maxChoices: number;
}

export interface Modifiers {
  id: string;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifiersItems[];
}

export interface Items extends Commons {
  alcoholic: number;
  price: number;
  availabilityType: AvailabilityType;
  sku: string;
  modifiers?: Modifiers[];
  quantity: number;
  category: string | null;
}

export interface Sections extends Commons {
  items: Items[];
}

export interface WebSettings {
  id?: number;
  venueId?: number;
  bannerImage?: string;
  backgroundColour?: string;
  primaryColour?: string;
  primaryColourHover?: string;
  navBackgroundColour?: string;
}

export interface Venue {
  id?: number;
  name?: string;
  internalName?: string;
  description?: string | null;
  liveFlag?: number;
  demoFlag?: number;
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  county?: string;
  postcode?: string;
  country?: string;
  timezoneOffset?: string;
  locale?: string;
  timeZone?: string;
  webSettings?: WebSettings;
  ccy?: string;
  ccySymbol?: string;
  currency?: string;
}

export interface Cart extends Items {
  quantity: number,
}

// Definindo o tipo para o children
export type AppProviderProps = {
  children: ReactNode;
};

// Defina os tipos de estado e ação
export type State = {
  menuItems: Sections[];
  venue: Venue | undefined;
};

export type Action = 
  | { type: 'SET_MENU_ITEMS'; payload: Sections[] }
  // | { type: 'ADD_TO_BASKET'; payload: Items }
  | { type: 'SET_VENUE'; payload: Venue };

// Defina o tipo do contexto
export type AppContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};