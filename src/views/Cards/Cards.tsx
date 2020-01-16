import React, { Suspense } from 'react';
import { Wrapper, Title, NavbarWrapper } from './Cards.styles';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Routes } from '../../constants/Routes';
import { InlineNavbar } from '../../components/InlineNavbar';
import { Route, Switch } from 'react-router-dom';
import { PhysicalCards } from './PhysicalCards';

type TProps = WithTranslation;

const links = [
  {
    to: Routes.CARDS,
    titleTranslationKey: 'app.links.physicalCards',
    exact: true,
  },
];

class Cards extends React.Component<TProps> {
  render() {
    const { t } = this.props;

    return (
      <Wrapper>
        <Title>{t('app.links.cards')}</Title>
        <NavbarWrapper>
          <InlineNavbar links={links.map(link => ({ ...link, title: t(link.titleTranslationKey) }))} />
        </NavbarWrapper>
        <Suspense fallback={null}>
          <Switch>
            <Route path={Routes.CARDS} component={PhysicalCards} />
          </Switch>
        </Suspense>
      </Wrapper>
    );
  }
}

const translated = withTranslation();

export default translated(Cards);
