import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from 'src/app/services/global';



@Component({
  selector: 'app-article-mas',
  templateUrl: './article-mas.component.html',
  styleUrls: ['./article-mas.component.css'],
  providers: [ArticleService]
})
export class ArticleMasComponent implements OnInit {

  public article: Article;
  public url: string;
  
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article){
            this.article = response.article;
            
          }else{
            this._router.navigate(['/home']);
          }

        },
        error => {
          this._router.navigate(['/home']);
        }

      );
    })

  }


  delete(articleId){
    this._articleService.delete(articleId).subscribe(
      response => {
        this._router.navigate(['/blog']);
      },
      error => {
        console.log("Error");
        this._router.navigate(['/blog']);
      }
    )
  }

}
