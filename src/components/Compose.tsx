import {
  Fragment,
  ReactNode,
  JSXElementConstructor,
  PropsWithChildren,
} from "react";

export type ComposeComponent =
  | [JSXElementConstructor<PropsWithChildren<any>>, any]
  | JSXElementConstructor<PropsWithChildren<any>>;
export type ComposeProps = {
  components: ComposeComponent[];
  children: ReactNode;
};

/**
 * @function Compose
 * @summary handy component that cleans top tree from provider hell
 * @param {Component[]} components
 * @param {ReactNode} children
 */
function Compose({ components, children }: ComposeProps) {
  return (
    <Fragment>
      {components.reverse().reduce((acc, curr) => {
        const [Provider, props] = Array.isArray(curr)
          ? [curr[0], curr[1]]
          : [curr, {}];
        return <Provider {...props}>{acc}</Provider>;
      }, children)}
    </Fragment>
  );
}

export default Compose;
