import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss'],
})
export class BlogEntryComponent implements OnInit {
  @Input() blogEntry: any;

  constructor() { }

  ngOnInit() {}

}
