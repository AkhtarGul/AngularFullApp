import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  products = [
    {
      proImg:
        'https://media.istockphoto.com/vectors/mobile-phone-vibrating-or-ringing-flat-vector-icon-for-apps-and-vector-id1141778521?k=20&m=1141778521&s=612x612&w=0&h=HR00_7snTNcWcsXAFuzcVPTPnU--qT8R6H-ve4lG2m8=',
      proName: 'Mobile',
      Id: 1,
      proPrice: 1240,
    },
    {
      proImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-dSXGisiHYCquxAoPx9QKLZ97nxfobHviXAxl-0k0Pu320UwQkoM6S9AhzoEuRmbgNA&usqp=CAU',
      proName: 'Laptop',
      Id: 2,
      proPrice: 1240,
    },
    {
      proImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjVCygm4nwae4uXsBuk-wcNgFaqtfnwGkA2XDRFE5Zv2P7hLcNN-QOfe_ZwdOA7pHjUY&usqp=CAU',
      proName: 'Desktop',
      Id: 3,
      proPrice: 1220,
    },
    {
      proImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBocmZHPf78nNnZjp-pdVylmQNDw3lk1t2FR1WNzZ8NXXtFqb5FPULohVKLrUWRAhuQM&usqp=CAU',
      proName: 'Watch',
      Id: 4,
      proPrice: 1220,
    },
  ];
  User = [];
  //push and splice via ngfor
  addUser(event) {
    console.log(event.value);
    this.User.push(event.value);
    if (this.User.length > 3) {
      // alert('More than 3 ');
      this.router.navigate(['product']);
    }
  }

  //splice means remove
  removeUser() {
    this.User.splice(this.User.length - 1);
  }
  //remove via index
  onRemove(i) {
    this.User.splice(i, 1);
  }
}
