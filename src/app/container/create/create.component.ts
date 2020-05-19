import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder,  Validators } from '@angular/forms';
import { IdeasService} from 'src/app/services/ideas.service'   
import { Router } from "@angular/router";

@Component({
  selector: 'create-root',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent{
    createForm: FormGroup;
    constructor(private router: Router,private fb: FormBuilder, private ideasService: IdeasService) {
        this.createForm = this.fb.group({
            MainIdea: ['', Validators.required ],
            keywords: ['', Validators.required ],
            sharing_level: [''],
            Extrafields: this.fb.array([]) ,
         });
         this.addField();
     }

    ngOnInit() {}

    Extrafields() : FormArray {
        return this.createForm.get("Extrafields") as FormArray
    }

    newField(): FormGroup {
        return this.fb.group({
            key: '',
            value: '',
        });
    }
    
    addField() {
        this.Extrafields().push(this.newField());
    }

    removeField (i:number) {
        this.Extrafields().removeAt(i);
    }

    onSubmit() {
        console.log(this.createForm.value);
        let data = {
            MainIdea:this.createForm.value.MainIdea,
            keywords: this.createForm.value.keywords,
            sharing_level: this.createForm.value.sharing_level
        }

        this.createForm.value.Extrafields.forEach(element => {
            if(element.key){
                data[element.key] = element.value;
            }
        });

        this.ideasService.createIdeas(data).then(resp => {
            this.router.navigateByUrl('/');
            // console.log(resp);
        }).catch(error => {
            console.log(error);
        });
    }
}
