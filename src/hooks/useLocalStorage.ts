import { isClient } from '@/utils/utils';

export const useLocalStorage = <T extends string>(key: T) => {
  if (isClient()) {
    const item = localStorage.getItem(key);
    const setItem = (value: string) => localStorage.setItem(key, value);
    const clearStorage = () => localStorage.clear();
    const removeItem = () => localStorage.removeItem(key);
    return { item, setItem, clearStorage, removeItem };
  }
  return {};
};
