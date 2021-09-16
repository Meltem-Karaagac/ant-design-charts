import React, { useState, useEffect, Fragment } from 'react';
import {
  Flowchart,
  WorkspacePanel,
  XFlowNodeCommands,
  XFlowGraphCommands,
  usePanelContext,
  ToolbarPanel,
  FormItemWrapper,
  FormPanel,
  IconStore,
} from '@ant-design/charts';

import {
  SaveOutlined,
  RedoOutlined,
  RollbackOutlined,
  BackwardOutlined,
  ForwardOutlined,
} from '@ant-design/icons';
import { data } from './data';
// import { EditorShape } from './rename';
import { formSchemaService, controlMapService } from './service';

/** 注册icon 类型 */
const registerIcon = () => {
  IconStore.set('SaveOutlined', SaveOutlined);
  IconStore.set('RollbackOutlined', RollbackOutlined);
  IconStore.set('RedoOutlined', RedoOutlined);
  IconStore.set('BackwardOutlined', BackwardOutlined);
  IconStore.set('ForwardOutlined', ForwardOutlined);
};

registerIcon();

const DemoArea: React.FC = () => {
  const [mode, setMode] = useState('edit');

  useEffect(() => {
    setTimeout(() => {
      setMode('scan');
    }, 1000);
  }, []);

  return (
    <div style={{ height: 600 }}>
      <Flowchart
        data={data}
        mode={mode}
        toolbarConfig={{
          config: [
            {
              command: 'redo-cmd',
              text: '重做',
              // iconName: 'RedoOutlined',
            },
            {
              command: 'undo-cmd',
              text: '撤销',
              // iconName: 'RollbackOutlined',
            },
            {
              command: 'front-node',
              text: '置前',
              // iconName: 'RedoOutlined',
            },
            {
              command: 'back-node',
              text: '置后',
              // iconName: 'RedoOutlined',
            },
            {
              command: 'save-graph-data',
              text: '保存',
              callback: (graphData) => {
                console.log(graphData);
              },
              // iconName: 'RedoOutlined',
            },
          ],
        }}
        onReady={(app) => {
          // setTimeout(() => {
          //   app.executeCommand(XFlowNodeCommands.ADD_NODE.id, {
          //     beforeExec: async () => {
          //       const execArgs: NsAddNode.IExecArgs = {
          //         nodeConfig: {
          //           id: 'root1',
          //           x: 80,
          //           y: 180,
          //           width: 200,
          //           height: 50,
          //           label: 'customNode',
          //         },
          //       };
          //       return [null, execArgs];
          //     },
          //   } as NsAddNode.IConfig);
          // }, 2000);
        }}
        render={() => {
          return (
            <Fragment>
              <FormPanel
                register={controlMapService}
                config={formSchemaService}
                position={{ width: 240, top: 0, bottom: 0, right: 0 }}
              />
              {/* <ConfigFormPanel
                controlMapService={controlMapService}
                formSchemaService={formSchemaService}
                formValueUpdateService={formValueUpdateService}
                position={{ width: 290, top: 0, bottom: 0, right: 0 }}
              /> */}
              <WorkspacePanel
                className="xflow-workspace-toolbar-bottom"
                position={{ bottom: 0, left: 240, right: 240, height: 40, lineHeight: 40 }}
                style={{ borderTop: '1px solid #ccc' }}
              >
                <div> Bottom Toolbar </div>
              </WorkspacePanel>
            </Fragment>
          );
        }}
      />
    </div>
  );
};

export default DemoArea;
