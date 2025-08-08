import {test, expect} from 'vitest';
import { counterReducer, changeIntervalValuesAC, changeScreenValueAC } from './app-reducer';

test('values should be changed', () => {
    const startState = {
        maxValue: 1,
        minValue: 0,
        screenValue: 0
    }

    const endState = counterReducer(startState, changeIntervalValuesAC({maxValue: 5, minValue: 2}));

    expect(endState.maxValue == 5);
    expect(endState.minValue == 2);
    expect(endState.screenValue == 2);
})

test('screenValue should be changed', () => {
    const startState = {
        maxValue: 1,
        minValue: 0,
        screenValue: 0
    }

    const endState = counterReducer(startState, changeScreenValueAC(105));

    expect(endState.screenValue == 105);
    expect(endState.screenValue <= startState.minValue);
})