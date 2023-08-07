import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  h = "helo"
@Output() onLikeEvent = new EventEmitter()
@Input() datasend !: string
 onLike():void {
 this.onLikeEvent.emit(this.h)
 }

}
