import {Component, OnInit} from '@angular/core';
import {IssuesService} from '../../services/issues.service';
import {Issue} from '../../models/issue';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  issues: Issue[];

  constructor(private issueService: IssuesService) {
  }

  ngOnInit() {
    this.issueService.getIssues().subscribe(issues => {
      this.issues = issues;
    });
  }

}
