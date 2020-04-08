
import * as React from 'react';
import {shallow} from 'enzyme';
import LineItem from '../components/LineItem/index';

const data = [
    {
      title: 'test title',
      objectID: '7687',
      index: 1,
      num_comments: 23,
      url: 'test.com',
      author: 'test author',
      created_at: "2017-02-19T21:16:33.000Z"
    },
  ];
  
  describe('LineItem component', () => {
    test('should render correctly', () => {
      const LineItemComponent = shallow(<LineItem {...data} />);
      expect(LineItemComponent).toMatchSnapshot();
    });
  });