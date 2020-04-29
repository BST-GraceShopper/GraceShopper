import {red} from '@material-ui/core/colors'
import {createMuiTheme} from '@material-ui/core/'

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Quicksand"'].join(',')
  },
  palette: {
    type: 'light',
    primary: {
      main: '#01579b'
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.08)'
    }
  }
})

export default theme
