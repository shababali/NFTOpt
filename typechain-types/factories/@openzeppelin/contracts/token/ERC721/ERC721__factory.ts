/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200278d3803806200278d8339818101604052810190620000379190620002be565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a7565b8280546200007f9062000372565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018a826200013f565b810181811067ffffffffffffffff82111715620001ac57620001ab62000150565b5b80604052505050565b6000620001c162000121565b9050620001cf82826200017f565b919050565b600067ffffffffffffffff821115620001f257620001f162000150565b5b620001fd826200013f565b9050602081019050919050565b60005b838110156200022a5780820151818401526020810190506200020d565b838111156200023a576000848401525b50505050565b6000620002576200025184620001d4565b620001b5565b9050828152602081018484840111156200027657620002756200013a565b5b620002838482856200020a565b509392505050565b600082601f830112620002a357620002a262000135565b5b8151620002b584826020860162000240565b91505092915050565b60008060408385031215620002d857620002d76200012b565b5b600083015167ffffffffffffffff811115620002f957620002f862000130565b5b62000307858286016200028b565b925050602083015167ffffffffffffffff8111156200032b576200032a62000130565b5b62000339858286016200028b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038b57607f821691505b602082108103620003a157620003a062000343565b5b50919050565b6123d680620003b76000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e99190611433565b6102bc565b6040516100fb919061147b565b60405180910390f35b61010c61039e565b604051610119919061152f565b60405180910390f35b61013c60048036038101906101379190611587565b610430565b60405161014991906115f5565b60405180910390f35b61016c6004803603810190610167919061163c565b6104b5565b005b6101886004803603810190610183919061167c565b6105cc565b005b6101a4600480360381019061019f919061167c565b61062c565b005b6101c060048036038101906101bb9190611587565b61064c565b6040516101cd91906115f5565b60405180910390f35b6101f060048036038101906101eb91906116cf565b6106fd565b6040516101fd919061170b565b60405180910390f35b61020e6107b4565b60405161021b919061152f565b60405180910390f35b61023e60048036038101906102399190611752565b610846565b005b61025a600480360381019061025591906118c7565b61085c565b005b61027660048036038101906102719190611587565b6108be565b604051610283919061152f565b60405180910390f35b6102a660048036038101906102a1919061194a565b610965565b6040516102b3919061147b565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103975750610396826109f9565b5b9050919050565b6060600080546103ad906119b9565b80601f01602080910402602001604051908101604052809291908181526020018280546103d9906119b9565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b82610a63565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190611a5c565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c08261064c565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610530576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052790611aee565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661054f610acf565b73ffffffffffffffffffffffffffffffffffffffff16148061057e575061057d81610578610acf565b610965565b5b6105bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b490611b80565b60405180910390fd5b6105c78383610ad7565b505050565b6105dd6105d7610acf565b82610b90565b61061c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061390611c12565b60405180910390fd5b610627838383610c6e565b505050565b6106478383836040518060200160405280600081525061085c565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106eb90611ca4565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361076d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076490611d36565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107c3906119b9565b80601f01602080910402602001604051908101604052809291908181526020018280546107ef906119b9565b801561083c5780601f106108115761010080835404028352916020019161083c565b820191906000526020600020905b81548152906001019060200180831161081f57829003601f168201915b5050505050905090565b610858610851610acf565b8383610ed4565b5050565b61086d610867610acf565b83610b90565b6108ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a390611c12565b60405180910390fd5b6108b884848484611040565b50505050565b60606108c982610a63565b610908576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ff90611dc8565b60405180910390fd5b600061091261109c565b90506000815111610932576040518060200160405280600081525061095d565b8061093c846110b3565b60405160200161094d929190611e24565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610b4a8361064c565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610b9b82610a63565b610bda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd190611eba565b60405180910390fd5b6000610be58361064c565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c275750610c268185610965565b5b80610c6557508373ffffffffffffffffffffffffffffffffffffffff16610c4d84610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610c8e8261064c565b73ffffffffffffffffffffffffffffffffffffffff1614610ce4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cdb90611f4c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4a90611fde565b60405180910390fd5b610d5e838383611213565b610d69600082610ad7565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610db9919061202d565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e109190612061565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ecf838383611218565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610f42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3990612103565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611033919061147b565b60405180910390a3505050565b61104b848484610c6e565b6110578484848461121d565b611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108d90612195565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600082036110fa576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061120e565b600082905060005b6000821461112c578080611115906121b5565b915050600a82611125919061222c565b9150611102565b60008167ffffffffffffffff8111156111485761114761179c565b5b6040519080825280601f01601f19166020018201604052801561117a5781602001600182028036833780820191505090505b5090505b6000851461120757600182611193919061202d565b9150600a856111a2919061225d565b60306111ae9190612061565b60f81b8183815181106111c4576111c361228e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611200919061222c565b945061117e565b8093505050505b919050565b505050565b505050565b600061123e8473ffffffffffffffffffffffffffffffffffffffff166113a4565b15611397578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611267610acf565b8786866040518563ffffffff1660e01b81526004016112899493929190612312565b6020604051808303816000875af19250505080156112c557506040513d601f19601f820116820180604052508101906112c29190612373565b60015b611347573d80600081146112f5576040519150601f19603f3d011682016040523d82523d6000602084013e6112fa565b606091505b50600081510361133f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133690612195565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061139c565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611410816113db565b811461141b57600080fd5b50565b60008135905061142d81611407565b92915050565b600060208284031215611449576114486113d1565b5b60006114578482850161141e565b91505092915050565b60008115159050919050565b61147581611460565b82525050565b6000602082019050611490600083018461146c565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114d05780820151818401526020810190506114b5565b838111156114df576000848401525b50505050565b6000601f19601f8301169050919050565b600061150182611496565b61150b81856114a1565b935061151b8185602086016114b2565b611524816114e5565b840191505092915050565b6000602082019050818103600083015261154981846114f6565b905092915050565b6000819050919050565b61156481611551565b811461156f57600080fd5b50565b6000813590506115818161155b565b92915050565b60006020828403121561159d5761159c6113d1565b5b60006115ab84828501611572565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115df826115b4565b9050919050565b6115ef816115d4565b82525050565b600060208201905061160a60008301846115e6565b92915050565b611619816115d4565b811461162457600080fd5b50565b60008135905061163681611610565b92915050565b60008060408385031215611653576116526113d1565b5b600061166185828601611627565b925050602061167285828601611572565b9150509250929050565b600080600060608486031215611695576116946113d1565b5b60006116a386828701611627565b93505060206116b486828701611627565b92505060406116c586828701611572565b9150509250925092565b6000602082840312156116e5576116e46113d1565b5b60006116f384828501611627565b91505092915050565b61170581611551565b82525050565b600060208201905061172060008301846116fc565b92915050565b61172f81611460565b811461173a57600080fd5b50565b60008135905061174c81611726565b92915050565b60008060408385031215611769576117686113d1565b5b600061177785828601611627565b92505060206117888582860161173d565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117d4826114e5565b810181811067ffffffffffffffff821117156117f3576117f261179c565b5b80604052505050565b60006118066113c7565b905061181282826117cb565b919050565b600067ffffffffffffffff8211156118325761183161179c565b5b61183b826114e5565b9050602081019050919050565b82818337600083830152505050565b600061186a61186584611817565b6117fc565b90508281526020810184848401111561188657611885611797565b5b611891848285611848565b509392505050565b600082601f8301126118ae576118ad611792565b5b81356118be848260208601611857565b91505092915050565b600080600080608085870312156118e1576118e06113d1565b5b60006118ef87828801611627565b945050602061190087828801611627565b935050604061191187828801611572565b925050606085013567ffffffffffffffff811115611932576119316113d6565b5b61193e87828801611899565b91505092959194509250565b60008060408385031215611961576119606113d1565b5b600061196f85828601611627565b925050602061198085828601611627565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119d157607f821691505b6020821081036119e4576119e361198a565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611a46602c836114a1565b9150611a51826119ea565b604082019050919050565b60006020820190508181036000830152611a7581611a39565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ad86021836114a1565b9150611ae382611a7c565b604082019050919050565b60006020820190508181036000830152611b0781611acb565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000611b6a6038836114a1565b9150611b7582611b0e565b604082019050919050565b60006020820190508181036000830152611b9981611b5d565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000611bfc6031836114a1565b9150611c0782611ba0565b604082019050919050565b60006020820190508181036000830152611c2b81611bef565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000611c8e6029836114a1565b9150611c9982611c32565b604082019050919050565b60006020820190508181036000830152611cbd81611c81565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000611d20602a836114a1565b9150611d2b82611cc4565b604082019050919050565b60006020820190508181036000830152611d4f81611d13565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000611db2602f836114a1565b9150611dbd82611d56565b604082019050919050565b60006020820190508181036000830152611de181611da5565b9050919050565b600081905092915050565b6000611dfe82611496565b611e088185611de8565b9350611e188185602086016114b2565b80840191505092915050565b6000611e308285611df3565b9150611e3c8284611df3565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611ea4602c836114a1565b9150611eaf82611e48565b604082019050919050565b60006020820190508181036000830152611ed381611e97565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611f366025836114a1565b9150611f4182611eda565b604082019050919050565b60006020820190508181036000830152611f6581611f29565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611fc86024836114a1565b9150611fd382611f6c565b604082019050919050565b60006020820190508181036000830152611ff781611fbb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061203882611551565b915061204383611551565b92508282101561205657612055611ffe565b5b828203905092915050565b600061206c82611551565b915061207783611551565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120ac576120ab611ffe565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006120ed6019836114a1565b91506120f8826120b7565b602082019050919050565b6000602082019050818103600083015261211c816120e0565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061217f6032836114a1565b915061218a82612123565b604082019050919050565b600060208201905081810360008301526121ae81612172565b9050919050565b60006121c082611551565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036121f2576121f1611ffe565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061223782611551565b915061224283611551565b925082612252576122516121fd565b5b828204905092915050565b600061226882611551565b915061227383611551565b925082612283576122826121fd565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006122e4826122bd565b6122ee81856122c8565b93506122fe8185602086016114b2565b612307816114e5565b840191505092915050565b600060808201905061232760008301876115e6565b61233460208301866115e6565b61234160408301856116fc565b818103606083015261235381846122d9565b905095945050505050565b60008151905061236d81611407565b92915050565b600060208284031215612389576123886113d1565b5b60006123978482850161235e565b9150509291505056fea264697066735822122098293507656f6f1726598407542d2b88e4b42cdf6953017bbd572f8d4cfab6b264736f6c634300080e0033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
