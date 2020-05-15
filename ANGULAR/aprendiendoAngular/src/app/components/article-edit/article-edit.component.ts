import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public newId: string;
  public isEdit: boolean;
  public url:string;

  afuConfig = {
    multiple: false,  //Multiple archivos
    formatsAllowed: ".jpg,.png,.gif,.jpeg",    //Formatos permitidos
    maxSize: "50", //Tamaño maximo
    uploadAPI: {
      url: Global.url + "upload-image" //+this.newId, //Url a la que subir la imagen
    },
    theme: "attachPin",  //Estilo
    hideProgressBar: true,
    hideResetBtn: true,
    hideUploadBtn: true,
    hideSelectBtn: false,  //Mostrar boton de seleccionar
    replaceTexts: {
      selectFileBtn: 'Seleccionar Imagen',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Seleccionar Imagen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.isEdit = true;
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit(){
    this._articleService.update(this.article._id,this.article).subscribe(
      response => {
        if (response.status == 'success'){
          this.status = response.status
          this.article = response.article;
          this.newId = response.article._id;

          this._router.navigate(["/blog/articulo/",this.article._id]);
          
        }else{
          this.status = response.status
        }
      },
      error => {
          this.status = 'error'
      }

    );
  }

  ImageUpload(data){
    let image_data = JSON.parse(data.response);
    this.article.image = image_data.image;
    
  }

  getArticle(){
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
}
