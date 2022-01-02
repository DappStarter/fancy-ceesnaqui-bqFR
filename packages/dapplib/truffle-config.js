require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stomach razor noise horse gesture merry fog genius'; 
let testAccounts = [
"0x40ab1c9e2cf0d3d348ea1a66b715c458c837923e8990d1cf965f7a7ead7ce3c9",
"0x319be29cae1e80f89b884901030554d31a7dad80838ec8d69fff947d53c6bedd",
"0xb6c8ed80d0b57e8f372406bee76af15c95fc4696a67095424fcd28f59d65867d",
"0xb7f0a12e552bb1b9cbca208708238d128db9eb5ad2f7636f26288925e10797c2",
"0x8e74ee015efd1bcde1ba0656798c88e8864ff3da3e5a2e21ee5a196f2e351610",
"0x127c62d848c819599b229fadd85c130ca0db68004bfbfd2cdf23d56eb17f84b5",
"0x38bb1d8a16405afe0e7f0b9fae7437eaa9e7eb01f8efc260817dd9852e35b1f3",
"0xfe42f18f3eccce38272a78994aeafec5e23cf7110bf468d729d21e3e1a39c896",
"0x5b85afd9e0f11ba6ee1974b20fbced30d4c96bc9fbbd6d482bccc1c7b3212f98",
"0xe7ad88c961bdb8fdd2215b4d67f06028c1f10a5d8e2693b0202a31b1c2a46aa9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


