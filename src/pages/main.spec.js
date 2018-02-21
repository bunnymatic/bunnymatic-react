import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

describe("main page", function() {
  it("should include the welcome message", function() {
    const rendered = shallow(<Main />)
    expect(rendered.text()).toMatch("Welcome");
  });
})
