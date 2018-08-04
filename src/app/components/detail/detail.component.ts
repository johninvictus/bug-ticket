import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Issue} from '../../models/issue';
import {IssuesService} from '../../services/issues.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  issue: Issue;
  id: string;

  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private issueService: IssuesService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.issueService.getIssue(this.id)
      .subscribe(issue => {
        this.issue = issue;
      });
  }

  deleteIssue() {
    if (confirm('Are you sure?')) {
      this.issueService.deleteIssue(this.id);
      this.router.navigate(['']);
    }
  }

}
