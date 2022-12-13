import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'components-base',
  globalStyle: './src/global/tailwind.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-readme',
    },
    { 
        type: 'docs-vscode',
        file: 'vscode-components-base.json',
    }
  ],
};
