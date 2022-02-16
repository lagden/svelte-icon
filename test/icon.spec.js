/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import Icon from '../src/icon.js'

describe('Icon', () => {
	afterEach(cleanup)

	test('should match snapshot default', () => {
		const {container} = render(Icon, {
			props: {
				name: 'icon_name',
			},
		})
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot props', () => {
		const {container} = render(Icon, {
			props: {
				style: '--tadashi_svelte_icon_fill: green;--tadashi_svelte_icon_width: 30px',
				name: 'icon_name',
			},
		})
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot props', () => {
		const {container} = render(Icon, {
			props: {
				name: 'icon_name',
				useBase: false,
				useTransition: true,
			},
		})
		expect(container).toMatchSnapshot()
	})
})
