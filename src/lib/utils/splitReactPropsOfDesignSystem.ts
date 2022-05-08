import parseArrKeyParToObj from "./parseArrKeyParToObj";

import cssProps from "../constants/cssProps";
import notAllowedReactProps from "../constants/notAllowedReactProps";

interface SplitReactPropsOfDesignSystem {
  reactProps: Record<string, string>,
  designSystemProps: Record<string, string>
};

type GetDesignSystemProps = (propsKeyPar: [string, string][]) => Record<string, string>;
type GetReactProps = (propsKeyPar: [string, string][]) => Record<string, string>;

const getDesignSystemProps: GetDesignSystemProps = (propsKeyPar) => (
  parseArrKeyParToObj(
    propsKeyPar.filter(([key]) => cssProps.includes(key))
  )
);

const getReactProps: GetReactProps = (propsKeyPar) => (
  parseArrKeyParToObj(
    propsKeyPar.filter(([key]) => (
      !cssProps.includes(key) && !notAllowedReactProps.includes(key)
    ))
  )
);

const splitReactPropsOfDesignSystem = <T = Record<string, string>>(
  props: T,
): SplitReactPropsOfDesignSystem  =>  {
  const propsKeyPar =  Object.entries(props);

  return {
    designSystemProps: getDesignSystemProps(propsKeyPar),
    reactProps: getReactProps(propsKeyPar),
  };
}

export default splitReactPropsOfDesignSystem;
