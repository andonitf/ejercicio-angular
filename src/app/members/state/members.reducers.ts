import { actions } from './members.actions';
import { MemberEntity } from '../models/member.model';

export interface MembersState {
  members: MemberEntity[];
  organization: string;
}

const defaultState: MembersState = {
  members: [],
  organization: 'Lemoncode'
};

export const reducer = (state: MembersState = defaultState, action) => {
  switch (action.type) {
    case actions.MEMBERS_REQUEST_COMPLETED:
      return {
        ...state,
        members: action.payload.members
      };
    case actions.ORGANIZATION_NAME_UPDATED:
      return {
        ...state,
        organization: action.payload.organization
      };
    default:
      return state;
  }
};
