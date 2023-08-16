import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortString'
})
export class sortStringPipe implements PipeTransform {
    transform(value: any[], sortBy: string, sortOrder: string): any[] {
        if (!value || !Array.isArray(value)) {
            return value;
        }

        return value.sort((a, b) => {
            const aValue = a[sortBy].toLowerCase();
            const bValue = b[sortBy].toLowerCase();
            return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        });
    }
}