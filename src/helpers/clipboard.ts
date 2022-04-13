import { defaultObjInterface, LayoutItemsList } from "interfaces";

export const openTag = (item: LayoutItemsList): string => `<${item.tagName}${item.classList.length > 0 ? ` class="${item.classList}"` : ""}>`;
export const closeTag = (item: LayoutItemsList): string => `</${item.tagName}>`;
export const cssOpenProp = (item: LayoutItemsList): string => `.${item} {`

export const clipboardHTMLItem = (item: LayoutItemsList, childrens: LayoutItemsList[] = []): defaultObjInterface => {
  const defaultObj: defaultObjInterface = {
    id: item.id,
    open: openTag(item),
    middle: childrens,
    close: closeTag(item),
    nestedLevel: item.nestedLevel,
  };
  if (childrens.length > 0) {
    const result: defaultObjInterface[] = [];
    childrens.map((item: any) => {
      return result.push(clipboardHTMLItem(item, item.childrens));
    });
    return {...defaultObj, middle: [...result]};
  }
  return defaultObj;
};

export const clipboardCSSItem = (item: any): any => {
  const defaultObj: any = {
    open: cssOpenProp(item.className),
    props: [],
    close: '}'
  };
  item.styles.map((styles: any) => {
    const propsAreNotEmpty = styles.property !== '' || styles.value !== '';
    propsAreNotEmpty && defaultObj.props.push(`  ${styles.property}: ${styles.value};\n`);
    return true;
  })
  return `${defaultObj.open}\n${defaultObj.props.join('')}${defaultObj.close}\n\n`;
};

export const reformatString = ((item: defaultObjInterface, middle: defaultObjInterface[] | LayoutItemsList[] = []): string => {
  const defaultString: string = `${item.open}${item.close}\n`;
  const spaceBeforeTag: (nestedLevel: number) => string = (nestedLevel: number) => Array(nestedLevel * 2).fill('\xa0').join('');

  if (middle.length > 0) {
    let nestedLevel = 0;
    const res: string[] = [];
    item.middle.map((el: any) => {
      nestedLevel = el.nestedLevel;
      return res.push(reformatString(el, el.middle));
    });

    const resultString = res.map((el) => {
      if (nestedLevel > 0) {
        return spaceBeforeTag(nestedLevel) + el;
      }
      return el;
    });

    if (item.nestedLevel > 0) {
      return `${item.open}\n${resultString.join("")}${spaceBeforeTag(item.nestedLevel)}${item.close}\n`;
    }
    return `${item.open}\n${resultString.join("")}${item.close}\n`;
  }

  return defaultString;
});

export const joinReformattedArray = (array: string[]) => {
  return array.join('');
};
