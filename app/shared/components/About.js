// @flow
import React, { Component } from 'react';
import { Divider, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { I18n } from 'react-i18next';

import logo from '../../renderer/assets/images/enumivotext.png';
import WalletPanelButtonResetApp from './Wallet/Panel/Button/ResetApp';

const { shell } = require('electron');

export default class About extends Component<Props> {
  openLink = (url) => shell.openExternal(url);

  render() {
    const {
      clearSettingsCache
    } = this.props.actions;
    return (
      <I18n ns="about">
        {
          (t) => (
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Segment basic>
                    <Header size="large">
                      {t('application_name')}
                      <Header.Subheader>
                        {t('application_version')}
                      </Header.Subheader>
                    </Header>
                    <Divider />
                    <p>{t('about_message_1')}</p>
                    <p>{t('about_message_2')}</p>
                    <Header>
                      {t('about_opensource_title')}
                    </Header>
                    <p>
                      {t('about_opensource_message')}
                      {' '}
                      <a
                        onClick={() => this.openLink(t('about_opensource_link'))}
                        role="button"
                      >
                        {t('about_opensource_link')}
                      </a>.
                    </p>
                  </Segment>
                  <Segment secondary>
                    <p>{t('about_license_type')}</p>
                    <p>{t('about_license_body_1')}</p>
                    <p>{t('about_license_body_2')}</p>
                    <p>{t('about_license_body_3')}</p>
                    <p>{t('about_license_body_4')}</p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <WalletPanelButtonResetApp
                    clearSettingsCache={clearSettingsCache}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )
        }
      </I18n>
    );
  }
}
