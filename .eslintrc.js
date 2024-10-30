module.exports = {
    extends: [
      'plugin:react/recommended',
      // other configurations...
    ],
    rules: {
      'react/jsx-no-target-blank': 'off', // If you need to disable this specific rule
      'react/no-danger': 'warn',          // Warn on usage of dangerouslySetInnerHTML
      'jsx-a11y/anchor-is-valid': [
        'warn',
        {
          components: ['Link'], // If using React Router
          specialLink: ['to'],
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  