import { Recruit } from '../../types/recruit';

export const SET = 'SET';
export const UNSET = 'UNSET';

interface SetRecruitAction {
    type: typeof SET;
    payload: Recruit[];
}

interface UnsetRecruitAction {
    type: typeof UNSET;
}

export type RootActionTypes = SetRecruitAction | UnsetRecruitAction;
