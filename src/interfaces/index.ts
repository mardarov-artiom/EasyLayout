export interface LayoutItemsList {
  id: string;
  tagName: string;
  classList: string;
  bgColor: string;
  styles: {
    property: string,
    value: string | number
  }[];
  nestedLevel: number;
  childrens: LayoutItemsList[];
}

export interface LayoutInputRow {
    property: string;
    value: string | number;
}

export interface defaultObjInterface {
  id: string;
  open: string;
  middle: LayoutItemsList[] | defaultObjInterface[],
  close: string;
  nestedLevel: number
}
