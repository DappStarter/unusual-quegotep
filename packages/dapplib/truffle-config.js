require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth shift protect guess knife bone throw'; 
let testAccounts = [
"0x5aea547871efe197e8824c96bcb4a1f9db64dc0f46a03f2de6dcc111f14e159e",
"0x133aa8676e95f939a1bd546cb018480ea4236d2b46def8df8c37ec2cb0962933",
"0xb7ba174820aaf8027eaa06963d44357e07a2b3b118041a09ec06e586f9538500",
"0x4bde6e7c3c325fa4299e10c3cc74bb871c115467b3d0b2ab3d2e936e8d004fb1",
"0xf4ba4496c5954641cf665731cda67994209b34c9103b8cadcec9b06e6a6fbf9b",
"0x34c6afe8310c0b2f053803d02c5fcbbb1672e9ba8d664598b037240cb888298f",
"0xe3f6365b51556d407e00323416691de0db09c2fcbaf7ec97ab3c4330f539e7d7",
"0x5b1c933cf93085094af3c07e9bb1eed1a65ff9ccdd230a7c6e9c96098a875b95",
"0xbdfcb3668f1e23aecdcf76c8cb0454466433357d830b9d671b8300337d3f1b67",
"0x1d56ec7e23e9bb92c705696fb9041649bb5320c0a9894f987da6cb63795f8814"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

