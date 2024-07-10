/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import ItemList from '@/components/ItemList';
import { test, expect, vi } from 'vitest';
import { AvailabilityType } from '@/types';

const mockState = {
  menuItems: [
    {
      id: 1,
      name: 'Burgers',
      items: [
        {
          id: 1,
          name: 'Cheeseburger',
          price: 5,
          quantity: 2,
          alcoholic: 0,
          availabilityType: AvailabilityType.availableNow,
          available: true,
          category: 'burguers',
          description: '...',
          images: [
            {
              id: 1,
              image: 'Cheeseburger.png'
            }
          ],
          position: 0,
          sku: '12345',
          visible: 1
        }
      ],
      description: '...',
      visible: 0,
      images: [],
      available: true,
      position: 1,
    },
  ],
  venue: {
    "id": 7602,
    "name": "BURGERS RESTAURANT",
    "internalName": "BURGERS RESTAURANT",
    "description": "",
    "liveFlag": 1,
    "demoFlag": 1,
    "address1": "Rua XX-X, 1-11",
    "address2": "XXX",
    "address3": "",
    "city": "Bauru",
    "county": "BR",
    "postcode": "17012-360",
    "country": "BR",
    "timezoneOffset": "-03:00",
    "locale": "pt-BR",
    "timeZone": "America/Sao_Paulo",
    "webSettings": {
      "id": 5854,
      "venueId": 7602,
      "bannerImage": "https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png",
      "backgroundColour": "#ffffff",
      "primaryColour": "#4f372f",
      "primaryColourHover": "#4f372f",
      "navBackgroundColour": "#4f372f"
    },
    "ccy": "BRL",
    "ccySymbol": "R$",
    "currency": "R$"
  },
};

const mockWebSettings = {
  primaryColour: 'blue',
};

test('ItemList renders items and handles item click', () => {
  const handleItemClickMock = vi.fn();
  const getFilteredMock = vi.fn().mockReturnValue(mockState.menuItems[0].items);
  const handleAvatarClickMock =  vi.fn();

  render(
    <ItemList
      state={mockState}
      activeCategory="burgers"
      handleItemClick={handleItemClickMock}
      search=""
      getFiltered={getFilteredMock}
      cart={[]}
      webSettings={mockWebSettings}
      handleAvatarClick={handleAvatarClickMock}
    />
  );

  const itemElement = screen.getByText(/cheeseburger/i);
  expect(itemElement).toBeDefined();

  fireEvent.click(itemElement);
  expect(handleItemClickMock).toHaveBeenCalledWith(expect.objectContaining({ id: 1, name: 'Cheeseburger' }));
});
