import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';

import rollupAlias from '@rollup/plugin-alias';
const alias = fromRollup(rollupAlias);

const __dirname = new URL('.', import.meta.url).pathname;

export default {
    nodeResolve: true,
    plugins: [
        alias({
            entries: [
                { find: '@domg-lib/common-utilities', replacement: `${__dirname}libs/common/utilities/src` }
            ]
        }),
        esbuildPlugin({
            target: 'es2020',
            ts: true
        })
    ],
};
