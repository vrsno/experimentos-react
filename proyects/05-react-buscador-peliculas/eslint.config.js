import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Ignorar archivos en el directorio dist
  { ignores: ['dist'] },

  // Configuración principal de ESLint para archivos JS/JSX
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,  // Definir el entorno como navegador (browser globals)
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }, // Habilitar JSX
        sourceType: 'module', // Habilitar módulos ES6
      },
    },
    settings: { react: { version: '18.3' } },  // Configuración para React 18.3

    // Plugins de ESLint para React, React Hooks y React Refresh
    plugins: {
      react,              // Plugin React
      'react-hooks': reactHooks,  // Plugin React Hooks
      'react-refresh': reactRefresh,  // Plugin para React Refresh (hot-reloading)
    },

    // Reglas de ESLint
    rules: {
      // Reglas recomendadas de ESLint, React y React Hooks
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Reglas específicas de React
      'react/jsx-no-target-blank': 'off', // Desactivar advertencia por uso de target="_blank" sin rel

      // Reglas para React Refresh (solo exportar componentes)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Reglas adicionales para React Hooks
      'react-hooks/rules-of-hooks': 'error',  // Garantiza que los hooks solo se usen en componentes funcionales o hooks personalizados
      'react-hooks/exhaustive-deps': 'warn',  // Advierte si las dependencias de los hooks no están correctamente definidas
    },
  },
]
