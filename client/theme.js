import {createMuiTheme} from '@material-ui/core/'

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Quicksand"'].join(',')
  },
  palette: {
    type: 'light',
    background: {
      default: '#000000'
    },
    primary: {
      main: '#01579b'
    },
    secondary: {
      main: '#ef6c00'
    }
  }
})

export default theme
