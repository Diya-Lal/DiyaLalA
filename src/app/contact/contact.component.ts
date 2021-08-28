import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactDetails:any;

  constructor(private profileServices: ProfileService) { }

  ngOnInit(): void {
    if(!this.contactDetails){
      this.getContactDetails();
    }
  }

  public getContactDetails() {
    this.profileServices.getContactDetails().subscribe(
      (GetContactSuccess :any) => {
        this.contactDetails = GetContactSuccess['contactDetails'];
      },
      (GetContactError) => {
      },
    )
  }

}
