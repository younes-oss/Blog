import {Component, ViewEncapsulation} from '@angular/core';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {Bold, ClassicEditor, Essentials, Italic, Paragraph} from 'ckeditor5';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-post-form',
  imports: [
    CKEditorModule , ReactiveFormsModule
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
  encapsulation: ViewEncapsulation.None

})
export class PostFormComponent {

  post: FormGroup;

  public Editor = ClassicEditor;
  public config = {
    licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDY5MjE1OTksImp0aSI6ImNjNTE0MDg5LTBhOTYtNDdmOC04NmI5LWJkZDY2YWU3ZGUxNSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjMyOWVjYTY0In0.dNI3dcjiY5IvG0PZetWz_Ur2wFQ4_Di97zovo1_F47PBKdYFCuJdaaISpI7PcfqsM_jmF1zvR-aCRAHYU3Y_1g', // Or 'GPL'.
    plugins: [ Essentials, Paragraph, Bold, Italic ],
    toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|']
  }


  constructor( private formBuilder: FormBuilder) {
    this.post = this.formBuilder.group({
      title: '',
      content: '',
      image : '',
    });
  }
}
