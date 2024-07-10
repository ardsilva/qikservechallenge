
/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from '@/components/Dialog';
import { test, expect, vi } from 'vitest';
import { AvailabilityType, Items } from '@/types';

const mockModifiers: Items = 
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
    visible: 1,
    modifiers: [],
  
};

const mockWebSettings = {
  primaryColour: 'blue',
};

test('Dialog renders correctly and handles actions', () => {
  const setShowDialogMock = vi.fn();
  const setSelectedValueMock = vi.fn();
  const setMeatQuantityMock = vi.fn();
  const handleAddToCartMock = vi.fn();

  render(
    <Dialog
      showDialog={true}
      setShowDialog={setShowDialogMock}
      modifiers={mockModifiers}
      selectedValue="1"
      setSelectedValue={setSelectedValueMock}
      meatQuantity={1}
      setMeatQuantity={setMeatQuantityMock}
      handleAddToCart={handleAddToCartMock}
      webSettings={mockWebSettings}
    />
  );

  const itemElement = screen.getByText(/Cheeseburger/i);
  expect(itemElement).toBeDefined();

  const addButton = screen.getByText('Add to Cart');
  fireEvent.click(addButton);
  expect(handleAddToCartMock).toHaveBeenCalled();
});
