import { fa, faker } from '@faker-js/faker';

export class UserBuilder {
  addEmail(){
    this.userEmail = faker.internet.email();
    return this;
  };

  addName(){
    this.userName = faker.person.firstName('female');
    return this;
  }

  addPassword(){
    this.userPassword = faker.internet.password();
    return this;
  }
  
  addBio(){
    this.userBio = faker.music.genre();
    return this;
  }

  generate() {
    const copied = structuredClone (
      {
      userEmail : this.userEmail,
      userName : this.userName,
      userPassword : this.userPassword,
      userBio : this.userBio
    }
    )
    return copied;
  }

}



//newUser = {
//  userBio : faker.music.genre(),
//  userName : faker.person.firstName('female'),
//  userEmail : faker.internet.email(),
//  userPassword : faker.internet.password(),
//  textArticle : faker.lorem.text(),
//  urlPicture : faker.image.url()