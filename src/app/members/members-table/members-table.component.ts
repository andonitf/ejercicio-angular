import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';
import { Store, select } from '@ngrx/store';
import { MembersState } from '../state/members.reducers';
import { actions } from '../state/members.actions';
import * as MembersSelectors from '../state/members.selectors';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent implements OnInit {
  members: MemberEntity[];
  organizationName: string;

  constructor(
    private store: Store<MembersState>,
    private membersApi: MembersApiService
  ) {}

  ngOnInit(): void {
    this.store
      .pipe(select(MembersSelectors.getMembers))
      .subscribe(members => (this.members = members));
    this.store
      .pipe(select(MembersSelectors.getOrganization))
      .subscribe(organization => (this.organizationName = organization));
  }

  loadMembers() {
    this.membersApi.getAllMembers(this.organizationName).subscribe(members =>
      this.store.dispatch({
        type: actions.MEMBERS_REQUEST_COMPLETED,
        payload: {
          members: members
        }
      })
    );
  }

  organizationNameUpdated() {
    this.store.dispatch({
      type: actions.ORGANIZATION_NAME_UPDATED,
      payload: {
        organization: this.organizationName
      }
    });
  }
}
