import Ts from 'rollup-plugin-typescript2'

export default {
    input: [
        'src/index.ts',
				'src/atoms/Button/index.ts',
        /* 'src/atoms/Color/index.ts',
        'src/atoms/Margin/index.ts',
        'src/molecules/Select/index.ts', */
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
				preserveModules: true
    },
    plugins: [Ts()],
    external: ['react'/* , '@ds.e/foundation' */]
}
