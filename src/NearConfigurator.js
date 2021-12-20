import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';

export async function getNearConnection(config) {
  return await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, config));
}

export default class MyNearConfig {
  constructor(nearConfig) {
    this.nearConfig = nearConfig;
    this.walletConnection = new WalletConnection(nearConfig);
  }

  getWalletConnection() {
    return this.walletConnection;
  }

  getAccountId() {
    return this.getWalletConnection().getAccountId();
  }

  async getContract() {
    return await new Contract(this.walletConnection.account(), this.config.contractName, {
        viewMethods: [],
        changeMethods: [],
    });
  }
}