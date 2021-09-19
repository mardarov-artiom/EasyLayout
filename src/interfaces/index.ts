export interface LayoutItemsList {
  id: string;
  tagName: string;
  classList: string;
  bgColor: string;
  styles: Object[] | [];
  nestedLevel: number;
  childrens: LayoutItemsList[];
}
