import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
import MuiTextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { createThemeOptions } from '../src/create-theme-options';
import { AxisIcon } from './AxisIcon';
import { withHOC } from './withHOC';

interface Props {
  themeToggle: boolean;
  localTheme: boolean;
  selection?: boolean;
  elements?: any;
  color?: 'primary' | 'secondary';
  iconColor?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  value?: string;
  label?: string;
  shrink?: boolean;
  multiline?: boolean;
  placeholder?: string;
  required?: boolean;
  size?: 'small' | 'medium';
  variant?: 'standard' | 'outlined' | 'filled';
  width?: number;
  height?: number;
  startIcon?: string;
  startIconTheme?: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  endIcon?: string;
  endIconTheme?: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  iconWidth?: number;
}

const defaultProps: Props = {
  themeToggle: false,
  localTheme: false,
  selection: false,
  color: 'primary',
  iconColor: 'red',
  disabled: false,
  error: false,
  fullWidth: true,
  helperText: '',
  value: '',
  elements: ['All', 'Selected'],
  label: 'TextField',
  shrink: false,
  multiline: false,
  required: false,
  variant: 'standard',
  width: 280,
  height: 56,
  endIcon: 'today',
  endIconTheme: 'Filled',
  startIcon: undefined,
  startIconTheme: 'Filled',
  iconWidth: 18,
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

const TextFieldComp: React.FC<Props> = (props: Props) => {
  const {
    themeToggle,
    localTheme,
    selection,
    elements,
    color,
    iconColor,
    width,
    height,
    endIcon,
    endIconTheme,
    startIcon,
    startIconTheme,
    helperText,
    value,
    shrink,
    iconWidth,
    ...other
  } = props;

  const [themeState, setThemeState] = React.useState(false);
  const [inputValue, setValue] = React.useState(value);
  const [selectValue, setSelectValue] = React.useState(elements);

  React.useEffect(() => {
    setThemeState(props.localTheme);
  }, [props.localTheme]);

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  React.useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const StartIcon =
    startIcon === '' ? null : (
      <InputAdornment position="start">
        <AxisIcon
          icon={startIcon}
          iconTheme={startIconTheme}
          iconSize={iconWidth}
          //color={iconColor}
          //width={20}
        />
      </InputAdornment>
    );

  const EndIcon =
    endIcon === '' ? null : (
      <AxisIcon
        icon={endIcon}
        iconTheme={startIconTheme}
        iconSize={iconWidth}
        //height={iconWidth}
        iconColor={iconColor}
        //width={20}
      />
    );

  const Textfield = () => (
    <MuiTextField
      select={selection}
      helperText={helperText}
      defaultValue={inputValue}
      color={color}
      InputLabelProps={
        {
          //shrink: shrink,
        }
      }
      SelectProps={{
        IconComponent: () => <KeyboardArrowDownIcon fontSize="small" />,
        defaultValue: elements[0],
      }}
      InputProps={{
        //type: type,
        startAdornment: StartIcon,
        endAdornment: <InputAdornment position="end">{EndIcon}</InputAdornment>,
      }}
      {...other}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {elements.map((name) => (
        <MenuItem value={name}>{name}</MenuItem>
      ))}
    </MuiTextField>
  );

  return themeToggle ? (
    <MuiThemeProvider theme={themeState ? themeDark : themeLight}>
      <Textfield />
    </MuiThemeProvider>
  ) : (
    <Textfield />
  );
};

export const AxisTextField = withHOC(TextFieldComp);

AxisTextField.defaultProps = defaultProps;
TextFieldComp.defaultProps = defaultProps;

addPropertyControls(AxisTextField, {
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
  selection: {
    type: ControlType.Boolean,
    title: 'Action type',
    enabledTitle: 'Select menu',
    disabledTitle: 'Input field',
  },

  elements: {
    type: ControlType.Array,
    title: 'Items',
    hidden(props) {
      return props.selection === false;
    },
    propertyControl: {
      type: ControlType.String,
      placeholder: 'Type name',
      defaultValue: 'New item',
    },
  },
  color: {
    type: ControlType.Enum,
    title: 'Color',
    options: ['primary', 'secondary'],
  },
  variant: {
    type: ControlType.Enum,
    title: 'Variant',
    options: ['standard', 'outlined', 'filled'],
  },
  disabled: {
    type: ControlType.Boolean,
    title: 'Disabled',
  },
  error: {
    type: ControlType.Boolean,
    title: 'Error',
  },
  fullWidth: {
    type: ControlType.Boolean,
    title: 'Full width',
  },
  helperText: {
    type: ControlType.String,
    title: 'Helper text',
  },
  value: {
    type: ControlType.String,
    title: 'Value text',
  },
  label: {
    type: ControlType.String,
    title: 'Label',
  },
  // shrink: {
  //   type: ControlType.Boolean,
  //   title: 'Label shrink',
  // },
  multiline: {
    type: ControlType.Boolean,
    title: 'Multiline',
  },
  placeholder: {
    type: ControlType.String,
    title: 'Placeholder',
  },
  required: {
    type: ControlType.Boolean,
    title: 'Required',
  },
  size: {
    type: ControlType.Enum,
    title: 'Size',
    options: ['small', 'medium'],
  },

  iconWidth: {
    type: ControlType.Number,
    title: 'Icon size',
  },
  endIcon: {
    type: ControlType.String,
    title: 'End icon',
  },
  startIcon: {
    type: ControlType.String,
    title: 'Start icon',
  },
  iconColor: {
    type: ControlType.Color,
    title: 'Icon color',
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
});
