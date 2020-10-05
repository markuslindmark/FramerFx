import * as React from 'react';
import { addPropertyControls, ControlType, Frame } from 'framer';
import { useStore } from './storeCreator';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withHOC } from './withHOC';

interface ThemeProps {
  theme: any;
  children: any;
}

const ThemeSwitcher: React.FC = (props: ThemeProps) => {
  const [store, setStore] = useStore();

  React.useEffect(() => {
    props.theme === 'themeDark' ? setStore({ darktheme: true }) : setStore({ darktheme: false });
  }, [props.theme]);

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={store.darktheme}
            onChange={() => setStore({ darktheme: !store.darktheme })}
          />
        }
        label={store.darktheme ? 'Dark theme' : 'Light theme'}
      />
    </FormGroup>
  );
};

export const AxisThemes = withHOC(ThemeSwitcher);

AxisThemes.defaultProps = {
  width: 110,
  height: 25,
};

addPropertyControls(AxisThemes, {
  theme: {
    title: 'Theme',
    options: ['themeDark', 'themeLight'],
    optionTitles: ['Dark', 'Light'],
    type: ControlType.Enum,
    defaultValue: 'themeDark',
  },
});
