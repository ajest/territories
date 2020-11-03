import { GET_TERRITORIES_SUCCESS } from '../constants/constants';

export default function getTerritories() {
  return {
    type: GET_TERRITORIES_SUCCESS,
  };
}
