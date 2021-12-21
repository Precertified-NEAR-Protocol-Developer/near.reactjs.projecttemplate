import { connect, Contract, keyStores, WalletConnection, Account } from 'near-api-js'
import getConfig from './config'
import getNearConfigurator from './near-configurator'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')
const configurator = getNearConfigurator(nearConfig);

export async function initContract() {
  const near = await configurator.getNearConnection();
  window.walletConnection = await configurator.getWalletConnection()
  window.accountId = await configurator.getAccountId();
  window.account = await configurator.getAccount();
  window.contract = await configurator.getContract();
}

export async function logout() {
  (await configurator.getWalletConnection()).signOut();
  window.location.replace(window.location.origin + window.location.pathname)
}

export async function login() {
  (await configurator.getWalletConnection()).requestSignIn('');
}
