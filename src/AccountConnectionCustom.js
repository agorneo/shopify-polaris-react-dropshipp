import React from 'react';
import {AccountConnection, Link} from '@shopify/polaris';

export default class AccountConnectionExample extends React.Component {
  state = {
    connected: false,
    accountName: '',
  };

  render() {
    const {accountName, connected} = this.state;
    const buttonText = connected ? 'Disconnect' : 'Connect';
    const details = connected ? 'Account connected' : 'No account connected';
    const terms = connected ? null : (
        <p>
          By clicking <strong>Connect</strong>, you agree to accept Dropshipp’s{' '}
          <Link url="Example App">terms and conditions</Link>. You’ll pay a
          commission rate of 15% on sales made through Dropshipp.
        </p>
    );

    return (
        <AccountConnection
            accountName={accountName}
            connected={connected}
            title="Dropshipp"
            action={{
              content: buttonText,
              onAction: this.handleAction,
            }}
            details={details}
            termsOfService={terms}
        />
    );
  }

  handleAction = () => {
    this.setState((state) => {
      const connected = !state.connected;
      const accountName = connected ? 'Jane Appleseed' : '';

      return {
        connected,
        accountName,
      };
    });
  };
}
