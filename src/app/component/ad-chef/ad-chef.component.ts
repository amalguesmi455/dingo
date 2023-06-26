import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ad-chef',
  templateUrl: './ad-chef.component.html',
  styleUrls: ['./ad-chef.component.css']
})
export class AdChefComponent implements OnInit {
  addChefForm!: FormGroup;
  Chef: any = {};
  id: any;
  title:string="ADD Chef"



  constructor(private _router: Router , private activatedroute:ActivatedRoute) {}
  ngOnInit() {
    this.id=this.activatedroute.snapshot.paramMap.get('id');
console.log('herre id',this.id)
if(this.id){
  this.title='EDIT Chef'
}
this.getChefById()
  }
  addEditChef() {
    if (this.id) {
      let Chefs = JSON.parse(localStorage.getItem('Chefs') || '[]');
      for (let i = 0; i < Chefs.length; i++) {
        if (Chefs[i].id === Number(this.id)) Chefs[i] = this.Chef;
      }
    } else {
    }
    let T = JSON.parse(localStorage.getItem('Chefs') || '[]');
    let ChefId = JSON.parse(localStorage.getItem('ChefId') || '0');
    this.Chef.id = ChefId;

    T.push(this.Chef);

    localStorage.setItem('Chefs', JSON.stringify(T));
    localStorage.setItem('ChefId', JSON.stringify(ChefId + 1));
    this._router.navigate(['table-chefs']);
  }
  getChefById(){
    let Chefs = JSON.parse(localStorage.getItem('Chefs')||'[]')
    for (let  i = 0;  i < Chefs.length;  i++) {
      if( Chefs[i].id ===  Number(this.id) )
this.Chef=Chefs[i] }
  }
}
