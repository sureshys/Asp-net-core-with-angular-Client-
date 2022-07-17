import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  file:File | null = null;
  constructor() { }

  ngOnInit(): void {
  }
  onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
  upload() {
    if (this.file) {
      let formParams = new FormData();
      formParams.append('file', this.file)
      alert("Uploaded")
      // this.uploadService.uploadfile(this.file).subscribe(resp => {

      // })
    } else {
      alert("Please select a file first")
    }
  }
}
