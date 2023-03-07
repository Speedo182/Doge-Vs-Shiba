import Web3 from 'web3';
import { contractAddress } from './contractAddress';
import { abi } from './abi';

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

const contract = new web3.eth.Contract(abi, contractAddress);

export { web3, contract };
