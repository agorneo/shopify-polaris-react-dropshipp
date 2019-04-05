import React, {Component} from 'react';
import {
  Layout, Card, Checkbox, ChoiceList, FormLayout, Heading,
  Link, Stack, Select, TextField, VisuallyHidden, PageActions
        } from '@shopify/polaris';
import AccountConnectionExample from './AccountConnectionCustom';
import MathSymbol from './MathSymbol'

class SettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoPublish: true,
      pricingRuleMethod: 'Multiplier',
      pricingModifier: '1',
      trackingUrl: '',
      emailFulfillment: true,
      reportingEmailFrequency: ['Weekly'],
    };
  }

  render(){
    const PricingRuleInput = (
      <Select
        label="Pricing rule method"
        labelHidden
        options={['Multiplier', 'Fixed Markup']}
        value={this.state.pricingRuleMethod}
        onChange={this.handleInputChange('pricingRuleMethod')}
      />
    );

    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <Layout>
          <Layout.AnnotatedSection
              title="Connected Store"
              description="Connect your shopify store with your dropshipp account."
          >
            <AccountConnectionExample />
          </Layout.AnnotatedSection>

          <Layout.AnnotatedSection
              title="Selling and Shipping"
              description="Manage products, pricing, shipping and customer notifications"
          >
            <Card sectioned title="Products">
              <Checkbox
                label="Automatically publish new products"
                helpText="New products added in Dropshipp..."
                checked={this.state.autoPublish}
                onChange={this.handleInputChange('autoPublish')}
              />
            </Card>
            <Card sectioned title="Pricing Rules">
              <Stack alignment='baseline'>
                <span>Product list price</span>
                <MathSymbol>=</MathSymbol>
                <span>Your cost</span>
                <MathSymbol>{this.state.pricingRuleMethod === 'Multiplier' ? '*' : '+'}</MathSymbol>
                <div style={{maxWidth: 200}}>
                  <TextField
                    connectedLeft={PricingRuleInput}
                    value={this.state.pricingModifier}
                    onChange={this.handleInputChange('pricingModifier')}
                  />
                </div>
              </Stack>
            </Card>
            <Card sectioned title="Shipping">
              <FormLayout>
                <Checkbox
                  label="EMail customers when orders are fulfilled"
                  checked={this.state.emailFulfillment}
                  onChange={this.handleInputChange('emailFulfillment')}
                />
                <TextField
                  value={this.state.trackingUrl}
                  onChange={this.handleInputChange('trackingUrl')}
                  label="Custom shippment tracjing url"
                />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
              title="Reporting"
              description="Manage how you track success with Dropshipp"
              helpText={
                <span>Overrides the normal shippment tracking link emailed to your customer.
                  <Link url="https://dropshipp.io/support/custom_tracking_urls">
                    Learn more about custom tracking urls
                  </Link>
                </span>
              }
          >
            <Card sectioned>
              <VisuallyHidden>
                <Heading>
                  Reporting details
                </Heading>
              </VisuallyHidden>
              <ChoiceList
                title="Receive reports via email"
                choices={[
                  {label: 'Never', value: 'Never'},
                  {label: 'Daily', value: 'Daily'},
                  {label: 'Weekly', value: 'Weekly'},
                  {label: 'Mothly', value: 'Mothly'},
                ]}
                selected={this.state.reportingEmailFrequency}
                onChange={this.handleInputChange('reportingEmailFrequency')}
              />
            </Card>
          </Layout.AnnotatedSection>
          <Layout.Section>
            <PageActions
              primaryAction={{
                content: 'Save',
                submit: true,
              }}
            />
          </Layout.Section>
        </Layout>
      </form>
    );
  }

  handleInputChange(field) {
    return (value) => this.setState({[field]: value});
  }

  handleFormSubmit(evt){
    evt.preventDefault();
    console.log(this.state);
  }
}

export default SettingsForm;