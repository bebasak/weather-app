import { CapitalizeFirstLetterPipe } from "./capitalize-first-letter.pipe";

describe('CapitalizeFirstLetterPipe', () => {
    let pipe: CapitalizeFirstLetterPipe;

    beforeEach(() => {
        pipe = new CapitalizeFirstLetterPipe();
    });

    it('#CapitalizeFirstLetterPipe should return null if no arg', () => {
        let arg = null;
        
        expect(pipe.transform(arg)).toBeNull();
    });

    it('#CapitalizeFirstLetterPipe should return "Abc" from "abc"', () => {
        let arg = 'abc';

        expect(pipe.transform(arg)).toEqual('Abc');
    });

    it('#CapitalizeFirstLetterPipe should return "Abc" from "ABC"', () => {
        let arg = 'ABC';

        expect(pipe.transform(arg)).toEqual('Abc');
    });
});
