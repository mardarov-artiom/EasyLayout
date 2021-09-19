export interface LayoutItemsList {
  id: string;
  tagName: string;
  classList: string;
  bgColor: string;
  styles: {
    [key: string]: string | number;
  }[];
  nestedLevel: number;
  childrens: LayoutItemsList[];
}
