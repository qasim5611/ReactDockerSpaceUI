import { BigNumber } from "@ethersproject/bignumber";
import { MaxUint256 } from "@ethersproject/constants";
import { parseUnits } from "@ethersproject/units";
// add 10%
export function calculateGasMargin(value) {
  return (+(
    (value * BigNumber.from(10000).add(BigNumber.from(1000))) /
    BigNumber.from(10000)
  )).toFixed(0);
}
//CalculatePayableGas
export const gasEstimationPayable = async (active, arg, fn, amount) => {
  if (active) {
    const estimateGas = await fn(arg, MaxUint256).catch(() => {
      return fn(arg, { value: parseUnits(amount) });
    });
    return calculateGasMargin(estimateGas);
  }
};
//calculateApproveGas
export const gasEstimationApprove = async (active, fn, cA, amount) => {
  if (active) {
    const ap_estimateGas = await fn.approve(cA, MaxUint256).catch(() => {
      return fn.approve(cA, parseUnits(amount));
    });
    return calculateGasMargin(ap_estimateGas);
  }
};
