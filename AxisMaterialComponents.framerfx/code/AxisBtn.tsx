import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
import MuiButton from '@material-ui/core/Button';
import { AxisIcon } from './AxisIcon';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { themeDark } from '@axis/material-ui-theme/src/theme-dark';
import { themeLight } from '@axis/material-ui-theme/src/theme-light';
import { withHOC } from './withHOC';

interface Props {
  themeToggle: boolean;
  theme: any;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  disableElevation?: boolean;
  endIcon?: string;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: string;
  startIconTheme?: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  variant?: 'text' | 'outlined' | 'contained';
  endIconTheme?: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  label?: string;
  width?: number;
  height?: number;
  iconWidth?: number;
  onClick?: () => void;
}

const defaultProps: Props = {
  themeToggle: false,
  theme: false,
  color: 'primary',
  disabled: false,
  disableElevation: false,
  endIcon: undefined,
  fullWidth: false,
  size: 'medium',
  startIcon: undefined,
  variant: 'outlined',
  startIconTheme: 'Filled',
  endIconTheme: 'Filled',
  label: 'Button',
  width: 100,
  height: 38,
  iconWidth: 20,
};

const AxisBtn: React.FC<Props> = (props: Props) => {
  const {
    themeToggle,
    theme,
    endIcon,
    endIconTheme,
    height,
    label,
    startIcon,
    startIconTheme,
    variant,
    width,
    iconWidth,
    onClick,
    ...other
  } = props;

  const [themeState, setThemeState] = React.useState(false);

  React.useEffect(() => {
    setThemeState(props.theme);
  }, [props.theme]);

  const StartIcon =
    startIcon === '' ? undefined : (
      <AxisIcon icon={startIcon} width={iconWidth} height={iconWidth} theme={startIconTheme} />
    );
  const EndIcon =
    endIcon === '' ? undefined : (
      <AxisIcon icon={endIcon} width={iconWidth} height={iconWidth} theme={endIconTheme} />
    );

  return themeToggle ? (
    <MuiThemeProvider theme={themeState ? themeDark : themeLight}>
      <MuiButton
        disableRipple
        onClick={onClick}
        variant={variant}
        startIcon={StartIcon}
        endIcon={EndIcon}
        {...other}
      >
        {label}
      </MuiButton>
    </MuiThemeProvider>
  ) : (
    <MuiButton
      disableRipple
      onClick={onClick}
      variant={variant}
      startIcon={StartIcon}
      endIcon={EndIcon}
      {...other}
    >
      {label}
    </MuiButton>
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
  theme: {
    title: 'Dark theme',
    type: ControlType.Boolean,
    hidden(props) {
      return props.themeToggle === false;
    },
  },

  color: {
    type: ControlType.Enum,
    title: 'Color',
    options: ['default', 'inherit', 'primary', 'secondary'],
  },
  disabled: {
    type: ControlType.Boolean,
    title: 'Disabled',
  },
  disableElevation: {
    type: ControlType.Boolean,
    title: 'Disable elevation',
  },
  iconWidth: {
    type: ControlType.Number,
    title: 'Icon size',
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
  startIcon: {
    type: ControlType.String,
    title: 'Start icon',
  },
  endIcon: {
    type: ControlType.String,
    title: 'End icon',
  },
  variant: {
    type: ControlType.Enum,
    title: 'Variant',
    options: ['text', 'outlined', 'contained'],
  },
  startIconTheme: {
    type: ControlType.Enum,
    title: 'Start icon theme',
    options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
  },
  endIconTheme: {
    type: ControlType.Enum,
    title: 'End icon theme',
    options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
  },
  label: {
    type: ControlType.String,
    title: 'Label',
  },
  onClick: {
    type: ControlType.EventHandler,
  },
});
