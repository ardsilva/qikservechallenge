
/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryList from '@/components/CategoryList';
import { test, expect, vi } from 'vitest';

const mockState = {
  menuItems: [{ id: 1, name: 'Burgers', images: [{ image: 'burger.png' }] }],
};

const mockWebSettings = {
  primaryColour: 'blue',
};

test('CategoryList renders categories and handles click', () => {
  const handleAvatarClickMock = vi.fn();
  render(
    <CategoryList
      state={mockState}
      activeCategory={null}
      handleAvatarClick={handleAvatarClickMock}
      webSettings={mockWebSettings}
    />
  );

  const categoryElement = screen.getByText(/burgers/i);
  expect(categoryElement).toBeDefined();

  fireEvent.click(categoryElement);
  expect(handleAvatarClickMock).toHaveBeenCalledWith('burgers');
});
