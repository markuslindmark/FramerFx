import * as React from 'react';
import { PropertyControls, ControlType, addPropertyControls } from 'framer';
import MaterialIcon from '@material-ui/core/Icon';
import * as WebFont from 'webfontloader';

// Define type of property
interface Props {
  icon: string;
  width: number;
  height: number;
  color: string;
  set: 'feather' | 'material' | 'fontawesome';
  fontLoaded: boolean;
}

const materialIconsFont = 'Material+Icons';
let materialFontIsLoaded = false;

export function Icon(props: Props) {
  const [fontLoaded, setFontLoaded] = React.useState(materialFontIsLoaded);
  React.useEffect(() => {
    if (fontLoaded) {
      return;
    }
    return WebFont.load({
      google: {
        families: [materialIconsFont],
      },
      fontactive: () => {
        materialFontIsLoaded = true;
        setFontLoaded(true);
      },
    });
  }, [props.set, fontLoaded]);

  return (
    <div>
      <RenderIcon fontLoaded={fontLoaded} {...props} />
    </div>
  );
}

function RenderIcon(props: Props) {
  const { icon, width, height, color, set, fontLoaded } = props;
  let name = `${icon.toLowerCase()}`;
  let faName = 'fa' + `${icon.charAt(0).toUpperCase()}` + `${icon.substr(1)}`;

  return (
    <MaterialIcon
      style={{
        color: color,
        fontSize: width,
        height: height,
        width: width,
        //fixedWidth: true,
      }}
    >
      {fontLoaded ? name : ''}
    </MaterialIcon>
  );
}

Icon.defaultProps = {
  icon: 'flag',
  width: 24,
  height: 24,
  color: '#000',
  set: 'material',
} as Props;

addPropertyControls(Icon, {
  set: {
    type: ControlType.Enum,
    title: 'Set',
    options: ['feather', 'material', 'fontawesome'],
    optionTitles: ['Feather', 'Material', 'Font Awesome'],
  },
  icon: { type: ControlType.String, title: 'Icon' },
  color: { type: ControlType.Color, title: 'Color' },
});
