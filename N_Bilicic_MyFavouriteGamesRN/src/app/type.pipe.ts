import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface'

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(contentList: Content[], type: string ) {
    return contentList.filter(c => c.type == type ?
      c : null);
  }

}
