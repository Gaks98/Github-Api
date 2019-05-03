import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '272c65cbc29f954cf3e2';
  private clientsecret = 'dbadab957fef8818d6047cec13dbb9a11138e182';

  constructor(private http: Http) {
    console.log('service is now ready!');
    this.username = 'Gaks98';
  }

  getProfileInfo() {
    return this.http.get('https://api.github.com/users/'
     + this.username + '?client_id=' + this.clientid + '&client_secret=' +
      this.clientsecret)
.map(res => res.json());
  }

  getProfileRepos() {
    return this.http.get('https://api.github.com/users/'
    + this.username + '/repos?client_id=' + this.clientid +
     '&client_secret=' + this.clientsecret)
      .map(res => res.json());
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
