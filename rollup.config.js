import packageConfig from './package.json';
import eslint from '@rollup/plugin-eslint';
import {babel} from '@rollup/plugin-babel';
import replace from 'rollup-plugin-replace';
import {terser} from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const NODE_ENV = process.env.NODE_ENV;
const ENV = JSON.stringify(NODE_ENV || 'development');
const VERSION = packageConfig.version;

const plugins = [
  typescript({
    tsconfig: './tsconfig.json',
    exclude: ['node_modules', /\.test.((js|jsx|ts|tsx))$/],
  }),
  eslint({
    throwOnError: true,
    throwOnWarning: true,
    include: 'src/**',
  }),
  replace({
    exclude: 'node_modules/**',
    ENV,
    VERSION,
  }),
  babel({
    include: 'src/**/*',
    exclude: 'node_modules/**',
  }),
];

if (NODE_ENV === 'product') {
  plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        global_defs: {
          DEBUG: false,
        },
        pure_funcs: ['error', 'warn'],
      },
    })
  );
}

const config = [
  {
    input: 'src/index.ts',
    output: {
      name: 'sdk-demo',
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins,
  },
];

export default config;
