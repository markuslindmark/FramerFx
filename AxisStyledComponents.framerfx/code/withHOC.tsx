import * as React from 'react';
import { ThemeManager } from './themeManager';

export function withHOC(Component): React.FC<any> {
  return (props) => {
    return (
      <ThemeManager>
        <Component {...props} />
      </ThemeManager>
    );
  };
}

// addPropertyControls(withHOC, {
//   ...Component.propertyControls,
// });
