import * as React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseRounded from '@material-ui/icons/CloseRounded';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { AxisIcon } from './AxisIcon';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { createThemeOptions } from '../src/create-theme-options';
import { withHOC } from './withHOC';
import { addPropertyControls, ControlType } from 'framer';

const AntTabs = withStyles((theme: Theme) =>
  createStyles({
    root: {},
    indicator: {
      display: 'none',
      top: 1,
      height: 2,
      backgroundColor: theme.palette.primary.main,
    },
  })
)(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: (props: StyledTabProps) => ({
      minHeight: props.height,
      marginTop: 2,
      marginRight: theme.spacing(0.25),
      backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 100%)`,
      textTransform: 'none',
      fontWeight: 600,
      minWidth: 160,
      opacity: 1,
      color: '#ccc',
      '& .MuiSvgIcon-root': {
        opacity: 0,
        fontSize: '1em',
        color: 'rgb(230,230,230)',
      },
      '&:before': {
        content: '" "',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        height: 2,
        width: 0,
        backgroundColor: theme.palette.primary.dark,
        //transform: "translate(0px,-3px)",
        opacity: 0,
        transition: 'all 0.2s ease-in-out',
      },

      '&:hover': {
        color: '#fff',
        opacity: 1,
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)`,
        '& .MuiSvgIcon-root': { opacity: 1 },
      },

      '&.Mui-selected': {
        color: theme.palette.primary.main,
        backgroundImage: `linear-gradient(180deg, ${props.backgroundcolorstart} 0%, ${props.backgroundcolorend} 100%)`,
        '&:before': {
          opacity: 1,
          width: '100%',
          //transform: "translate(0px,0px)",
        },
      },
      '&:focus': {
        color: theme.palette.primary.main,
      },
    }),
    wrapper: {
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple label={props.labeltext} {...props}></Tab>);

interface StyledTabProps {
  currentPage?: number;
  onTapClick?: any;
  onClick?: any;
  labeltext?: any;
  labels?: any;
  icons?: any;
  backgroundcolorstart?: string;
  backgroundcolorend?: string;
  height?: number;
  icon?: any;
  startIcon?: any;
  //endIcon?: any;
  startIconTheme?: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  iconWidth?: number;
  //disabled: boolean;
}

// interface StyledTabsProps {
//   value: number;
//   onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
// }

// const StyledTab = withStyles((theme: Theme) =>
//   createStyles({
//     root: (props: StyledTabProps) => ({
//       textTransform: 'none',
//       color: '#fff',
//       fontWeight:
//         props.label != 'tom' ? theme.typography.fontWeightRegular : theme.typography.fontWeightBold,
//       fontSize: theme.typography.pxToRem(15),
//       marginRight: theme.spacing(1),
//       '&:focus': {
//         opacity: 1,
//       },
//     }),
//   })
// )((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiTab-labelIcon .MuiTab-wrapper > *:first-child': {
      marginBottom: 0,
      //marginRight: theme.spacing(1),
    },
  },
}));

const defaultProps: StyledTabProps = {
  //labeltext: 'tab',
  currentPage: 0,
  onTapClick: () => null,
  labels: ['tab 1', 'tab 2'],
  icons: ['flag'],
  height: 30,
  backgroundcolorstart: '#545454',
  backgroundcolorend: '#2B2B2B',
  icon: null,
  startIcon: 'PersonalVideo',
  startIconTheme: 'Filled',
  iconWidth: 20,

  //disabled: false,
};

const CustomizedTabs: React.FC<StyledTabProps> = (props: StyledTabProps) => {
  const {
    currentPage,
    onTapClick,
    height,
    icons,
    startIconTheme,
    iconWidth,
    labels,
    backgroundcolorstart,
    backgroundcolorend,
    ...other
  } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tapValue, setTapValue] = React.useState('');

  React.useEffect(() => {
    setValue(currentPage);
  }, [currentPage]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const tapping = (name: string) => {
    setTapValue(name);
  };
  // const StartIcon =
  //   startIcon === "" ? undefined : (
  //     <AxisIcon
  //       icon={startIcon}
  //       width={iconWidth}
  //       height={iconWidth}
  //       theme={startIconTheme}
  //     />
  //   );
  const icon = (iconname: string) => {
    return (
      <AxisIcon
        icon={iconname}
        width={iconWidth}
        height={iconWidth}
        theme={startIconTheme}
        color="inherit"
      />
    );
  };
  return (
    <AntTabs
      className={classes.root}
      value={value}
      onChange={handleChange}
      aria-label="ant example"
    >
      {labels.map((labelname, index) => {
        return (
          <AntTab
            onClick={() => {
              tapping(labelname);
              onTapClick(labelname, index);
            }}
            key={index}
            height={height}
            //icon={icon(icons[index])}
            labeltext={
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                spacing={1}
                style={{ flexGrow: 1 }}
                wrap="nowrap"
              >
                <Grid item style={{ display: 'inline-flex' }}>
                  {icon(icons[index])}
                </Grid>
                <Grid item style={{ width: 'auto', minWidth: 100 }}>
                  <Typography
                    variant="subtitle2"
                    style={{
                      padding: 0,
                      lineHeight: 1.4,
                      //whiteSpace: "pre",
                      textAlign: 'start',
                    }}
                  >
                    {labelname}
                  </Typography>
                </Grid>

                <Grid item style={{ padding: 0, alignContent: 'start' }}>
                  <IconButton disableRipple size="small">
                    <CloseRounded className={classes.root} />
                  </IconButton>
                </Grid>
              </Grid>
            }
            backgroundcolorstart={backgroundcolorstart}
            backgroundcolorend={backgroundcolorend}
          />
        );
      })}
    </AntTabs>
  );
};

export const AxisTab = withHOC(CustomizedTabs);

AxisTab.defaultProps = defaultProps;

addPropertyControls(AxisTab, {
  currentPage: {
    type: ControlType.Number,
    title: 'Current Tab',
    step: 1,
    defaultValue: 0,
    displayStepper: true,
  },
  labels: {
    type: ControlType.Array,
    title: 'Label',
    propertyControl: {
      type: ControlType.String,
      placeholder: 'Type name',
      defaultValue: 'New item',
    },
  },
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
  backgroundcolorstart: {
    type: ControlType.Color,
    title: 'Start background color',
  },
  backgroundcolorend: {
    type: ControlType.Color,
    title: 'End background color',
  },

  icons: {
    type: ControlType.Array,
    title: 'icon',
    propertyControl: {
      type: ControlType.String,
      placeholder: 'Type icon name',
      defaultValue: 'Flag',
    },
  },
  iconWidth: {
    type: ControlType.Number,
    title: 'Icon size',
    defaultValue: 20,
  },

  startIconTheme: {
    type: ControlType.Enum,
    title: 'Start icon theme',
    options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
  },
  onTapClick: {
    type: ControlType.EventHandler,
  },
});
