import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import CountryList from "./CountryList";
import {COUNTRIES} from "./queries";
import TestRenderer from 'react-test-renderer';
import {wait} from "@testing-library/user-event/dist/utils";
const {act} = TestRenderer;

test('testing the loading state', async () => {
    let component;
    await act(async () => {
        component = TestRenderer.create(
            <MockedProvider mocks={[]} addTypename={false}>
                <CountryList setIsCardChosen={() => {}} selectedCard={""} setSelectedCard={() => {}}/>
            </MockedProvider>
        );
    })
    const tree = component.toJSON();
    expect(tree.children).toContain('Loading...');
});

test('should render a list of countries', async () => {
    const mockCountries = {
        request: {
            query: COUNTRIES
        },
        result: {
            data: { countries: [
                    {
                        "code": "AD",
                        "name": "Andorra",
                        "continent": {
                            "name": "Europe"
                        },
                        "capital": "Andorra la Vella"
                    },
                ]}
        }
    };
    let component;
    await act(async () => {
        component = TestRenderer.create(
            <MockedProvider mocks={[mockCountries]} addTypename={false}>
                <CountryList setIsCardChosen={() => {}} selectedCard={"AD"} setSelectedCard={() => {}}/>
            </MockedProvider>
        );
        await wait(1000);
    });
    const list = component.root.findByType('ul');
    expect(list.children.length).toBe(1);
});

test('should show error UI', async () => {
   const mockWithError = {
       request: {
           query: COUNTRIES
       },
       error: new Error('Error :('),
   };
   let component;
   await act(async() => {
       component = TestRenderer.create(
           <MockedProvider mocks={[mockWithError]} addTypename={false}>
               <CountryList setIsCardChosen={() => {}} selectedCard={"AD"} setSelectedCard={() => {}}/>
           </MockedProvider>
       );
       await wait(1000);
   });
   const tree = component.toJSON();
   expect(tree.children).toContain('Error :(');
});
