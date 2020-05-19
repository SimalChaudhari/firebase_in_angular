import { Component } from '@angular/core';
import { IdeasService} from 'src/app/services/ideas.service'    
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';  
import { FormsModule } from '@angular/forms';
import { FilterPipe }from 'src/app/filter.pipe';

@Component({
  selector: 'container-root',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent{
    ideas: any[];
    items: Observable<any[]>;
    searchText:string = "";

    constructor(private ideasService: IdeasService) {}
    
    ngOnInit() {
        this.ideasService.getIdeas().subscribe(data => {
            this.ideas = data.map(e => {
                return {
                id: e.payload.doc.id,
                MainIdea: e.payload.doc.data()['MainIdea'],
                abstract: e.payload.doc.data()['abstract'],
                concept: e.payload.doc.data()['concept'],
                createdDate: e.payload.doc.data()['createdDate'],
                keywords: e.payload.doc.data()['keywords'],
                sharingLevel: e.payload.doc.data()['sharingLevel'],
                user_id: e.payload.doc.data()['user_id'],
                };
            })
        });
    }

  Create() {
    let record = {};
  
    // this.crudService.create_NewStudent(record).then(resp => {
    //   this.studentName = "";
    //   this.studentAge = undefined;
    //   this.studentAddress = "";
    //   console.log(resp);
    // }).catch(error => {
    //     console.log(error);
    // });
  }

  RemoveRecord(rowID) {
    this.ideasService.deleteIdeas(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  Update(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.ideasService.updateIdeas(recordRow.id);
    recordRow.isEdit = false;
  }
}
