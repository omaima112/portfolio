import React, { createContext, useContext } from 'react';

export type ContentData = any;

export const ContentContext = createContext<ContentData | null>(null);

export function useContent() {
  return useContext(ContentContext);
}
