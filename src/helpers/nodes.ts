import { LayoutItemsList } from '../interfaces/default';

export const hasNodes = (item: LayoutItemsList) => {
  return item.nodes && item.nodes.length > 0;
};