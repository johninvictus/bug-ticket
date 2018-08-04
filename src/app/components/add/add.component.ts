import {Component, OnInit, ViewChild} from '@angular/core';
import {Issue} from '../../models/issue';
import {IssuesService} from '../../services/issues.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formData: any = {};
  @ViewChild('issueForm') form: any;
  issue: Issue;

  constructor(private issuesService: IssuesService, private router: Router) {
  }

  ngOnInit() {
  }


  onSubmit(data: any) {
    const x =
      Object.assign({},
        this.formData,
        {created_at: Date.now(), resolved: false, user_id: 1});

    /**
     * add this data to firebase
     * */
    this.issuesService.newIssue(x);
    this.router.navigate(['/']);
  }
}
