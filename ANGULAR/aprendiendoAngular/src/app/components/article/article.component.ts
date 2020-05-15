import { Component, OnInit, Input} from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  @Input() articles: Article[];
  public url: string;
  
  constructor(
    private _articleService: ArticleService
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    /*this._articleService.getArticles().subscribe(
      response => {
        if (response.articles) {
          this.articles = response.articles;
        }

      },
      error => {
        console.log("Error!!");
      }
    );*/
  }

}


