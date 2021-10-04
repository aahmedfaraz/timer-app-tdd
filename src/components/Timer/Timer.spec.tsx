import React from 'react';
import { shallow } from 'enzyme';

import Timer from './Timer';

describe('Timer component renders', () => {

    const container = shallow(<Timer />);

    it('should render a div', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    })
    
})