/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTOpt, NFTOptInterface } from "../../contracts/NFTOpt";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Filled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_optionId",
        type: "uint32",
      },
    ],
    name: "cancelOption",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_optionId",
        type: "uint32",
      },
    ],
    name: "createOption",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_optionId",
        type: "uint32",
      },
    ],
    name: "exerciseOption",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optionID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "options",
    outputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        internalType: "enum NFTOpt.OptionFlavor",
        name: "flavor",
        type: "uint8",
      },
      {
        internalType: "enum NFTOpt.OptionState",
        name: "state",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interval",
        type: "uint256",
      },
      {
        internalType: "enum NFTOpt.OptionFlavor",
        name: "_flavor",
        type: "uint8",
      },
    ],
    name: "publishOptionRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_optionId",
        type: "uint32",
      },
    ],
    name: "withdrawOptionRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506112c8806100206000396000f3fe60806040526004361061007b5760003560e01c8063409e22051161004e578063409e22051461010e5780635a3ddf22146101545780636e89319a14610170578063d0a3021e1461018c5761007b565b806312065fe01461008057806318b7edeb146100ab5780631d973ac5146100d6578063292a274f146100f2575b600080fd5b34801561008c57600080fd5b506100956101a8565b6040516100a29190610a64565b60405180910390f35b3480156100b757600080fd5b506100c06101b0565b6040516100cd9190610a64565b60405180910390f35b6100f060048036038101906100eb9190610b33565b6101b6565b005b61010c60048036038101906101079190610bea565b6103fe565b005b34801561011a57600080fd5b5061013560048036038101906101309190610c17565b610401565b60405161014b9a99989796959493929190610d12565b60405180910390f35b61016e60048036038101906101699190610bea565b6104cf565b005b61018a60048036038101906101859190610bea565b610517565b005b6101a660048036038101906101a19190610bea565b610a48565b005b600047905090565b60005481565b6040518061014001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020016000815260200183815260200134815260200184815260200182600181111561024957610248610c53565b5b81526020016000600281111561026257610261610c53565b5b81525060016000806000815461027790610ddd565b919050819055815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e082015181600701556101008201518160080160006101000a81548160ff021916908360018111156103be576103bd610c53565b5b02179055506101208201518160080160016101000a81548160ff021916908360028111156103ef576103ee610c53565b5b02179055509050505050505050565b50565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050154908060060154908060070154908060080160009054906101000a900460ff16908060080160019054906101000a900460ff1690508a565b6002600160008363ffffffff16815260200190815260200160002060080160016101000a81548160ff0219169083600281111561050f5761050e610c53565b5b021790555050565b600073ffffffffffffffffffffffffffffffffffffffff16600160008363ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036105c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b990610ea8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160008363ffffffff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461066d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066490610f3a565b60405180910390fd5b6000600281111561068157610680610c53565b5b600160008363ffffffff16815260200190815260200160002060080160019054906101000a900460ff1660028111156106bd576106bc610c53565b5b146106fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f490610fcc565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600160008363ffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036107a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079e90611038565b60405180910390fd5b600160008263ffffffff168152602001908152602001600020600701543373ffffffffffffffffffffffffffffffffffffffff1631101561081d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610814906110ca565b60405180910390fd5b600160008263ffffffff168152602001908152602001600020600601546108426101a8565b1115610883576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087a9061115c565b60405180910390fd5b33600160008363ffffffff16815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600160008363ffffffff1681526020019081526020016000206004018190555060018060008363ffffffff16815260200190815260200160002060080160016101000a81548160ff0219169083600281111561093e5761093d610c53565b5b02179055507fd37cf472a3f5580ea615126f95c25aaaea8c85b6b4036f6430c35a151812c85533826040516109749291906111b7565b60405180910390a160003373ffffffffffffffffffffffffffffffffffffffff16600160008463ffffffff168152602001908152602001600020600601546040516109be90611211565b60006040518083038185875af1925050503d80600081146109fb576040519150601f19603f3d011682016040523d82523d6000602084013e610a00565b606091505b5050905080610a44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3b90611272565b60405180910390fd5b5050565b50565b6000819050919050565b610a5e81610a4b565b82525050565b6000602082019050610a796000830184610a55565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aaf82610a84565b9050919050565b610abf81610aa4565b8114610aca57600080fd5b50565b600081359050610adc81610ab6565b92915050565b610aeb81610a4b565b8114610af657600080fd5b50565b600081359050610b0881610ae2565b92915050565b60028110610b1b57600080fd5b50565b600081359050610b2d81610b0e565b92915050565b600080600080600060a08688031215610b4f57610b4e610a7f565b5b6000610b5d88828901610acd565b9550506020610b6e88828901610af9565b9450506040610b7f88828901610af9565b9350506060610b9088828901610af9565b9250506080610ba188828901610b1e565b9150509295509295909350565b600063ffffffff82169050919050565b610bc781610bae565b8114610bd257600080fd5b50565b600081359050610be481610bbe565b92915050565b600060208284031215610c0057610bff610a7f565b5b6000610c0e84828501610bd5565b91505092915050565b600060208284031215610c2d57610c2c610a7f565b5b6000610c3b84828501610af9565b91505092915050565b610c4d81610aa4565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110610c9357610c92610c53565b5b50565b6000819050610ca482610c82565b919050565b6000610cb482610c96565b9050919050565b610cc481610ca9565b82525050565b60038110610cdb57610cda610c53565b5b50565b6000819050610cec82610cca565b919050565b6000610cfc82610cde565b9050919050565b610d0c81610cf1565b82525050565b600061014082019050610d28600083018d610c44565b610d35602083018c610c44565b610d42604083018b610c44565b610d4f606083018a610a55565b610d5c6080830189610a55565b610d6960a0830188610a55565b610d7660c0830187610a55565b610d8360e0830186610a55565b610d91610100830185610cbb565b610d9f610120830184610d03565b9b9a5050505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610de882610a4b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e1a57610e19610dae565b5b600182019050919050565b600082825260208201905092915050565b7f4f7074696f6e2077697468207468652073706563696669656420696420646f6560008201527f73206e6f74206578697374000000000000000000000000000000000000000000602082015250565b6000610e92602b83610e25565b9150610e9d82610e36565b604082019050919050565b60006020820190508181036000830152610ec181610e85565b9050919050565b7f4f7074696f6e20697320616c72656164792066756c66696c6c6564206279206160008201527f2073656c6c657200000000000000000000000000000000000000000000000000602082015250565b6000610f24602783610e25565b9150610f2f82610ec8565b604082019050919050565b60006020820190508181036000830152610f5381610f17565b9050919050565b7f4f7074696f6e206973206e6f7420696e2074686520726571756573742073746160008201527f7465000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fb6602283610e25565b9150610fc182610f5a565b604082019050919050565b60006020820190508181036000830152610fe581610fa9565b9050919050565b7f53656c6c6572206973207468652073616d652061732062757965720000000000600082015250565b6000611022601b83610e25565b915061102d82610fec565b602082019050919050565b6000602082019050818103600083015261105181611015565b9050919050565b7f53656c6c657220646f6573206e6f74206861766520656e6f7567682062616c6160008201527f6e63650000000000000000000000000000000000000000000000000000000000602082015250565b60006110b4602383610e25565b91506110bf82611058565b604082019050919050565b600060208201905081810360008301526110e3816110a7565b9050919050565b7f4e6f7420656e6f7567682066756e647320746f2070617920746865207072656d60008201527f69756d20746f207468652073656c6c6572000000000000000000000000000000602082015250565b6000611146603183610e25565b9150611151826110ea565b604082019050919050565b6000602082019050818103600083015261117581611139565b9050919050565b6000819050919050565b60006111a161119c61119784610bae565b61117c565b610a4b565b9050919050565b6111b181611186565b82525050565b60006040820190506111cc6000830185610c44565b6111d960208301846111a8565b9392505050565b600081905092915050565b50565b60006111fb6000836111e0565b9150611206826111eb565b600082019050919050565b600061121c826111ee565b9150819050919050565b7f5472616e73616374696f6e206661696c65640000000000000000000000000000600082015250565b600061125c601283610e25565b915061126782611226565b602082019050919050565b6000602082019050818103600083015261128b8161124f565b905091905056fea264697066735822122047fc650d586a4531283e6b18fdaa0377ce4d8ec93d542e4dd356f795991e33dd64736f6c634300080e0033";

type NFTOptConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTOptConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTOpt__factory extends ContractFactory {
  constructor(...args: NFTOptConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTOpt> {
    return super.deploy(overrides || {}) as Promise<NFTOpt>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTOpt {
    return super.attach(address) as NFTOpt;
  }
  override connect(signer: Signer): NFTOpt__factory {
    return super.connect(signer) as NFTOpt__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTOptInterface {
    return new utils.Interface(_abi) as NFTOptInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFTOpt {
    return new Contract(address, _abi, signerOrProvider) as NFTOpt;
  }
}
