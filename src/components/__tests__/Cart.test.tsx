/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '@/components/Cart';
import { test, expect, vi } from 'vitest';
import {AvailabilityType, Items } from '@/types';

const mockCart: Items = 
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
    images: [],
    position: 0,
    sku: '12345',
    visible: 1
  }

const mockState = {
  venue: { currency: '$' },
};

test('Cart renders items and handles add/remove', () => {
  // Criando mocks usando mockFn() do Vitest
  const addToCartMock = vi.fn();
  const removeFromCartMock = vi.fn();

  render(
    <Cart
      cart={[mockCart]}
      state={mockState}
      addToCart={addToCartMock}
      removeFromCart={removeFromCartMock}
      subtotal={10}
      total={10}
    />
  );

  // Verificar se o item está presente no DOM
  const itemElement = screen.findByText(/cheeseburger/i);
  expect(itemElement).toBeDefined();

  // Simular clique no botão de adicionar
  const addButton = screen.getByText('+');
  fireEvent.click(addButton);
  expect(addToCartMock).toHaveBeenCalledWith(expect.objectContaining({ id: 1, name: 'Cheeseburger' }));

  // Simular clique no botão de remover
  const removeButton = screen.getByText('-');
  fireEvent.click(removeButton);
  expect(removeFromCartMock).toHaveBeenCalledWith(expect.objectContaining({ id: 1, name: 'Cheeseburger' }));
});