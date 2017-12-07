import {Directive, Output, EventEmitter, ElementRef} from '@angular/core';
import {AfterViewInit} from '@angular/core';

declare var jQuery: any;

@Directive({selector: '[webDevSortable]'})

export class WebdevSortableDirective implements AfterViewInit {
  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.onAfterViewInit(this);
  }
@Output() orderChanged = new EventEmitter();
  onAfterViewInit(element) {
    jQuery(this.el.nativeElement).sortable({
      start: function (event, ui) {
        this.start = ui.item.index();
      },
      stop: function (event, ui) {
        this.stop = ui.item.index();
        const index = {start: this.start, stop: this.stop};
        element.orderChanged.emit(index);
      }
    });
  }
}

