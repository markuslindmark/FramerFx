import * as React from "react";

/**
 * These are ExampleComponent's props.
 */
export interface Props {
  /**
   * Pass in your name over here
   */
  name: string;
  /**
   * Pass in your age over here
   */
  age: number;
}

/**
 * This is some documentation on how ExampleComponent works.
 * @param props
 */
export const ExampleComponent: React.SFC<Props> = props => {
  return (
    <div
      style={{
        fontSize: 25,
        background: "#FA0",
        textAlign: "center",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        overflow: "hidden",
        borderRadius: "8px"
      }}
    >
      Hi, my name is {props.name} and I'm {props.age} years old.
    </div>
  );
};
