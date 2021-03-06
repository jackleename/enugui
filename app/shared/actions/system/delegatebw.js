import * as types from '../types';
import * as AccountActions from '../accounts';
import enu from '../helpers/enu';

export function delegatebw(delegator, receiver, netAmount, cpuAmount) {
  return (dispatch: () => void, getState) => {
    const {
      connection
    } = getState();

    dispatch({
      type: types.SYSTEM_DELEGATEBW_PENDING
    });

    const stakeNetAmount = Math.round(netAmount * 10000) / 10000 || 0;
    const stakeCpuAmount = Math.round(cpuAmount * 10000) / 10000 || 0;

    return enu(connection).transaction(tr => {
      tr.delegatebw({
        from: delegator,
        receiver,
        stake_net_quantity: `${stakeNetAmount} ENU`,
        stake_cpu_quantity: `${stakeCpuAmount} ENU`,
        transfer: 0
      });
    }).then((tx) => {
      dispatch(AccountActions.getAccount(delegator));
      return dispatch({
        payload: { tx },
        type: types.SYSTEM_DELEGATEBW_SUCCESS
      });
    }).catch((err) => dispatch({
      payload: { err },
      type: types.SYSTEM_DELEGATEBW_FAILURE
    }));
  };
}

export default {
  delegatebw
};
