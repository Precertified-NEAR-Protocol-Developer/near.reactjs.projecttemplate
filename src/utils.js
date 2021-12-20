import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from './config'
//import { NearConfigurator, getNearConnection} from './NearConfigurator';

const config = getConfig(process.env.NODE_ENV || 'development');
const nearConnection = getNearConnection(config);
const near = new NearConfigurator(nearConnection);

export async function initContract() {
  window.walletConnection = near.getWalletConnection();
  window.accountId = near.getAccountId();
  window.contract = near.getContract();
}

export function logout() {
  near.getWalletConnection().signOut();
  window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
  window.walletConnection.requestSignIn('')
}
