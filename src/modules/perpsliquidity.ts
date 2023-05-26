import { PoolDetails, QueryAllPlPoolsResponse, QueryPLPoolInfoResponse, UpdatePlPoolParams } from "@carbon-sdk/codec";
import { CarbonTx, Models } from "..";
import BaseModule from "./base";

export class PerpsLiquidityModule extends BaseModule {
  public async getPerpPools(): Promise<PoolDetails[]> {
    const fetchDataResponse: QueryAllPlPoolsResponse = await this.sdkProvider.query.perpetualpool.PoolAll({});
    return fetchDataResponse?.pools ?? []
  }

  public async getPerpPoolInfo(poolId: string): Promise<QueryPLPoolInfoResponse> {
    const fetchDataResponse: QueryPLPoolInfoResponse = await this.sdkProvider.query.perpetualpool.PoolInfo({ poolId });
    return fetchDataResponse ?? []
  }

  public async createPerpertualsPool(params: PerpsLiquidityModule.CreatePerpetualPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgCreatePlPool.fromPartial({
      creator: params.creator,
      name: params.name,
      depositDenom: params.depositDenom,
      shareTokenSymbol: params.shareTokenSymbol,
      supplyCap: params.supplyCap,
      depositFeeBps: params.depositFeeBps,
      withdrawalFeeBps: params.withdrawalFeeBps,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgCreatePlPool,
        value,
      },
      opts
    );
  }


  public async updatePerpetualsPool(params: PerpsLiquidityModule.UpdatePerpetualPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const updatePoolParam: UpdatePlPoolParams = {
      name: params.name,
      supplyCap: params.supplyCap,
      depositFeeBps: params.depositFeeBps,
      withdrawalFeeBps: params.withdrawalFeeBps,
    }

    const value = Models.MsgUpdatePlPool.fromPartial({
      creator: params.creator,
      poolId: params.poolId,
      updatePoolParams: updatePoolParam,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgUpdatePlPool,
        value,
      },
      opts
    );
  }

  public async depositToPerpetualsPool(params: PerpsLiquidityModule.DepositToPerpetualsPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgDepositToPlPool.fromPartial({
      creator: params.creator,
      poolId: params.poolId,
      depositAmount: params.depositAmount,
      minShareAmount: params.minShareAmount,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDepositToPlPool,
        value,
      },
      opts
    );
  }

  public async withdrawFromPerpetualsPool(params: PerpsLiquidityModule.WithdrawFromPerpetualsPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgWithdrawFromPlPool.fromPartial({
      creator: params.creator,
      poolId: params.poolId,
      shareAmount: params.shareAmount,
      minReceiveAmount: params.minReceiveAmount,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgWithdrawFromPlPool,
        value,
      },
      opts
    );
  }

  public async registerToPlPool(params: PerpsLiquidityModule.RegisterToPlPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgRegisterToPlPool.fromPartial({
      creator: params.creator,
      poolId: params.poolId,
      marketId: params.marketId,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgRegisterToPlPool,
        value,
      },
      opts
    );
  }

  public async deregisterFromPlPool(params: PerpsLiquidityModule.DeregisterFromPlPoolParams, opts?: CarbonTx.SignTxOpts) {
    const wallet = this.getWallet();

    const value = Models.MsgDeregisterFromPlPool.fromPartial({
      creator: params.creator,
      marketId: params.marketId,
    })

    return await wallet.sendTx(
      {
        typeUrl: CarbonTx.Types.MsgDeregisterFromPlPool,
        value,
      },
      opts
    );
  }
}

export namespace PerpsLiquidityModule {
  export interface CreatePerpetualPoolParams {
    creator: string;
    name: string;
    depositDenom: string;
    shareTokenSymbol: string;
    supplyCap: string;
    depositFeeBps: string;
    withdrawalFeeBps: string;
  }

  export interface UpdatePerpetualPoolParams {
    creator: string;
    name: string;
    poolId: Long;
    depositDenom: string;
    shareTokenSymbol: string;
    supplyCap: Long;
    depositFeeBps: Long;
    withdrawalFeeBps: Long;
  }

  export interface DepositToPerpetualsPoolParams {
    creator: string;
    poolId: Long;
    depositAmount: string;
    minShareAmount: string;
  }

  export interface WithdrawFromPerpetualsPoolParams {
    creator: string;
    poolId: Long;
    shareAmount: string;
    minReceiveAmount: string;
  }

  export interface RegisterToPlPoolParams {
    creator: string;
    poolId: Long;
    marketId: string;
  }

  export interface DeregisterFromPlPoolParams {
    creator: string;
    marketId: string;
  }
}