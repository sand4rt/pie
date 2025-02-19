// eslint-disable-next-line @typescript-eslint/no-var-requires
const czConfig = require('./.cz-config.js');

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', czConfig.types.map((t) => t.value)],
        'scope-enum': [2, 'always', czConfig.scopes],
        'references-empty': [2, 'never'],
    },
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w*)\((\w.*)\): (DSW-\d{1,7}) (\w.*)$/,
            headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
            issuePrefixes: [czConfig.ticketNumberPrefix],
        },
    },
};
