import path from 'path'
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');
const { author, email } = pkg;

const GlobalName = 'Type';

const banner = `/*!
  * ${ pkg.name } v${ pkg.version }
  * (c) ${ new Date().getFullYear() }
  * author: ${ author }
  * email: ${ email }
  * @license MIT
  */`;

const outputConfigs = {
  // format: `dist/index.${format}.js`
  cjs: {
    file: pkg.main,
    format: `cjs`,
  },
  global: {
    file: pkg.unpkg,
    format: `iife`,
  },
  esm: {
    file: pkg.module,
    format: `esm`,
  },
  umd: {
    file: pkg.browser,
    format: 'umd',
    name: GlobalName
  }
};

const packageFormats = Object.keys(outputConfigs);

const packageConfigs = packageFormats.map(format => createConfig(format, outputConfigs[format]));

if (process.env.NODE_ENV === 'production') {
  packageFormats.forEach(format => {
    if ('umd' === format) {
      packageConfigs.push(createMinifiedConfig(format))
    }
  })
}

export default packageConfigs;

function createConfig(format, output, plugins = []) {
  if (!output) {
    console.log(require('chalk').yellow(`invalid format: "${ format }"`));
    process.exit(1)
  }

  output.banner = banner;
  // http://rollupjs.org/guide/en/#outputexternallivebindings
  output.externalLiveBindings = false;
  output.globals = { jquery: '$' };

  const isGlobalBuild = format === 'global';
  const isRawESMBuild = format === 'esm';
  const isNodeBuild = format === 'cjs';

  if (isGlobalBuild) output.name = GlobalName;

  const tsPlugin = typescript({
    check: true,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    tsconfigOverride: {}
  });

  // const isProd = process.env.NODE_ENV === 'production';
  // const { terser } = require('rollup-plugin-terser');

  return {
    input: `src/index.ts`,
    external: [],
    plugins: [
      tsPlugin,
      createReplacePlugin(
        isGlobalBuild || isRawESMBuild,
        isGlobalBuild,
        isNodeBuild
      ),
      // isProd && terser(), // all modes are compressed
      ...plugins,
      json(),
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        extensions: ['.ts']
      })
    ],
    output
  }
}

function createReplacePlugin(isBrowserBuild, isGlobalBuild, isNodeBuild) {
  const replacements = {
    __COMMIT__: `"${ process.env.COMMIT }"`,
    __VERSION__: `"${ pkg.version }"`,
    __BROWSER__: isBrowserBuild,
    __GLOBAL__: isGlobalBuild,
    __NODE_JS__: isNodeBuild,
  };
  Object.keys(replacements).forEach(key => {
    if (key in process.env) {
      replacements[key] = process.env[key]
    }
  });
  return replace(replacements)
}

function createMinifiedConfig(format) {
  const { terser } = require('rollup-plugin-terser');
  return createConfig(
    format,
    {
      file: outputConfigs[format].file.replace(/\.js$/, '.min.js'),
      format: outputConfigs[format].format,
      name: GlobalName
    },
    [terser()]
  )
}
