import { lastValueFrom, Observable } from 'rxjs';

export async function convertObservable(data$: Observable<any>): Promise<any> {
    const data = await lastValueFrom(data$);
    return data
}


