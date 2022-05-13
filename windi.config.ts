import { defineConfig } from '@windicss/plugin-utils'
import defaultTheme from 'windicss/defaultTheme'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  theme: {
    extend: {
      fontFamily: {
        brand: ['Pollyanna', ...defaultTheme.fontFamily.sans],
      }
    }
  }
})
