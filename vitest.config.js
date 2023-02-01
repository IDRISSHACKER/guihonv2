import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    watch: false
  },
  test: {
    globals: true,
    // solid needs to be inline to work around
    // a resolution issue in vitest
    // And solid-testing-library needs to be here so that the 'hydrate'
    // method will be provided
    deps: {
      inline: [/solid-js/, /solid-testing-library/],
    },
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
