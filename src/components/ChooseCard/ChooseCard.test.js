import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import ChooseCard from "./ChooseCard";

describe('card does not chosen', () => {
    beforeEach(() => {
        render(<ChooseCard isCardChosen={false} />);
    });
    test('choose card text should be displayed', () => {
        expect(screen.getByTestId('choose-text')).toHaveTextContent('Choose a card :)');
    });
});

describe('card does chosen', () => {
    beforeEach(() => {
        render(<ChooseCard isCardChosen={true} />);
    });
    test('flags should be displayed', () => {
        expect(screen.getByTestId('flags')).toBeInTheDocument();
    });
});