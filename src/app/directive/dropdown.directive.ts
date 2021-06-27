import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

@HostBinding('class.show') showed = false;
@HostListener('click') toggleShowed(){
  this.showed = !this.showed
  console.log(this.showed);
}

  constructor() { }

}
