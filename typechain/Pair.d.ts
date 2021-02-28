/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PairInterface extends ethers.utils.Interface {
  functions: {
    "pairFor(address,address,address)": FunctionFragment;
    "sortTokens(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "pairFor",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "sortTokens",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sortTokens", data: BytesLike): Result;

  events: {};
}

export class Pair extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PairInterface;

  functions: {
    pairFor(
      factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    "pairFor(address,address,address)"(
      factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    sortTokens(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { token0: string; token1: string }>;

    "sortTokens(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { token0: string; token1: string }>;
  };

  pairFor(
    factory: string,
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "pairFor(address,address,address)"(
    factory: string,
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<string>;

  sortTokens(
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { token0: string; token1: string }>;

  "sortTokens(address,address)"(
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { token0: string; token1: string }>;

  callStatic: {
    pairFor(
      factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "pairFor(address,address,address)"(
      factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    sortTokens(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { token0: string; token1: string }>;

    "sortTokens(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { token0: string; token1: string }>;
  };

  filters: {};

  estimateGas: {
    pairFor(
      factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pairFor(address,address,address)"(
      factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sortTokens(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sortTokens(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    pairFor(
      factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pairFor(address,address,address)"(
      factory: string,
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sortTokens(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "sortTokens(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
