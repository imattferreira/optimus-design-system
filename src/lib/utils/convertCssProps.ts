import { cssPropsThatHaveTokens } from "../constants/cssProps";

const convertCssProps = <T = Record<string, string>>(
  props: T,
): Record<string, string> => (
  Object.entries(props).reduce((acc, [key, value]) => (
    cssPropsThatHaveTokens.includes(key)
    ? { ...acc, [key]: `$${value}` }
    : { ...acc, [key]: value }
    ), {})
);

export default convertCssProps;
