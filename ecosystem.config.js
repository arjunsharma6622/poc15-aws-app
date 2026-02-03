module.exports = {
    apps: [
        {
            name: "poc15-aws-express-app",
            script: "index.js",
            instances: "max",
            exce_mode: "cluster",
            env: {
                PORT: 8080
            }
        }
    ]
}