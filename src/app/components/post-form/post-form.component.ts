import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
    form = new FormGroup({
      title: new FormControl('',[Validators.required, Validators.minLength(3)]),
      body: new FormControl('',[Validators.required]),
      userId: new FormControl('',[Validators.required])
    });

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }
  submit(){
    if(!this.form.valid){
      alert('El formulario no es valido u.u ')
      return;
    }
    const formValue= this.form.value;

    this.postService.getPosts( )

    alert('Enviando formulario');

  }
}
