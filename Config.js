const Configurations = {
    development: {
        mainUrl: "http://localhost",
        prankUrl: "http://localhost",
        servIp: "5000"
    },
    production: {
        mainUrl: "http://localhost",
        prankUrl: "http://localhost",
        servIp: "5000"
    },
};

function getEnvironment() {
    const platform = "development";
    return Configurations[platform];
}

const Config = getEnvironment();
module.exports = Config;
