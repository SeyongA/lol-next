declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export { ReactComponent };
  }

declare module '*.png' {
  const value: string;
  export default value;
}

  