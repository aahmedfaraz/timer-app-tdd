import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Timer from '../Timer/Timer';

describe('App Component renders', () => {

    const container = shallow(<App />);

    it('should render a heading', () => {
        expect(container.find('h1').length).toBeGreaterThanOrEqual(1);
    })

    it('should render Timer Component', () => {
        expect(container.containsMatchingElement(<Timer />)).toEqual(true);
    })
})