import React from 'react';

interface idInterface {
  id: string;
}

export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface LayoutItemsList extends idInterface {
  tagName: string;
  classList: string;
  bgColor: string;
  nestedLevel: number;
  textContent: string;
  nodes: LayoutItemsList[];
}

export interface defaultObjInterface extends idInterface {
  open: string;
  middle: any,
  close: string;
  nestedLevel: number
}

export interface defaultCSSObjInterface extends idInterface {
  open: string;
  middle: LayoutItemsList[] | defaultCSSObjInterface[],
  nestedLevel: number;
}

export interface defaultStyleObjectInterface {
  property: string,
  value: string
}

export interface uniqueClassListInterface {
  className: string;
  styles: defaultStyleObjectInterface[];
}

export interface globalStylesInterface {
  classesToAdd: any;
}

export interface componentWithItemsInterface {
  items: LayoutItemsList[];
}