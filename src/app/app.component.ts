import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newsData: any;
  aplleNewsData: any;
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getNewsDetails();
  }

  getNewsDetails() {
    this.newsData = this.newsService.getNews();
    if (this.newsData) {
      this.aplleNewsData = this.newsData.articles;
      console.log(this.aplleNewsData)
    };
  }
}
