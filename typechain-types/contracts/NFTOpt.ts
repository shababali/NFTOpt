/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface NFTOptInterface extends utils.Interface {
  functions: {
    "cancelOption(uint32)": FunctionFragment;
    "createOption(uint32)": FunctionFragment;
    "exerciseOption(uint32)": FunctionFragment;
    "options(uint256)": FunctionFragment;
    "publishOptionRequest(address,uint256,uint256,uint256,uint8)": FunctionFragment;
    "withdrawOptionRequest(uint32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelOption"
      | "createOption"
      | "exerciseOption"
      | "options"
      | "publishOptionRequest"
      | "withdrawOptionRequest"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelOption",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createOption",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exerciseOption",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "options",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "publishOptionRequest",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawOptionRequest",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelOption",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOption",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exerciseOption",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "options", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "publishOptionRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawOptionRequest",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NFTOpt extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTOptInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancelOption(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createOption(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exerciseOption(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number
      ] & {
        buyer: string;
        seller: string;
        nftContract: string;
        nftId: BigNumber;
        startDate: BigNumber;
        expirationInterval: BigNumber;
        premium: BigNumber;
        strikePrice: BigNumber;
        flavor: number;
        state: number;
      }
    >;

    publishOptionRequest(
      _nftContract: string,
      _nftId: BigNumberish,
      _premium: BigNumberish,
      _strikePrice: BigNumberish,
      _flavor: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawOptionRequest(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  cancelOption(
    _optionId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createOption(
    _optionId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exerciseOption(
    _optionId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  options(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      number
    ] & {
      buyer: string;
      seller: string;
      nftContract: string;
      nftId: BigNumber;
      startDate: BigNumber;
      expirationInterval: BigNumber;
      premium: BigNumber;
      strikePrice: BigNumber;
      flavor: number;
      state: number;
    }
  >;

  publishOptionRequest(
    _nftContract: string,
    _nftId: BigNumberish,
    _premium: BigNumberish,
    _strikePrice: BigNumberish,
    _flavor: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawOptionRequest(
    _optionId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelOption(
      _optionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createOption(
      _optionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exerciseOption(
      _optionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number
      ] & {
        buyer: string;
        seller: string;
        nftContract: string;
        nftId: BigNumber;
        startDate: BigNumber;
        expirationInterval: BigNumber;
        premium: BigNumber;
        strikePrice: BigNumber;
        flavor: number;
        state: number;
      }
    >;

    publishOptionRequest(
      _nftContract: string,
      _nftId: BigNumberish,
      _premium: BigNumberish,
      _strikePrice: BigNumberish,
      _flavor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawOptionRequest(
      _optionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    cancelOption(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createOption(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exerciseOption(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    options(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    publishOptionRequest(
      _nftContract: string,
      _nftId: BigNumberish,
      _premium: BigNumberish,
      _strikePrice: BigNumberish,
      _flavor: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawOptionRequest(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelOption(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createOption(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exerciseOption(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    publishOptionRequest(
      _nftContract: string,
      _nftId: BigNumberish,
      _premium: BigNumberish,
      _strikePrice: BigNumberish,
      _flavor: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawOptionRequest(
      _optionId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
