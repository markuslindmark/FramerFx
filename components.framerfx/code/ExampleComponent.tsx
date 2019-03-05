import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as components from "../../components/dist/index";

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

export class ExampleComponent extends React.Component<
  components.ExampleComponentProps
> {
  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps: components.ExampleComponentProps = {
    name: "Bob!",
    age: 23
  };

  static propertyControls: PropertyControls<
    components.ExampleComponentProps
  > = {
    name: { type: ControlType.String, title: "Name" },
    age: { type: ControlType.Number, title: "Age" }
  };

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return <components.ExampleComponent {...this.props} />;
  }
}
