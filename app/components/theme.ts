import { extendTheme, theme as base , type ThemeConfig, StyleFunctionProps} from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}
const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        color: mode('blue.400', '#C53030')(props),
      },
      NavLink: {
        variants: {
          "nav-link" : {
            bg: "red",
          },
        },
      },
    }),
  },
  colors: {
    brand: {
      50: "#f6e8ff",
      100: "#e3bdff",
      200: "#cd94ff",
      300: "#b46ef7",
      400: "#9a4ce7",
      500: "#7e31ce",
      600: "#641eab",
      700: "#4b1483",
      800: "#341158",
      900: "#1e0d2d",
    },
  },
  fonts: {
    heading: `Josefin Sans, ${base.fonts.heading}`,
  },
  components: {
    Link: {
      variants: {
        "nav-link": {
          color: "white",
        },
      },
    },
    
    Button: {
      variants: {
        pill: (props: StyleFunctionProps) => ({
          rounded: "full",
          color: "white",
          text: "white",
        }),
      },
    },
  },
  config
});

export default theme;
