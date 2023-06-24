import React from 'react';

import { LayoutItemsList } from './default';

export interface ModalState {
  modalState: boolean;
}

export interface PageOutputHTMLInterface {
  items: LayoutItemsList[];
}

export interface ItemListContainerInterface {
  nested: number;
}

export interface OverflowContainerInterface {
  padding?: number;
  background?: string;
  children: React.ReactNode;
}

export interface withBgProps {
  bg: string;
}

export interface PageOutputInternalWrapperInterface {
  name?: string;
  text: string;
  clickAction: () => void;
  children: React.ReactNode;
}

export interface ScrollableWrapperInterface extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string;
  display?: string;
  offset?: number;
}

export interface MainViewItemMainContainerInterface {
  nodes: LayoutItemsList[];
  settings: {
    [key: string]: {
      label: string;
      value: string | number
    }
  }
}

export interface ViewModeToggleInterface {
  previewMode: boolean;
}