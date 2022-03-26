import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { FIRST_QUERY } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: FIRST_QUERY,
    }).valueChanges.subscribe((result:any) =>{
      console.log(result?.data?.users)
    })
  }

}


