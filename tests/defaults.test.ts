import ordinalSuffix from '../src/index';
import {expect, test} from '@jest/globals';

test('defaults', () => {
    expect(ordinalSuffix(1)).toBe('st')
    expect(ordinalSuffix(2)).toBe('nd')
    expect(ordinalSuffix(3)).toBe('rd')
    expect(ordinalSuffix(4)).toBe('th')
    expect(ordinalSuffix(11)).toBe('th')
    expect(ordinalSuffix(502)).toBe('nd')
    expect(ordinalSuffix(1001)).toBe('st')
    expect(ordinalSuffix(433)).toBe('rd')
})