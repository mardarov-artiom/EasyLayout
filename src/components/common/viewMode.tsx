import React, { useContext } from 'react';
import { GlobalContext } from 'globalContext';
import {
  ViewModeHeader,
  ViewModeToggle,
  ViewModeToggleLabel,
  ViewModeToggleWrapper,
  ViewModeWrapper,
} from './styles/viewMode';

const ViewMode: React.FC = () => {
  const {editMode, handleEditModeChange } = useContext(GlobalContext);
  return (
    <ViewModeWrapper>
      <ViewModeHeader>View mode:</ViewModeHeader>
      <ViewModeToggleWrapper>
        <ViewModeToggleLabel previewMode={!editMode}>Preview</ViewModeToggleLabel>
        <ViewModeToggle onClick={handleEditModeChange} previewMode={editMode}></ViewModeToggle>
        <ViewModeToggleLabel previewMode={editMode}>Edit</ViewModeToggleLabel>
      </ViewModeToggleWrapper>
    </ViewModeWrapper>
  );
};

export default ViewMode;