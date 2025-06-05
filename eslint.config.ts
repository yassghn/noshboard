/**
 * eslint.config.ts
 */

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores([]),
	{
        files: ['src/ts/**/*.ts'],
        ignores: [],
		rules: {
			semi: 'error',
			'prefer-const': 'error'
		}
	}
])