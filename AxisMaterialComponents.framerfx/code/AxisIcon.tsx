import * as React from 'react';
import { pascal } from 'naming-style';
import { addPropertyControls, ControlType } from 'framer';
import { withHOC } from './withHOC';
// tslint:disable-next-line: ban-ts-ignore
// @ts-ignore
import * as Icons from '@material-ui/icons';

interface Props {
  color?: string;
  //color?: "inherit" | "primary" | "secondary" | "action" | "error" | "disabled";
  icon?: string;
  theme?: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  width?: number;
  height?: number;
}

const defaultProps: Props = {
  //color: "inherit",
  icon: 'add',
  theme: 'Filled',
  width: 24,
  height: 24,
};

const AxisIco: React.FC<Props> = (props: Props) => {
  const { height, icon: iconProp, theme, color, width, ...other } = props;
  const iconName = `${iconProp && pascal(iconProp)}${theme === 'Filled' ? '' : theme}`;
  // tslint:disable-next-line: ban-ts-ignore
  // @ts-ignore
  const Icon = Object.keys(Icons).includes(iconName) ? Icons[iconName] : undefined;

  return Icon ? <Icon style={{ width, height, color: `${props.color}` }} {...other} /> : null;
};

export const AxisIcon = withHOC(AxisIco);

AxisIcon.defaultProps = defaultProps;

addPropertyControls(AxisIcon, {
  color: {
    type: ControlType.Color,
    title: 'Color',
  },
  // color: {
  //   type: ControlType.Enum,
  //   title: "Color",
  //   options: ["inherit", "primary", "secondary", "action", "error", "disabled"],
  // },
  icon: {
    type: ControlType.String,
    title: 'Icon',
  },
  theme: {
    type: ControlType.Enum,
    title: 'Theme',
    options: ['Filled', 'Default', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
  },
});
