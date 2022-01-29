import { render } from '@testing-library/react'

import Home from '../../../pages/Home'

describe('Home Page', () => {
  it('should render the Home page', () => {
    render(<Home />)
  })
})
