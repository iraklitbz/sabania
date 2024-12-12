import process from 'node:process'
import type { CodegenConfig } from '@graphql-codegen/cli'
const config: CodegenConfig = {
    generates: {
        './types/sabania-types.ts': {
            schema: `${process.env.STRAPI_URL || 'http://localhost:1337'}/graphql`,
            config: {
                namingConvention: {
                    typeNames: (str: string) => {
                        return !str.includes('Sabania') ? `${str}Sabania` : str
                    },
                    enumValues: 'keep',
                },
            },
            plugins: ['typescript'],
        },
    },
}
export default config
