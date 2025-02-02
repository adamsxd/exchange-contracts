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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IElixirFlashCallbackInterface extends ethers.utils.Interface {
  functions: {
    "elixirFlashCallback(uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "elixirFlashCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "elixirFlashCallback",
    data: BytesLike
  ): Result;

  events: {};
}

export class IElixirFlashCallback extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IElixirFlashCallbackInterface;

  functions: {
    elixirFlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "elixirFlashCallback(uint256,uint256,bytes)"(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  elixirFlashCallback(
    fee0: BigNumberish,
    fee1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "elixirFlashCallback(uint256,uint256,bytes)"(
    fee0: BigNumberish,
    fee1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    elixirFlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "elixirFlashCallback(uint256,uint256,bytes)"(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    elixirFlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "elixirFlashCallback(uint256,uint256,bytes)"(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    elixirFlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "elixirFlashCallback(uint256,uint256,bytes)"(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
