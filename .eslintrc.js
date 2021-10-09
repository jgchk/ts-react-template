module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: ['jgchk/tsx'],
    },
    {
      files: ['.eslintrc.js'],
      extends: ['jgchk/js'],
      env: { node: true },
    },
  ],
}
