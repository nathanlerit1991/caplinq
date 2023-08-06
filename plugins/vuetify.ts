import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxt) => {
  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      default: '#FFFFFF',
      primary: '#696ffc',
      'primary-darken-1': '#3700B3',
      secondary: '#21cef5',
      'secondary-darken-1': '#018786',
      error: '#da514a',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }
  
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
  })
  nuxt.vueApp.use(vuetify);
})