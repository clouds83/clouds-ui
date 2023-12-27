import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.ts', // Entry point of your library
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs', // CommonJS, suitable for Node and Browserify/Webpack
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm', // ES Module, suitable for modern browsers
    },
  ],
  plugins: [
    resolve(), // Resolves node modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(), // TypeScript compilation
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    postcss({
      modules: true, // Enable CSS Modules
      extensions: ['.css', '.scss'], // Add if you use SCSS
      use: [
        ['sass', { includePaths: ['./src/styles'] }], // Add if you use SCSS
      ],
      inject: true, // Inject styles into the document <head>
      extract: false, // Extract to separate file (set true if needed)
    }),
  ],
}
