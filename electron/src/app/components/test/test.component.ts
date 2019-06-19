import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../service/storage/storage.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(        
    private StorageService : StorageService
  ) { }

  ngOnInit() {
   // console.log(this.StorageService);
  }

  getp(){
    console.log("button clicked");
   // console.log(this.StorageService.testmethode());
  }
}
