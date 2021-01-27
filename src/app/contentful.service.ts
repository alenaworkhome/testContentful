import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { CONFIG } from './constants';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() {
  }

  getProducts(query?: object): void {
    this.cdaClient.getContentType(CONFIG.contentTypeIds.product).then(data => {
      console.log('data', data);
    });
  }
}
