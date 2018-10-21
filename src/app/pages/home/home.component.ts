import { Component, OnInit } from "@angular/core";
// import { BackendService } from '../../services/backend.service';

@Component({
  selector: "home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  title: string = "Rolodex";
  subtitle: string;
  data: {
    header: string;
  } = {
    header: "header"
  };
  formData: {
    name: string;
    email: string;
    phoneNumber: string;
    class: string;
  } = {
    name: "",
    email: "",
    phoneNumber: "",
    class: ""
  };

  constructor() {
    // private backend: BackendService) {
    // const subtitle: string = "This is really awesome";
    // this.subtitle = subtitle;
  }

  // ngOnInit() {
  //   this.characters = this.backend.characters;

  //   this.backend.addCharacter({ name: 'doug' });
  //   this.characters.push({ name: 'baseem' });

  //   this.backend.getCharacter(20)
  //   .then((data) => {
  //     console.log(data);
  //   });
  // }

  submit() {
    console.log("submission!!! ", this.formData);
  }
}
