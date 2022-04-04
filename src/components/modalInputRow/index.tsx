import React, { Fragment, ReactElement, useContext, useEffect, useState } from "react";

import { GlobalContext } from "globalContext";
import { LayoutInputRow } from "interfaces";

const ModalInputRow: React.FC<{ styleProps: LayoutInputRow }> = ({styleProps, ...props}): ReactElement => {
  const {modalContent, handleStylePropertyChange} = useContext(GlobalContext);

  const [defaultStyles] = useState(styleProps);
  const [styleProperty, setStyleProp] = useState<string>("");
  const [styleValue, setStyleValue] = useState<string | number>("");
  const [inputChanged, setInputChanged] = useState(false);

  useEffect(() => {
    setStyleProp(styleProps.property);
    setStyleValue(styleProps.value);
  }, [styleProps]);

  const getElementIndex = (): number => {
    return modalContent.styles.findIndex((s: any) => s.property === styleProps.property && s.value === styleProps.value);
  };

  const objectToSubmit = (): {property: string, value: string | number} => {
    return {property: styleProperty, value: styleValue};
  };

  const saveStyleToGlobalState = (): void => {
    handleStylePropertyChange(modalContent, getElementIndex(), false, objectToSubmit());
    setInputChanged(false);
  };

  const inputHaveChanged = (property: string, newValue: string) : void => {
    setInputChanged(true);
    if (property === "property") {
      setStyleProp(newValue);
    }
    if (property === "value") {
      setStyleValue(newValue);
    }
  };

  const cancelInputChange = (): void => {
    setStyleProp(defaultStyles.property);
    setStyleValue(defaultStyles.value);
    setInputChanged(false);
  };

  const removeStyle = (): void => {
    return handleStylePropertyChange(modalContent, getElementIndex(), true, objectToSubmit());
  };

  return (
    <Fragment>
      <input type="text" value={styleProperty} onChange={(e) => inputHaveChanged("property", e.target.value)}/>
      <input type="text" value={styleValue} onChange={(e) => inputHaveChanged("value", e.target.value)}/>
      <button className={`button success ${!inputChanged && "disabled"}`} onClick={saveStyleToGlobalState}
              disabled={!inputChanged}>Save
      </button>
      <button className={`button ${!inputChanged && "disabled"}`} onClick={cancelInputChange}
              disabled={!inputChanged}>Cancel
      </button>
      <button className={`button danger ${inputChanged && "disabled"}`} onClick={removeStyle}
              disabled={inputChanged}>Delete
      </button>
    </Fragment>

  );
};

export default ModalInputRow;
