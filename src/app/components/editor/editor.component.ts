import { Component, OnInit } from '@angular/core';
import { UploadResult, MdEditorOption } from 'ngx-markdown-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor() { }

  public content: string;

  ngOnInit() {
    this.loadFileInEditor();
  }

  loadFileInEditor(){
    let contentArr = ['# Hello, Markdown Editor!'];
    contentArr.push('```javascript ');
    contentArr.push('function Test() {');
    contentArr.push('	console.log("Test");');
    contentArr.push('}');
    contentArr.push('```');
    contentArr.push(' Name | Type');
    contentArr.push(' ---- | ----');
    contentArr.push(' A | Test');
    contentArr.push('![](http://lon-yang.github.io/markdown-editor/favicon.ico)');
    contentArr.push('');
    contentArr.push('- [ ] Taks A');
    contentArr.push('- [x] Taks B');
    contentArr.push('');
    contentArr.push('[Link](https://www.google.com)');
    contentArr.push('');
    this.content = contentArr.join('\r\n');
  }
}
