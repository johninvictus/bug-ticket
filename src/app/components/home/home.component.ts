import {Component, OnInit} from '@angular/core';
import {IssuesService} from '../../services/issues.service';
import {Issue} from '../../models/issue';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeIssues: Issue[] = [];
  completedIssues: Issue[] = [];
  expiredIssues: Issue[] = [];

  constructor(private issueService: IssuesService, private router: Router) {
  }

  ngOnInit() {
    this.issueService.getIssues().subscribe(issues => {
      this.completedIssues = [];
      this.activeIssues = [];
      this.expiredIssues = [];

      issues.forEach((issue, index, arr) => this.sortTasks(issue, index, arr));
    });
  }

  onListClick(issue: Issue) {
    this.router.navigate([`detail/${issue.id}`]);
  }

  sortTasks(issue: Issue, index: number, array: Issue[]) {
    if (issue.resolved) {
      this.completedIssues.unshift(issue);
    } else if (!issue.resolved) {
      this.activeIssues.unshift(issue);
    }
  }
}
