import Enzyme from 'enzyme';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import CountryDetails from "./CountryDetails";
import {COUNTRY} from "./queries";
import {MockedProvider} from "@apollo/client/testing";
import {wait} from "@testing-library/user-event/dist/utils";
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;
import {checkData} from "./helper";

Enzyme.configure({adapter: new EnzymeAdapter});

test('testing the loading state', async () => {
    let wrapper;
    await act(async () => {
        wrapper = TestRenderer.create(
            <MockedProvider mocks={[]} addTypename={false} resolvers={{}}>
                <CountryDetails selectedCard={""} />
            </MockedProvider>
        );
    });
    const tree = wrapper.toJSON();
    expect(tree.children).toContain('Loading...');
});

test('should successfully display the CountryDetailsItem', async () => {
    const mockCountry = [{
        request: {
            query: COUNTRY,
            variables: {code: "NA"}
        },
        result: {
            "data": {
                "country": {
                    "code": "NA",
                    "name": "Namibia",
                    "continent": {
                        "name": "Africa"
                    },
                    "capital": "Windhoek",
                    "currency": "NAD,ZAR",
                    "phone": "264",
                    "languages": [
                        {
                            "name": "English"
                        },
                        {
                            "name": "Afrikaans"
                        }
                    ]
                }
            }
        }
    }];
    let wrapper;
    await act( async () => {
        wrapper = TestRenderer.create(
            <MockedProvider mocks={mockCountry} addTypename={false} resolvers={{}}>
                <CountryDetails selectedCard={"NA"}/>
            </MockedProvider>
        );
        await wait(1000);
    });
    const tree = wrapper.toJSON();
    expect(tree.children.length).toBeGreaterThan(1);
});

test('should handle an error', async () => {
     const mockWithError = [{
         request: {
            query: COUNTRY,
             variables: {code: ["AA"]}
         },
         error: new Error('Error :('),
     }];
    let wrapper;
     await act( async () => {
         wrapper = TestRenderer.create(
             <MockedProvider mocks={mockWithError} addTypename={false} resolvers={{}}>
                 <CountryDetails selectedCard={"AA"} />
             </MockedProvider>
         );
         await wait(1000);
     });
    const tree = wrapper.toJSON();
    expect(tree.children).toContain('Error :(');
});

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

