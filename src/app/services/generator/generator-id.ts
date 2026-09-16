import { Service } from '@angular/core';

@Service()
export class GeneratorID {

    private trenutni_ID : number = 0

    generisiID() : number {
        return this.trenutni_ID++
    }
}
