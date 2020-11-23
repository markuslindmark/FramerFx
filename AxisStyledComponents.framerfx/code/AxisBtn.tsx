import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
import MuiButton from '@material-ui/core/Button';
import { AxisIcon } from './AxisIcon';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { createThemeOptions } from '../src/create-theme-options';
import { withHOC } from './withHOC';

interface Props {
  themeToggle: boolean;
  localTheme: boolean;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  disableElevation?: boolean;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  label?: string;
  width?: number;
  height?: number;
  //icon?: string;
  startIcon: string;
  endIcon: string;
  iconColor?: 'inherit' | 'primary' | 'secondary' | 'error' | 'disabled' | 'action';
  iconTheme?: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  iconSize?: number;
  onClick?: () => void;
}

const defaultProps: Props = {
  themeToggle: false,
  localTheme: false,
  color: 'primary',

  disabled: false,
  disableElevation: false,
  fullWidth: false,
  size: 'medium',
  variant: 'contained',
  //icon: 'add',
  startIcon: '',
  endIcon: '',
  iconColor: 'inherit',
  iconSize: 20,
  iconTheme: 'Filled',
  label: 'Button',
  width: 100,
  height: 38,
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

const AxisBtn: React.FC<Props> = (props: Props) => {
  const {
    themeToggle,
    localTheme,
    height,
    label,
    iconTheme,
    //icon: iconProp,
    startIcon,
    endIcon,
    color,
    iconColor,
    variant,
    width,
    iconSize,
    onClick,
    disabled,
    ...other
  } = props;

  const StartIcon =
    props.startIcon === '' ? undefined : (
      <AxisIcon iconColor={iconColor} icon={startIcon} iconSize={iconSize} iconTheme={iconTheme} />
    );
  const EndIcon =
    props.endIcon === '' ? undefined : (
      <AxisIcon iconColor={iconColor} icon={endIcon} iconSize={iconSize} iconTheme={iconTheme} />
    );

  const [themeState, setThemeState] = React.useState(false);

  React.useEffect(() => {
    setThemeState(props.localTheme);
  }, [props.localTheme]);

  const Btn = () => (
    <MuiButton
      disableRipple={true}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      startIcon={StartIcon}
      endIcon={EndIcon}
      color={color}
      {...other}
    >
      {label}
    </MuiButton>
  );

  return themeToggle ? (
    <MuiThemeProvider theme={themeState ? themeDark : themeLight}>
      <Btn />
    </MuiThemeProvider>
  ) : (
    <Btn />
  );
};
export const AxisButton = withHOC(AxisBtn);

AxisButton.defaultProps = defaultProps;

addPropertyControls(AxisButton, {
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
  label: {
    type: ControlType.String,
    title: 'Label',
  },
  color: {
    type: ControlType.Enum,
    title: 'Color',
    options: ['default', 'inherit', 'primary', 'secondary'],
  },
  variant: {
    type: ControlType.Enum,
    title: 'Variant',
    options: ['text', 'outlined', 'contained'],
  },
  disabled: {
    type: ControlType.Boolean,
    title: 'Disabled',
  },
  disableElevation: {
    type: ControlType.Boolean,
    title: 'Disable elevation',
  },

  fullWidth: {
    type: ControlType.Boolean,
    title: 'Full width',
  },
  href: {
    type: ControlType.String,
    title: 'Href',
  },
  size: {
    type: ControlType.Enum,
    title: 'Size',
    options: ['small', 'medium', 'large'],
  },

  // iconWidth: {
  //   type: ControlType.Number,
  //   title: 'Icon size',
  // },
  startIcon: {
    type: ControlType.String,
    title: 'Start icon',
  },
  // startIconTheme: {
  //   type: ControlType.Enum,
  //   title: 'Start icon theme',
  //   options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
  // },
  endIcon: {
    type: ControlType.String,
    title: 'End icon',
  },

  // endIconTheme: {
  //   type: ControlType.Enum,
  //   title: 'End icon theme',
  //   options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
  // },

  ...AxisIcon.propertyControls,
  onClick: {
    type: ControlType.EventHandler,
  },
});
