import { Observable } from "rxjs";

export interface IGrpcService {
    concatenate(string: IStartString): Observable<any>;
}

interface IStartString {
    text: string;
}