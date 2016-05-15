import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { mount } from 'react-mounter';

import Layout from './components/layout';
import Text from './components/text';

FlowRouter.route('/', {
  name: 'hello',
  action() {
    mount(Layout, {
      content: () => (<Text />),
    });
  },
});
