import { LayoutItemsList, uniqueClassListInterface } from "interfaces";
import { defaultStyleObject } from "./globalConstants";

export const classNames = (item: LayoutItemsList, joinBy: string = ""): string | string[] => {
  const result: string[] = [];

  item.classList.trim().split(" ").map((className: string) => {
    return className !== "" && result.push(className);
  });

  return result.join(joinBy);
};

export const classNamesMap = (item: LayoutItemsList, childrens: LayoutItemsList[] = []): string => {
  let result: string = "";
  item.classList.trim().split(" ").map((className: string) => {
    if (className !== "") {
      return result += ` ${className}`;
    }
    return true;
  });

  if (childrens && childrens.length > 0) {
    let nestedResult: any = "";
    childrens.map((item: any) => {
      return nestedResult += ` ${classNamesMap(item, item.childrens)}`;
    });
    return `${result} ${nestedResult}`;
  }
  return result;
};

export const transformResult = (string: string, previousState: any): uniqueClassListInterface[] => {
  const tempResult = new Set<string>();
  string.split(" ").map((className: string) => {
    return className !== "" && tempResult.add(className);
  });
  const result: uniqueClassListInterface[] = [];
  [...tempResult].map((el: string) => {
    const findInd = previousState.findIndex((i: uniqueClassListInterface) => i.className === el);
    return result.push({
      className: el,
      styles: findInd !== -1 ? previousState[findInd].styles : [defaultStyleObject]
    });

  });
  return result;
};
