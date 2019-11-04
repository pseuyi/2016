module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "semi": ["error", "never"],
        "space-before-function-paren": ["error", "always"],
        "arrow-spacing": ["error", { "before": false, "after": false }],
        "prop=types": [0]
    },
    valid: [
    {
        code: "window.alert()",
        globals: [ "window" ]
    }
]
}
