import { defaultStyleObjectInterface, LayoutItemsList, uniqueClassListInterface } from "interfaces";

export const defaultLayoutObject: LayoutItemsList = {
  id: "",
  tagName: "div",
  classList: "",
  nestedLevel: 0,
  bgColor: "",
  childrens: [],
};

export const defaultStyleObject: defaultStyleObjectInterface = {
  property: "",
  value: ""
}

export const defaultModalContent: uniqueClassListInterface = {
  className: "",
  styles: [defaultStyleObject]
};

