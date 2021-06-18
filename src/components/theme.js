import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary:  {
            main: '#335145',
        },
        secondary: {
            main: '#00bfa6'
        }
    },
    typography: {
        fontSize: 12,
    }
})

export default theme;