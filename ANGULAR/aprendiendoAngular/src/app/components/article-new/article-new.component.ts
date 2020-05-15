import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService} from '../../services/article.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from '../../services/global';
import swal from 'sweetalert';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})

export class ArticleNewComponent implements OnInit {

  public article : Article;
  public status: string;
  public newId: string;
  public url: string;
  public isEdit: boolean;

  afuConfig = {
    multiple: false,  //Multiple archivos
    formatsAllowed: ".jpg,.png,.gif,.jpeg",    //Formatos permitidos
    maxSize: "50", //Tamaño maximo
    uploadAPI:  {
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
    this.article = new Article('','','',null,null);
    this.url = Global.url;
    this.isEdit = false;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success'){
          this.status = response.status
          this.article = response.article;
          this.newId = response.article._id;

          //Alerta
          swal(
            'Articulo creado',
            'El articulo se ha creado correctamete',
            'success'
          );

          this._router.navigate(["/blog/articulo/",this.newId]);
          
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

}
