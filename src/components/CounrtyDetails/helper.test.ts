import Enzyme from 'enzyme';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import {checkData} from "./helper";

Enzyme.configure({adapter: new EnzymeAdapter});

describe('test helper function', () => {
    test('empty data should return N/A', () => {
        const result = checkData(null);
        expect(result).toBe('N/A');
    });
    test('not-empty text data should be returned', () => {
        const result = checkData('Andorra');
        expect(result).toBe('Andorra');
    });
    test('empty languages data should return N/A', () => {
        const result = checkData(null, "languages");
        expect(result).toBe('N/A');
    });
    test('not-empty languages data should be an string Array', () => {
        const result = checkData([{name: "Catalan"}], "languages");
        expect(result).toStrictEqual(['Catalan']);
    });
    test('empty currency data should return N/A', () => {
        const result = checkData(null, "currency");
        expect(result).toBe('N/A');
    });
    test('not-empty currency data should be an string Array', () => {
        const result = checkData("EUR", "currency");
        expect(result).toStrictEqual(["EUR"]);
    });
    test('empty phone data should return N/A', () => {
        const result = checkData(null, "phone");
        expect(result).toBe('N/A');
    });
    test('not-empty phone data should be an string with +', () => {
        const result = checkData(593, "phone");
        expect(result).toStrictEqual("+593");
    });
});