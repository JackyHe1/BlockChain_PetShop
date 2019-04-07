var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "ready layer crucial ask denial crop witness neither fatigue tool warm green";

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        }
    }
};

//Add a Ropsten network definition
module.exports = {
    networks: {
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/0ad4a515e882486899d2ee67e9dd3d30")
            },
            network_id: 3
        }
    }
};
