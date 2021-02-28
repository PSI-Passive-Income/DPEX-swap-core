/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DPexPairInitHash } from "../DPexPairInitHash";

export class DPexPairInitHash__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DPexPairInitHash> {
    return super.deploy(overrides || {}) as Promise<DPexPairInitHash>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DPexPairInitHash {
    return super.attach(address) as DPexPairInitHash;
  }
  connect(signer: Signer): DPexPairInitHash__factory {
    return super.connect(signer) as DPexPairInitHash__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DPexPairInitHash {
    return new Contract(address, _abi, signerOrProvider) as DPexPairInitHash;
  }
}

const _abi = [
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061316e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636d4ce63c14610030575b600080fd5b61003861004a565b60408051918252519081900360200190f35b600060606040518060200161005e90610106565b6020820181038252601f19601f820116604052509050806040516020018082805190602001908083835b602083106100c557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610088565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012091505090565b613025806101148339019056fe60806040526001600d553480156200001657600080fd5b5060006200002362000145565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6040518060600160405280602381526020016200300260239139805160209182012060408051808201825260018152603160f81b90840152805180840194909452838101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606084015260808301939093523060a0808401919091528351808403909101815260c09092019092528051910120600455600680546001600160a01b0319163317905562000149565b3390565b612ea980620001596000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c8063715018a61161010f578063ba9a7a56116100a2578063d505accf11610071578063d505accf14610626578063dd62ed3e14610684578063f2fde38b146106bf578063fff6cae9146106f2576101e5565b8063ba9a7a56146105db578063bc25cf77146105e3578063c45a015514610616578063d21220a71461061e576101e5565b806389afcb44116100de57806389afcb44146105465780638da5cb5b1461059257806395d89b411461059a578063a9059cbb146105a2576101e5565b8063715018a6146104fb5780637464fc3d146105035780637ecebe001461050b578063893d20e81461053e576101e5565b806330adf81f116101875780635909c0d5116101565780635909c0d5146104855780635a3d54931461048d5780636a6278421461049557806370a08231146104c8576101e5565b806330adf81f1461041c578063313ce567146104245780633644e51514610442578063485cc9551461044a576101e5565b8063095ea7b3116101c3578063095ea7b3146103415780630dfe16811461038e57806318160ddd146103bf57806323b872dd146103d9576101e5565b8063022c0d9f146101ea57806306fdde03146102855780630902f1ac14610302575b600080fd5b6102836004803603608081101561020057600080fd5b81359160208101359173ffffffffffffffffffffffffffffffffffffffff604083013516919081019060808101606082013564010000000081111561024457600080fd5b82018360208201111561025657600080fd5b8035906020019184600183028401116401000000008311171561027857600080fd5b5090925090506106fa565b005b61028d610dd0565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102c75781810151838201526020016102af565b50505050905090810190601f1680156102f45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61030a610dec565b604080516dffffffffffffffffffffffffffff948516815292909316602083015263ffffffff168183015290519081900360600190f35b61037a6004803603604081101561035757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610e41565b604080519115158252519081900360200190f35b610396610e58565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6103c7610e74565b60408051918252519081900360200190f35b61037a600480360360608110156103ef57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610e7a565b6103c7610f53565b61042c610f77565b6040805160ff9092168252519081900360200190f35b6103c7610f7c565b6102836004803603604081101561046057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610f82565b6103c761105b565b6103c7611061565b6103c7600480360360208110156104ab57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611067565b6103c7600480360360208110156104de57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166113fd565b61028361140f565b6103c7611526565b6103c76004803603602081101561052157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661152c565b61039661153e565b6105796004803603602081101561055c57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661154d565b6040805192835260208301919091528051918290030190f35b6103966119d8565b61028d6119f4565b61037a600480360360408110156105b857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611a2d565b6103c7611a3a565b610283600480360360208110156105f957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611a40565b610396611c2d565b610396611c49565b610283600480360360e081101561063c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611c65565b6103c76004803603604081101561069a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611f31565b610283600480360360208110156106d557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611f4e565b6102836120ef565b600d5460011461076b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f445045583a204c4f434b45440000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600d558415158061077e5750600084115b6107e957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f445045583a20494e53554646494349454e545f4f55545055545f414d4f554e54604482015290519081900360640190fd5b6000806107f4610dec565b5091509150816dffffffffffffffffffffffffffff16871080156108275750806dffffffffffffffffffffffffffff1686105b61089257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f445045583a20494e53554646494349454e545f4c495155494449545900000000604482015290519081900360640190fd5b600754600854600091829173ffffffffffffffffffffffffffffffffffffffff9182169190811690891682148015906108f757508073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614155b61096257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f445045583a20494e56414c49445f544f00000000000000000000000000000000604482015290519081900360640190fd5b8a1561097357610973828a8d6122d5565b891561098457610984818a8c6122d5565b8615610a50578873ffffffffffffffffffffffffffffffffffffffff16635461e50a338d8d8c8c6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015610a3757600080fd5b505af1158015610a4b573d6000803e3d6000fd5b505050505b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8416916370a08231916024808301926020929190829003018186803b158015610abc57600080fd5b505afa158015610ad0573d6000803e3d6000fd5b505050506040513d6020811015610ae657600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191955073ffffffffffffffffffffffffffffffffffffffff8316916370a0823191602480820192602092909190829003018186803b158015610b5857600080fd5b505afa158015610b6c573d6000803e3d6000fd5b505050506040513d6020811015610b8257600080fd5b5051925060009150506dffffffffffffffffffffffffffff85168a90038311610bac576000610bc2565b89856dffffffffffffffffffffffffffff160383035b9050600089856dffffffffffffffffffffffffffff16038311610be6576000610bfc565b89856dffffffffffffffffffffffffffff160383035b90506000821180610c0d5750600081115b610c7857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f445045583a20494e53554646494349454e545f494e5055545f414d4f554e5400604482015290519081900360640190fd5b6000610c9a610c888460026124e2565b610c94876103e86124e2565b90612568565b90506000610cac610c888460026124e2565b9050610cd8620f4240610cd26dffffffffffffffffffffffffffff8b8116908b166124e2565b906124e2565b610ce283836124e2565b1015610d4f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f445045583a204b00000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5050610d5d848488886125da565b60408051838152602081018390528082018d9052606081018c9052905173ffffffffffffffffffffffffffffffffffffffff8b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600d55505050505050505050565b604051806060016040528060238152602001612e516023913981565b6009546dffffffffffffffffffffffffffff808216926e0100000000000000000000000000008304909116917c0100000000000000000000000000000000000000000000000000000000900463ffffffff1690565b6000610e4e338484612890565b5060015b92915050565b60075473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b73ffffffffffffffffffffffffffffffffffffffff831660009081526003602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14610f3e5773ffffffffffffffffffffffffffffffffffffffff84166000908152600360209081526040808320338452909152902054610f0c9083612568565b73ffffffffffffffffffffffffffffffffffffffff851660009081526003602090815260408083203384529091529020555b610f498484846128ff565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60045481565b60065473ffffffffffffffffffffffffffffffffffffffff16331461100857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f445045583a20464f5242494444454e0000000000000000000000000000000000604482015290519081900360640190fd5b6007805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560088054929093169116179055565b600a5481565b600b5481565b6000600d546001146110da57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f445045583a204c4f434b45440000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600d819055806110ea610dec565b50600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905193955091935060009273ffffffffffffffffffffffffffffffffffffffff909116916370a08231916024808301926020929190829003018186803b15801561116457600080fd5b505afa158015611178573d6000803e3d6000fd5b505050506040513d602081101561118e57600080fd5b5051600854604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905192935060009273ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561120757600080fd5b505afa15801561121b573d6000803e3d6000fd5b505050506040513d602081101561123157600080fd5b505190506000611251836dffffffffffffffffffffffffffff8716612568565b9050600061126f836dffffffffffffffffffffffffffff8716612568565b9050600061127d87876129d4565b600154909150806112b4576112a06103e8610c9461129b87876124e2565b612b42565b98506112af60006103e8612b94565b611305565b6113026dffffffffffffffffffffffffffff89166112d286846124e2565b816112d957fe5b046dffffffffffffffffffffffffffff89166112f586856124e2565b816112fc57fe5b04612c39565b98505b6000891161135e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612e0b6023913960400191505060405180910390fd5b6113688a8a612b94565b61137486868a8a6125da565b81156113b0576009546113ac906dffffffffffffffffffffffffffff808216916e0100000000000000000000000000009004166124e2565b600c555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600d5550949695505050505050565b60026020526000908152604090205481565b611417612c51565b73ffffffffffffffffffffffffffffffffffffffff166114356119d8565b73ffffffffffffffffffffffffffffffffffffffff16146114b757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600c5481565b60056020526000908152604090205481565b60006115486119d8565b905090565b600080600d546001146115c157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f445045583a204c4f434b45440000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600d819055806115d1610dec565b50600754600854604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905194965092945073ffffffffffffffffffffffffffffffffffffffff9182169391169160009184916370a08231916024808301926020929190829003018186803b15801561165357600080fd5b505afa158015611667573d6000803e3d6000fd5b505050506040513d602081101561167d57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925060009173ffffffffffffffffffffffffffffffffffffffff8516916370a08231916024808301926020929190829003018186803b1580156116f157600080fd5b505afa158015611705573d6000803e3d6000fd5b505050506040513d602081101561171b57600080fd5b50513060009081526002602052604081205491925061173a88886129d4565b6001549091508061174b84876124e2565b8161175257fe5b049a508061176084866124e2565b8161176757fe5b04995060008b11801561177a575060008a115b6117cf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612e2e6023913960400191505060405180910390fd5b6117d93084612c55565b6117e4878d8d6122d5565b6117ef868d8c6122d5565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8916916370a08231916024808301926020929190829003018186803b15801561185b57600080fd5b505afa15801561186f573d6000803e3d6000fd5b505050506040513d602081101561188557600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191965073ffffffffffffffffffffffffffffffffffffffff8816916370a0823191602480820192602092909190829003018186803b1580156118f757600080fd5b505afa15801561190b573d6000803e3d6000fd5b505050506040513d602081101561192157600080fd5b5051935061193185858b8b6125da565b811561196d57600954611969906dffffffffffffffffffffffffffff808216916e0100000000000000000000000000009004166124e2565b600c555b604080518c8152602081018c9052815173ffffffffffffffffffffffffffffffffffffffff8f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600d81905550915091565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6040518060400160405280600781526020017f445045582d4c500000000000000000000000000000000000000000000000000081525081565b6000610e4e3384846128ff565b6103e881565b600d54600114611ab157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f445045583a204c4f434b45440000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600d55600754600854600954604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff9485169490931692611b879285928792611b82926dffffffffffffffffffffffffffff169185916370a0823191602480820192602092909190829003018186803b158015611b5057600080fd5b505afa158015611b64573d6000803e3d6000fd5b505050506040513d6020811015611b7a57600080fd5b505190612568565b6122d5565b611c238184611b826009600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611b5057600080fd5b50506001600d5550565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b60085473ffffffffffffffffffffffffffffffffffffffff1681565b42841015611cd457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f556e697377617056323a20455850495245440000000000000000000000000000604482015290519081900360640190fd5b60045473ffffffffffffffffffffffffffffffffffffffff80891660008181526005602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e0850182528051908301207f19010000000000000000000000000000000000000000000000000000000000006101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e2808201937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa158015611e35573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811615801590611eb057508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611f1b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b611f26898989612890565b505050505050505050565b600360209081526000928352604080842090915290825290205481565b611f56612c51565b73ffffffffffffffffffffffffffffffffffffffff16611f746119d8565b73ffffffffffffffffffffffffffffffffffffffff1614611ff657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116612062576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612de56026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600d5460011461216057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f445045583a204c4f434b45440000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600d55600754604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516122ce9273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b1580156121d757600080fd5b505afa1580156121eb573d6000803e3d6000fd5b505050506040513d602081101561220157600080fd5b5051600854604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561227457600080fd5b505afa158015612288573d6000803e3d6000fd5b505050506040513d602081101561229e57600080fd5b50516009546dffffffffffffffffffffffffffff808216916e0100000000000000000000000000009004166125da565b6001600d55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b602083106123db57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161239e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461243d576040519150601f19603f3d011682016040523d82523d6000602084013e612442565b606091505b5091509150818015612470575080511580612470575080806020019051602081101561246d57600080fd5b50515b6124db57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f445045583a205452414e534645525f4641494c45440000000000000000000000604482015290519081900360640190fd5b5050505050565b60008115806124fd575050808202828282816124fa57fe5b04145b610e5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b80820382811115610e5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6dffffffffffffffffffffffffffff841180159061260657506dffffffffffffffffffffffffffff8311155b61267157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f445045583a204f564552464c4f57000000000000000000000000000000000000604482015290519081900360640190fd5b60095463ffffffff428116917c0100000000000000000000000000000000000000000000000000000000900481168203908116158015906126c157506dffffffffffffffffffffffffffff841615155b80156126dc57506dffffffffffffffffffffffffffff831615155b15612786578063ffffffff16612719856126f586612d0d565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1690612d31565b600a80547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff929092169290920201905563ffffffff8116612759846126f587612d0d565b600b80547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff92909216929092020190555b600980547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000166dffffffffffffffffffffffffffff888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff166e0100000000000000000000000000008883168102919091177bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167c010000000000000000000000000000000000000000000000000000000063ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff808416600081815260036020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604090205461292f9082612568565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260026020526040808220939093559084168152205461296b9082612d72565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526002602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015612a3f57600080fd5b505afa158015612a53573d6000803e3d6000fd5b505050506040513d6020811015612a6957600080fd5b5051600c5473ffffffffffffffffffffffffffffffffffffffff8216158015945091925090612b2e578015612b29576000612aba61129b6dffffffffffffffffffffffffffff8881169088166124e2565b90506000612ac783612b42565b905080821115612b26576000612ae9612ae08484612568565b600154906124e2565b90506000612b0283612afc8660036124e2565b90612d72565b90506000818381612b0f57fe5b0490508015612b2257612b228782612b94565b5050505b50505b612b3a565b8015612b3a576000600c555b505092915050565b60006003821115612b85575080600160028204015b81811015612b7f57809150600281828581612b6e57fe5b040181612b7757fe5b049050612b57565b50612b8f565b8115612b8f575060015b919050565b600154612ba19082612d72565b60015573ffffffffffffffffffffffffffffffffffffffff8216600090815260026020526040902054612bd49082612d72565b73ffffffffffffffffffffffffffffffffffffffff831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000818310612c485781612c4a565b825b9392505050565b3390565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260026020526040902054612c859082612568565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260026020526040902055600154612cb89082612568565b60015560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6dffffffffffffffffffffffffffff166e0100000000000000000000000000000290565b60006dffffffffffffffffffffffffffff82167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff841681612d6a57fe5b049392505050565b80820182811015610e5257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fdfe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373445045583a20494e53554646494349454e545f4c49515549444954595f4d494e544544445045583a20494e53554646494349454e545f4c49515549444954595f4255524e4544446563656e7472616c697a656420506173736976652045786368616e67652050616972a264697066735822122055fb67f2e0e3efe4d97acfb854db10c7e7192ab8ee58bf853c2a36d01625949064736f6c63430007040033446563656e7472616c697a656420506173736976652045786368616e67652050616972a2646970667358221220cdf718afcb3a2dd581b65b07d318f78301c9e6c984ca20a4b7dc4a9b5a4a410964736f6c63430007040033";
