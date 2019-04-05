import React, { Component } from 'react';
import './App.css';
import {Page, AppProvider} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

import SettingsForm from './SettingsForm';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Page title="Settings">
          <SettingsForm></SettingsForm>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
