import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'
import checkPropTypes from 'check-prop-types'

import { findByTestAttr, checkProps } from '../../../utils/testHelpers'

const setUp = (props={}) => {
	const component = shallow(<Headline {...props} />)
	return component
};

describe("Headline Component", () => {
	describe("Check PropTypes", () => {
		it ("should not throw a warning", () => {
			const expectedProps = {
				header: "Test header",
				desc: "Test description"
			};

			const propsError = checkProps(Headline.propTypes, expectedProps);

			expect(propsError).toBeUndefined();
		});
	});

	describe("Have props", () => {
		let wrapper;

		beforeEach(() => {
			const props = {
				header: "Test header",
				desc: "Test description"
			}

			wrapper = setUp(props);
		});

		it("should render without errors", () => {
			const component = findByTestAttr(wrapper, 'HeadlineComponent');
			expect(component.length).toBe(1);
		});

		it("should render a H1", () => {
			const h1 = findByTestAttr(wrapper, 'header');
			expect(h1.length).toBe(1);
		});

		it("should render a description", () => {
			const desc = findByTestAttr(wrapper, 'desc');
			expect(desc.length).toBe(1);
		});
	});

	describe("Have NO props", () => {
		let wrapper;

		beforeEach(() => {
			wrapper = setUp();
		});

		it("should not render", () => {
			const component = findByTestAttr(wrapper, 'HeadlineComponent');
			expect(component.length).toBe(0);
		});
	});
});