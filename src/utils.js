import getConfig from './config'
import getNearWalletConnection from './near-wallet-connection'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')
const configurator = getNearWalletConnection(nearConfig);

export async function initContract() {
  window.walletConnection = await configurator.getWalletConnection();
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
