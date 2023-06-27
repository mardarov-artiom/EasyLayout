import { defaultStyleObjectInterface, LayoutItemsList, uniqueClassListInterface } from "interfaces/default";

export const defaultLayoutObject: LayoutItemsList = {
  id: "",
  tagName: "div",
  classList: "",
  nestedLevel: 0,
  bgColor: "",
  textContent: "",
  nodes: [],
};

export const defaultStyleObject: defaultStyleObjectInterface = {
  property: "",
  value: ""
}

export const defaultModalContent: uniqueClassListInterface = {
  className: "",
  styles: [defaultStyleObject]
};

