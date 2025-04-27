import {Component, ViewEncapsulation} from '@angular/core';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {PostFormComponent} from '../posts/post-form/post-form.component';

@Component({
  selector: 'app-dashboard',
  imports: [CKEditorModule, PostFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',

})
export class DashboardComponent {


}
