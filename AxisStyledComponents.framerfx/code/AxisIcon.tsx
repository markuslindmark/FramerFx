import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
import { pascal } from 'naming-style';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { createThemeOptions } from '../src/create-theme-options';
import { withHOC } from './withHOC';
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
import * as Icons from '@material-ui/icons';

interface Props {
  themeToggle: boolean;
  localTheme: any;
  disabled?: boolean;
  iconColor?: 'inherit' | 'primary' | 'secondary' | 'error' | 'disabled' | 'action';
  //color?: "inherit" | "primary" | "secondary" | "action" | "error" | "disabled";
  icon?: string;
  iconTheme?: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  iconSize?: number;
}

const defaultProps: Props = {
  iconColor: 'action',
  themeToggle: false,
  localTheme: false,
  disabled: false,
  icon: 'add',
  iconTheme: 'Filled',
  iconSize: 24,
};

const themeDark = createMuiTheme(
  createThemeOptions({
    type: 'dark',
  })
);
const themeLight = createMuiTheme(
  createThemeOptions({
    type: 'light',
  })
);

const AxisIco: React.FC<Props> = (props: Props) => {
  const {
    icon: iconProp,
    iconSize,
    iconTheme,
    themeToggle,
    localTheme,
    iconColor,
    disabled,
    ...other
  } = props;
  const iconName = `${iconProp && pascal(iconProp)}${iconTheme === 'Filled' ? '' : iconTheme}`;

  const [themeState, setThemeState] = React.useState(false);

  React.useEffect(() => {
    setThemeState(props.localTheme);
  }, [props.localTheme]);

  // @ts-ignore
  const Icon = Object.keys(Icons).includes(iconName) ? Icons[iconName] : undefined;

  return themeToggle ? (
    <MuiThemeProvider theme={themeState ? themeDark : themeLight}>
      {Icon && (
        <Icon
          color={props.disabled ? 'disabled' : iconColor}
          style={{ width: iconSize, height: iconSize }}
          {...other}
        />
      )}
    </MuiThemeProvider>
  ) : (
    Icon && (
      <Icon
        color={props.disabled ? 'disabled' : iconColor}
        style={{ width: iconSize, height: iconSize }}
        {...other}
      />
    )
  );
};

export const AxisIcon = withHOC(AxisIco);

AxisIcon.defaultProps = defaultProps;

addPropertyControls(AxisIcon, {
  themeToggle: {
    type: ControlType.Boolean,
    title: 'Override Theme',
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
  },
  localTheme: {
    title: 'Dark theme',
    type: ControlType.Boolean,
    hidden(props) {
      return props.themeToggle === false;
    },
  },
  icon: {
    type: ControlType.String,
    title: 'Icon',
  },
  iconColor: {
    type: ControlType.Enum,
    title: 'Icon color',
    options: ['inherit', 'primary', 'secondary', 'error', 'disabled', 'action'],
    //defaultValue: 'action',
  },
  disabled: {
    type: ControlType.Boolean,
    title: 'Disabled',
  },
  // color: {
  //   type: ControlType.Enum,
  //   title: "Color",
  //   options: ["inherit", "primary", "secondary", "action", "error", "disabled"],
  // },

  iconSize: {
    type: ControlType.Number,
    title: 'Icon size',
    defaultValue: 24,
  },
  iconTheme: {
    type: ControlType.Enum,
    title: 'Theme',
    options: ['Filled', 'Default', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
  },
});
