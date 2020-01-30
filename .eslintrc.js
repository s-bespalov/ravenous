module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "commonjs": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    settings: {
        react: {
            version: require('./package.json').dependencies.react,
        },
    },
    "rules": {
    }
};
