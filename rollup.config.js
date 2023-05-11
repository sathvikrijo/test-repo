import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';


export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs',
    exports: 'default'
  },
  plugins: [
    image(),
    postcss({
      extensions: [".css"],
    }),
    babel({
      presets: [
        ["@babel/preset-react", {"runtime": "automatic"}]
      ],
    }),
    commonjs()
  ]
};
