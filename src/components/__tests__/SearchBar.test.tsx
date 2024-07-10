/**
 * @jest-environment jsdom
*/

import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';
import { test, expect, vi } from 'vitest';

test('SearchBar renders correctly and handles input', () => {
  const setSearchMock = vi.fn();
  render(<SearchBar setSearch={setSearchMock} search="test" />);

  const inputElement = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
  expect(inputElement).toBeDefined();
  expect(inputElement.value).toBe('test');

  fireEvent.change(inputElement, { target: { value: 'new value' } });
  expect(setSearchMock).toHaveBeenCalledWith('new value');
});