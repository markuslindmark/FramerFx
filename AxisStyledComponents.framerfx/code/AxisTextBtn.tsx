import * as React from 'react';
import { Frame, addPropertyControls, ControlType } from 'framer';
import { Theme, ComponentsPropsList, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import { AxisIcon } from './AxisIcon';
import { withHOC } from './withHOC';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { createThemeOptions } from '../src/create-theme-options';

interface Props {
  themeToggle: boolean;
  localTheme: boolean;
  disabled?: boolean;
  color?:
    | 'inherit'
    | 'initial'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  iconColor?: 'inherit' | 'primary' | 'secondary' | 'error' | 'disabled' | 'action';
  text?: string;
  startIcon?: string;
  icon?: string;
  iconTheme?: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  iconSize?: number;
  onClick?: () => void;
  height: number;
  width: string;
}

const defaultProps: Props = {
  themeToggle: false,
  localTheme: false,
  disabled: false,
  text: 'Get started!',
  color: 'inherit',
  iconColor: 'action',
  //hoverColor: '#fafafa',
  startIcon: 'add',
  icon: 'add',
  iconSize: 20,
  iconTheme: 'Filled',
  height: 50,
  width: 'auto',
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnBase: {
      background: '',
      padding: `${theme.spacing(1)}px`,

      '&:hover, &$focusVisible': {
        '& $btnIcon': { opacity: 1 },
        '& $btnTitle': { opacity: 1 },
        '&:active': {
          '& $btnIcon': { opacity: 0.6 },
          '& $btnTitle': {
            opacity: 0.6,
          },
        },
      },
    },
    focusVisible: {},

    btnIcon: {
      // color: (props: Props) =>
      //   props.color === 'inherit'
      //     ? theme.palette.text.primary
      //     : props.color === 'primary'
      //     ? theme.palette.primary.main
      //     : props.color === 'secondary'
      //     ? theme.palette.secondary.main
      //     : 'rgba(255,255,255,0.5)',
      //color: theme.palette.primary.main,
      opacity: 0.8,
      transition: theme.transitions.create('opacity'),
    },
    btnTitle: {
      //color: (props) => props.color,
      // color: (props: Props) =>
      //   props.color === 'initial'
      //     ? theme.palette.text.primary
      //     : props.color === 'primary'
      //     ? theme.palette.primary.main
      //     : props.color === 'secondary'
      //     ? theme.palette.secondary.main
      //     : 'rgba(255,255,255,0.5)',
      position: 'relative',
      marginLeft: theme.spacing(1),
      opacity: 0.8,
      transition: theme.transitions.create('opacity'),
    },
  })
);

const PlainTextButton: React.FC<Props> = (props: Props) => {
  const {
    text,
    color,
    iconColor,
    themeToggle,
    localTheme,
    startIcon,
    icon: iconProp,
    iconTheme,
    iconSize,
    disabled,
    onClick,
    ...rest
  } = props;

  const [themeState, setThemeState] = React.useState(themeDark);
  const classes = useStyles(props);

  React.useEffect(() => {
    props.themeToggle && setThemeState(localTheme ? themeDark : themeLight);
  }, [themeToggle]);

  const TextBtn = () => (
    <>
      <ButtonBase
        focusRipple={false}
        disableRipple={true}
        className={classes.btnBase}
        focusVisibleClassName={classes.focusVisible}
        onClick={onClick}
        {...rest}
      >
        <FormLabel>
          <AxisIcon
            disabled={disabled}
            className={classes.btnIcon}
            iconColor={iconColor}
            icon={iconProp}
            iconSize={iconSize}
            iconTheme={iconTheme}
          />
        </FormLabel>

        <FormLabel>
          <Typography
            color={disabled ? 'textSecondary' : color}
            className={classes.btnTitle}
            variant="button"
          >
            {text}
          </Typography>
        </FormLabel>
      </ButtonBase>
    </>
  );

  return themeToggle ? (
    <MuiThemeProvider theme={themeState}>
      <TextBtn />
    </MuiThemeProvider>
  ) : (
    <TextBtn />
  );
};

export const AxisPlainTextButton = withHOC(PlainTextButton);

AxisPlainTextButton.defaultProps = defaultProps;

addPropertyControls(AxisPlainTextButton, {
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
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Button',
  },
  color: {
    type: ControlType.Enum,
    title: 'Color',
    options: [
      'initial',
      'inherit',
      'primary',
      'secondary',
      'textPrimary',
      'textSecondary',
      'error',
    ],
    defaultValue: 'textPrimary',
  },
  ...AxisIcon.propertyControls,
  onClick: {
    type: ControlType.EventHandler,
  },
});
