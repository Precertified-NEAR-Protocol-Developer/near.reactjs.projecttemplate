import { connect, Contract, keyStores, WalletConnection, Account } from 'near-api-js'
import getConfig from './config'
import getNearConfigurator from './near-configurator'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')
const configurator = getNearConfigurator(nearConfig);

export async function initContract() {
  const near = await configurator.getNearConnection();
  window.walletConnection = new WalletConnection(near)
  window.accountId = window.walletConnection.getAccountId()
  window.account = new Account(near.connection, accountId);
  window.contract = new Contract(window.walletConnection.account(), nearConfig.contractName, {
    viewMethods: [],
    changeMethods: [],
  })
}

export function logout() {
  window.walletConnection.signOut()
  window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
  window.walletConnection.requestSignIn('')
}
