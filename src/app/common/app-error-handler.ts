import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('Wystąpił nieoczekiwany błąd.');
        console.log(error);
    }
}