import React from 'react';
import { shallow } from '@theforeman/test';

import ForemanTasksRoutes from './ForemanTasksRoutes';

describe('ForemanTasksRoutes', () => {
  it('should create routes', () => {
    Object.entries(ForemanTasksRoutes).forEach(([key, Route]) => {
      const component = shallow(<Route.render history={{}} some="props" />);
      Route.renderResult = component;
    });

    expect(ForemanTasksRoutes).toMatchSnapshot();
  });
});
