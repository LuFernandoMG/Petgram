import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = (val) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(val))
      setStoredValue(val)
    } catch (e) {
      console.log('error: ', e)
    }
  }

  return [storedValue, setLocalStorage]
}
