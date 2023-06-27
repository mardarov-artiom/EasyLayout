import styled from 'styled-components';
import { ViewModeToggleInterface } from 'interfaces/styledComponents';

export const ViewModeWrapper = styled.div`
  display: flex;
  color: #fff;
  padding: 15px;
`;

export const ViewModeHeader = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

export const ViewModeToggleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
`;

export const ViewModeToggleLabel = styled.span<ViewModeToggleInterface>`
  color: ${props => props.previewMode ? '#304ffe' : '#fff'};
  transition: 0.2s linear;
`;

export const ViewModeToggle = styled.div<ViewModeToggleInterface>`
  margin: 0 15px;
  position: relative;
  cursor: pointer;
  
  &::before {
    display: block;
    content: '';
    width: 44px;
    height: 22px;
    background-color: #ccc;
    border-radius: 15px;
  }
  
  &::after {
    display: block;
    content: '';
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    transition: 0.2s linear;
    top: 2px;
    left: ${props => props.previewMode ? 'calc(100% - 20px)' : '2px'};
  }
`;


