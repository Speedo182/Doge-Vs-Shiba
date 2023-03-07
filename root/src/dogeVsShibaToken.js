// import Web3 and the contract ABI
import Web3 from 'web3';
import { abi } from './abi';
import { contractAddress } from './contractAddress';

// connect to the Ethereum network using Infura
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// create a new contract instance
const contract = new web3.eth.Contract(abi, contractAddress);

// set the default account to use for transactions
web3.eth.defaultAccount = 'YOUR_ETH_ADDRESS';

// define the game contract functions
const DogeVsShibaToken = {
  buyTokens: async (amount) => {
    try {
      const result = await contract.methods.buyTokens().send({ value: web3.utils.toWei(amount, 'ether') });
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  sellTokens: async (amount) => {
    try {
      const result = await contract.methods.sellTokens(web3.utils.toWei(amount, 'ether')).send();
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  getBalance: async () => {
    try {
      const result = await contract.methods.balanceOf(web3.eth.defaultAccount).call();
      return web3.utils.fromWei(result, 'ether');
    } catch (error) {
      console.log(error);
    }
  },

  getTotalSupply: async () => {
    try {
      const result = await contract.methods.totalSupply().call();
      return web3.utils.fromWei(result, 'ether');
    } catch (error) {
      console.log(error);
    }
  },

  getCurrentPrice: async () => {
    try {
      const result = await contract.methods.getCurrentPrice().call();
      return web3.utils.fromWei(result, 'ether');
    } catch (error) {
      console.log(error);
    }
  }
};

export default DogeVsShibaToken;
