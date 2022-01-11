import Enzyme from 'enzyme';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import CountryDetails from "./CountryDetails";
import {COUNTRY} from "./queries";
import {MockedProvider} from "@apollo/client/testing";
import {wait} from "@testing-library/user-event/dist/utils";
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;

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

