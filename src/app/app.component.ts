import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/services.firebase';
import {Book} from './Book';
import {Author} from './Author';
import {Content} from './Content';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit  {
  title = 'app works!';
  
  books:Book[];
  authors:Author[];
  contents:Content[];
  blurbs=[];

  appState: string;
  
  activeKey: string;

  activeTheme: string;
  activeIssueDate: string;
  activeMonth: string;
  activeYear: string;
  activeCoverImage: string;
  activeObjective: string;
  activeSummary: string;
  activeFirstName: string;
  activeLastName: string;
  activeAuthorImage: number;
  activeAuthorBio: string;

   constructor(private _fs:FirebaseService) {
    
      }

      ngOnInit(){
//this.appState = 'default';

        //GET BOOKS FEED
        this._fs.getBooks().subscribe(books => {
        this.books = books;
      });
        //GET AUTHORS FEED
        this._fs.getAuthors().subscribe(authors => {
        this.authors = authors;
      });
        //GET CONTENTS FEED
        this._fs.getContents().subscribe(contents => {
        this.contents = contents;
      });
        //GET BLURBS FEED
        this._fs.getBlurbs().subscribe(blurbs => {
        this.blurbs = blurbs;
      });
    }
      changeState(state, key){
        console.log('Changing state to:'+state);
        if(key){
          console.log('Changing key to:'+key);
          this.activeKey = key;
        }
        this.appState = state;
  }

      filterTheme(book){
        this._fs.getBooks(book).subscribe(books => {
          this.books = books;
         console.log(book);
      });
  }



      /*getBooks(){
          console.log(this.books);
          console.log(this.authors);
          console.log(this.contents);
          console.log(this.blurbs);
      }*/


  addBook(
    theme:string,
    issuedate:string,
    month:string,
    year:string,
    coverimg:string,
    objective:string,
    summary:string,
    bio:string,
    firstname:string,
    lastname:number,
    img:string){

      var created_at = new Date().toString();

      var newBook = {
        issuedate:issuedate,
        theme:theme,
        month:month,
        year:year,
        coverimg:coverimg,
        objective:objective,
        summary:summary,
        bio:bio,
        firstname:firstname,
        lastname:lastname,
        img:img,
        created_at:created_at
        }

        //console.log(newBusiness);
        this._fs.addBook(newBook);

        this.changeState('default', null);
  }

      showEdit(book){
        this.changeState('edit', book.$key);
        this.activeIssueDate =          book.issuedate;
        this.activeTheme =              book.theme;
        this.activeMonth =              book.month;
        this.activeYear =               book.year;
        this.activeCoverImage =         book.coverimg;
        this.activeObjective =          book.objective;
        this.activeSummary =            book.summary;
        this.activeAuthorBio =          book.bio;
        this.activeFirstName =          book.firstname;
        this.activeLastName =           book.lastname;
        this.activeAuthorImage =        book.img;

      }

      updateBook(){
        var updBook = {
          theme:this.activeTheme,
          issuedate:this.activeIssueDate,
          month:this.activeMonth,
          year:this.activeYear,
          coverimg:this.activeCoverImage,
          objective:this.activeObjective,
          summary:this.activeSummary,
          bio:this.activeAuthorBio,
          firstname:this.activeFirstName,
          lastname:this.activeLastName,
          img:this.activeAuthorImage

        }
        this._fs.updateBook(this.activeKey, updBook);

        this.changeState('default', null);
      }

      deleteBook(key){
       this._fs.deleteBook(key);

        this.changeState('default', null);
      }

}
