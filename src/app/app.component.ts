import { Component, OnInit } from "@angular/core";
import gql from "graphql-tag";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "fuqihan";

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    try {
      this.apollo
      .query({
        query: gql`
          {
            cat(id: 1) {
              id
              name
            }
          }
        `
      })
      .subscribe(
        data => {
          console.log(data);
        },
        e => console.log("error: " + e)
      ); 
    } catch (error) {
      console.log(error)
    }
  }
}
