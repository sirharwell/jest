import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoList from '../TodoList';

describe(<TodoList />, () => {

  describe('render', () => {
    let component;
    beforeEach( () => {
      component = shallow(<TodoList />)
    });

    it('matches snapshot', () => {
      const tree = toJson(component)
      expect(tree).toMatchSnapshot();
    })
  })

  describe('functionality', () => {
    let component;
    beforeEach( () => {
      component = shallow(<TodoList />)
    });

    it('updates state on change', () => {
      const expected = 'Hello World';
      //find the input
      let input = component.find('input')

      //focus the input
      input.simulate('focus');
      input.simulate('change',
        { target:
          { name: 'name', value: expected }
        }
      )
      const actual = component.state('name')
      expect(actual).toEqual(expected)
    })


  })

})
