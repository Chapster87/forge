import { createMuiTheme }  from '@material-ui/core/styles'
import createPalette from '@material-ui/core/styles/createPalette';

const palette = createPalette({
    type: 'dark',
    primary: {
        main: '#ffb81C',
    },
    secondary: {
        main: '#c60c30',
    },
});

const theme = createMuiTheme({
	palette,
	breakpoints: {
		values: {
			xs: 0,
			sm: 320,
			md: 768,
			lg: 1200,
			xl: 1440
		}
	},
	typography: {
		h1: {
			fontSize: '2.5rem',
			lineHeight: "1.333rem",
			textRendering: 'optimizelegibility',
			fontWeight: 500,
			fontFamily: 'Oswald,"Helvetica Neue",Helvetica,Arial,sans-serif'
		}
    },
    overrides: {
        MuiListItem: {
            button: {
                borderRightWidth: '0.1875rem',
                borderRightStyle: 'solid',
                borderRightColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'transparent',
                    backgroundImage: 'linear-gradient(to right, rgba(30,30,30,0), rgba(30,30,30,1))',
                    borderRightColor: palette.primary.main
                },
            },
        },
    },
});

export default theme