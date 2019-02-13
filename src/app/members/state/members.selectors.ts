import { MembersState } from './members.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getMembersFeatureFromState = createFeatureSelector<MembersState>('members');

export const getMembers = createSelector(
  getMembersFeatureFromState,
  state => state.members
);
export const getOrganization = createSelector(
  getMembersFeatureFromState,
  state => state.organization
);
