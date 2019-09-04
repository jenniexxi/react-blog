import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const globalStyles = createGlobalStyle`
a{
    text-decoration: none;
}
*{
    box-sizing: border-box;
}
`;

export default globalStyles;
