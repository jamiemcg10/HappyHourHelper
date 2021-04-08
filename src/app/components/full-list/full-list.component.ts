import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListType } from '../../types/types'

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss'],
})



export class FullListComponent implements OnInit {

  @Output() displayRecipe: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.selectedComponent = ListType.Letter
  }

  public get ListType() {
    return ListType
  }

  activeTab = [1,0]
  selectedComponent: ListType

  switchComponent(component: ListType){    
    this.activeTab[this.selectedComponent] = 0
    this.selectedComponent = component
    this.activeTab[this.selectedComponent] = 1
  }

  transferEvent(event: any){
    this.displayRecipe.emit(event)
  }

}
