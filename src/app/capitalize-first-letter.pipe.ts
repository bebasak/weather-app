import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'capitalizeFirstLetter'
})

export class CapitalizeFirstLetterPipe implements PipeTransform {
    transform(value: string, args?: any[]): string {
        if (!value) 
            return null;

        return value.charAt(0).toUpperCase() + (value.slice(1)).toLowerCase();
    }
}