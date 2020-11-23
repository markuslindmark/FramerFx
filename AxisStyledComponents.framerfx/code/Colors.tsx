import * as React from 'react';
import { Frame, Stack, addPropertyControls, ControlType } from 'framer';
//import * as data from './test.json';
import { grey, blue, yellow, red } from '../src/common/colors';

function Tints(props) {
  const { text, tint, color, onTap, ...rest } = props;

  return (
    // <Frame>test</Frame>
    <Stack {...rest} alignment="start" distribution="start" height="auto" width="auto">
      <Frame height={20} background="" style={{ fontSize: 18, textAlign: 'left', color: 'aaa' }}>
        <span>{text}</span>
      </Frame>
      <Stack
        {...rest}
        direction="horizontal"
        alignment="start"
        distribution="start"
        gap={0}
        width="auto"
        height="auto"
        style={{ flexWrap: 'wrap' }}
      >
        {Object.keys(color).map((color, index) => {
          return (
            <Frame
              width={120}
              height={50}
              key={index}
              background={props.color[color]}
              onTap={onTap}
              whileHover={{
                scale: 1.1,
              }}
              style={{
                color: '#000',
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 5,
                padding: 8,
              }}
            >
              <div>{color}</div>
              <div>{props.color[color]}</div>
            </Frame>
          );
        })}
      </Stack>
    </Stack>
  );
}

export function Colors(props) {
  const { text, tint, color, onTap, ...rest } = props;

  return (
    // <Frame>test</Frame>
    <Stack {...rest} alignment="start" width="auto" height="auto">
      <Tints color={blue} text="BLUE" />
      <Tints color={grey} text="GREY" />
      <Tints color={yellow} text="YELLOW" />
      <Tints color={red} text="RED" />
    </Stack>
  );
}

Colors.defaultProps = {
  height: 128,
  width: 240,
  text: 'Get started!',
  tint: '#0099ff',
};

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Colors, {
  text: {
    title: 'Text',
    type: ControlType.String,
    defaultValue: 'Hello Framer!',
  },
  tint: {
    title: 'Tint',
    type: ControlType.Color,
    defaultValue: '#0099ff',
  },
  onTap: {
    type: ControlType.EventHandler,
  },
});
