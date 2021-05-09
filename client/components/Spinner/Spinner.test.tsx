import * as React from 'react';
import * as enzyme from 'enzyme';
import {render} from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';

import {Spinner} from './Spinner';

const adapter = new Adapter();
enzyme.configure({adapter});


    test('should render Spinner', () => {
        const wrapper = render(<Spinner />);

        // expect(wrapper.html()).to.equal(
        //     '<div class="spinnerContainer"><i class="fa fa-circle-o-notch fa-spin fa-2x"></i></div>'
        // );
    });

