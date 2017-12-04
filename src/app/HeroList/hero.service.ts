import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class HeroService {
  constructor(private http: Http, private dataService: DataService) {
  }

  /**
   * 获取mock数据
   * @returns {Observable<any>}
   */
  getHeroesByMock(): Observable<any> {
    return this.dataService.getData('./mock/heroes.json', true);
  }
  /**
  * 创建
   * */
create(form: any): Observable<any> {
  return this.dataService.getData('./mock/heroes.json', form);
  }
  /*** 删除
   * @param id
   * @return {observable<any>}
   */
  Delete(id: any): Observable<any> {
    return this.dataService.getData('./mock/heroes.json', id);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}



