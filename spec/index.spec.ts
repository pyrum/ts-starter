import { square } from '../src/index'

describe('Basic', () => {
  it('should pass', () => {
    expect(square(3)).toEqual(9)
  })
  it('should fail', () => {
    expect(square(3)).not.toEqual(11)
  })
})
