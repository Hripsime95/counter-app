import {test, expect} from 'vitest';
import { counterReducer, changeMaxValueAC, changeMinValueAC } from './app-reducer';

test('max value should be changed', () => {
    const startState = {
        maxValue: 1,
        minValue: 0
    }

    const endState = counterReducer(startState, changeMaxValueAC(5));

    expect(endState.maxValue == 5);
    expect(endState.minValue == startState.minValue);
})

test('min value should be changed', () => {
    const startState = {
        maxValue: 1,
        minValue: 0
    }

    const endState = counterReducer(startState, changeMinValueAC(105));

    expect(endState.minValue == 105);
    expect(endState.maxValue == startState.maxValue);
})