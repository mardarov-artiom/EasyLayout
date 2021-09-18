export interface LayoutItemsList {
  id: string;
  tagName: string;
  classList: string;
  styles: Object[] | [];
  nestedLevel: number;
  childrens: LayoutItemsList[];
}
