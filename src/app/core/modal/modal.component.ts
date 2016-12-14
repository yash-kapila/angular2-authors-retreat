import { Component, OnInit } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  showModal: boolean;
  title: string;
  message: string;
  modalElement: any;
  cancelClicked: () => void;
  okayClicked: () => void;

  constructor(
    private _modalService: ModalService
  ) { 
    this._modalService.activate = this.activate.bind(this);
    this.showModal = false;
  }

  ngOnInit() { 
    this.modalElement = document.getElementById('modalWindow');
  }

  activate(title: string, message: string): Promise<any>{
    let promise = new Promise<any>((resolve, reject) => {
      this.cancelClicked = () => reject();
      this.okayClicked = () => resolve();

      this.showWindow();
    });
    return promise;
  }

  showWindow() {
    this.showModal = true;

    this.modalElement.onclick = () => {
      this.showModal = false;
      return this.cancelClicked();
    };

    document.onkeyup = (e: any) => {
      if (e.which === 27) {
        this.showModal = false;
        return this.cancelClicked();
      }
    };
  }

  cancel() {
    this.cancelClicked();
    this.showModal = false;
  }

  ok() {
    this.okayClicked();
    this.showModal = false;
  }

}
