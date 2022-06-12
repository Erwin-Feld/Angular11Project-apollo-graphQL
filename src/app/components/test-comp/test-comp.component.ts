import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { FIRST_QUERY } from 'src/app/graphql/graphql.queries';

// {__typename: 'User', id: '1', firstname: 'Mike', age: 12}

export interface Users {
  __typename: string,
  id: string,
  email: string,
  name: string
}

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  userData! :Users[]

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: FIRST_QUERY,
    }).valueChanges.subscribe((result:any) =>{
      console.log(result?.data?.users)
      this.userData = result?.data?.users
    })
  }

}


