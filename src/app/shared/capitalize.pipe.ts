import { Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform(value: any){
        if(value){
            return value.chartAt(0).toUppercase() + value.slice(1);
        }
        return  value;
    }
}