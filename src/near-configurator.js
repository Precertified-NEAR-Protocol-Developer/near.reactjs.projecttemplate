import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';

export function initConnection(config) {
    const near = connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, config))
    return near;
}

export class NearConfigurator {
  constructor(nearConfig) {
    this.account = null;
    this.walletConnection = null;
    this.nearConnection = null;
    this.nearConfig = nearConfig;
  }

   getNearConnection() {
        if(this.nearConnection === null) {
            this.nearConnection = initConnection(this.nearConfig);
        }
        return this.nearConnection;
    }
  

  getWalletConnection() {
    if(this.walletConnection === null) {
        this.walletConnection = new WalletConnection(this.getNearConnection());
    }
    return this.walletConnection;
  }

  getAccount() {
    if(this.account === null) {
        this.account = new Account(this.nearConnection, accountId);
    }
    return this.account;
  }

  getAccountId() {
    return this.getWalletConnection().getAccountId();
  }

  async getContract() {
    return await new Contract(this.getWalletConnection().account(), this.nearConfig.contractName, {
        viewMethods: [],
        changeMethods: [],
    });
  }
}

export default function getNearConfigurator(nearConfig) {
    return new NearConfigurator(nearConfig);
}
