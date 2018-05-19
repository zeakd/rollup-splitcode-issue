export default {
  input: ['src/index.js', 'src/sub.js'],
  output: [
    {
      dir: 'lib', 
      format: 'cjs',
    },
    {
      dir: 'es',
      format: 'es',
    }
  ],
  experimentalCodeSplitting: true,
}
