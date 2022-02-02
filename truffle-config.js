module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
        },
        network_id: 2111,   // This network is yours, in the cloud.
        production: false    // Treats this network as if it was a public net. (default: false)
    },
    mocha: {
        // timeout: 100000
    },

    compilers: {
        solc: {
            version: "0.8.6",   // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        }
    },
    // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
    // }
};
