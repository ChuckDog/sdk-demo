import pkg from './package.json';
import json from 'rollup-plugin-json';
import eslint from '@rollup/plugin-eslint';
import {babel} from '@rollup/plugin-babel';
import replace from 'rollup-plugin-replace';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const NODE_ENV = process.env.NODE_ENV;
const ENV = JSON.stringify(NODE_ENV || 'development');
const VERSION = pkg.version;
const isProd = NODE_ENV === 'production';

const plugins = [
  replace({
    ENV,
    VERSION,
    exclude: 'node_modules/**',
  }),
  typescript({
    tsconfig: './tsconfig.json',
    exclude: ['node_modules', /\.test.((js|jsx|ts|tsx))$/],
  }),
  json(),
  commonjs({
    include: /node_modules/,
    requireReturnsDefault: 'auto',
  }),
  resolve(),
  eslint({
    throwOnError: true,
    throwOnWarning: true,
    include: 'src/**',
  }),
  babel({
    include: 'src/**/*',
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
  }),
  isProd &&
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
    }),
];

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: `dist/${pkg.main}`,
        format: 'cjs',
        sourcemap: !isProd,
      },
      {
        file: `dist/${pkg.module}`,
        format: 'esm',
        sourcemap: !isProd,
      },
      {
        file: `dist/${pkg.browser}`,
        format: 'umd',
        name: 'sdk-demo',
        sourcemap: !isProd,
      },
    ],
    plugins,
  },
];

export default config;
