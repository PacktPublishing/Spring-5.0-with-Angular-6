import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  topicList: string[];
  constructor() { }

  ngOnInit() {
  }

  getTopicList(): void{
    this.topicList = ['topic 1', 'topic 2', 'topic 3'];
  }

}
