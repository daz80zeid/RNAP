import {createMuiTheme} from "@material-ui/core";
import { ruRU } from '@material-ui/core/locale';
import {PrimaryColor, PrimaryDarkColor, PrimaryTextColor} from '../constants/Colors';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: PrimaryColor,
        },
        secondary: {
            main: PrimaryDarkColor,
        },
        text: {
            primary: PrimaryTextColor
        }
    },
}, ruRU);
