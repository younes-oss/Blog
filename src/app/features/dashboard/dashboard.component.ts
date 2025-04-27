import {Component, ViewEncapsulation} from '@angular/core';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {PostFormComponent} from '../posts/post-form/post-form.component';
import {ToastComponent} from '../../shared/toast/toast.component';

@Component({
  selector: 'app-dashboard',
  imports: [CKEditorModule, PostFormComponent, ToastComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',

})
export class DashboardComponent {
  message: string="post addedd with succes fully ";
  show: string ="";
  color: string="green";


  showSnackbar() {
    this.show = "block"; // Display the snackbar

    // After 3 seconds, hide the snackbar
    setTimeout(() => {
      this.show = "none";
    }, 3000);
  }

}
