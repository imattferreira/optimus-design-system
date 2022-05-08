import { globalCss } from '.';

export default globalCss({
 '*': {
  m: 0,
  p: 0,
  boxSizing: 'border-box',
  transition: '250ms',
 },
 body: {
   fontFamily: 'Roboto, sans-serif'
 },
 button: {
   cursor: 'pointer',
   fontSize: '1rem',
   border: 'none',
 },
 a: {
   textDecoration: 'none'
 }
});
