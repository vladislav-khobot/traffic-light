import LogMonitor from '@redux-devtools/log-monitor';
import DockMonitor from '@redux-devtools/dock-monitor';
import { createDevTools } from '@redux-devtools/core';

export const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={true}
  >
    <LogMonitor theme="isotope" />
  </DockMonitor>
);
