import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    color:{
        primary: '#C2185B',
        secondary: '#03A9F4'
    },
    typography: {
        fontFamily: 'Roboto',
    },
    shape: {
        borderRadius: 4,
        background: '#0288D1',
        textColor: '#FFFFFF',
        border: '#BDBDBD'
    }
});

export default theme;