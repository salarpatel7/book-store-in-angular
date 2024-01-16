import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

src: string ="https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg"
  name = 'clean code'
  author = 'salaar patel'

  name2 :string = "Pragmatic Programmer "
  author2:string='David Thomas'
  src2:string='https://m.media-amazon.com/images/I/912PFdNLs-L._AC_UF1000,1000_QL80_.jpg'

  isDisabled:boolean=false
}
