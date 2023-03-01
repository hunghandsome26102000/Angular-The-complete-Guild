export class User {
    constructor(
      public email: string = '',
      public id: string = '',
      private _token: any,
      private _tokenExpirationDate: Date = new Date
    ) {}
  
    get token() {
      if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
        return null;
      }
      return this._token;
    }
  }
  