import React from 'react';
import { ToolbarPanel as XFlowToolbarPanel } from '@ali/xflow-extension';
import { useToolbarConfig } from './util';
import { ToolbarPanelConfig } from '../../interface';

export const ToolbarPanel: React.FC<ToolbarPanelConfig> = (props) => {
  const {
    config,
    layout = 'horizontal',
    position = { top: 0, left: 290, right: 290, bottom: 0 },
    className,
    style,
  } = props;
  const toolbarConfig = config instanceof Array ? useToolbarConfig(config) : config;
  return (
    <XFlowToolbarPanel
      className={className}
      layout={layout}
      config={toolbarConfig}
      style={{ borderBottom: '1px solid #ccc', ...style }}
      position={position}
    />
  );
};

export default ToolbarPanel;