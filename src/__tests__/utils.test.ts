import { convertBetweenCurrencies } from '../utils/covertBetweenCurrencies';
import { countAccountsInOneCurrency } from '../utils/countAccountsInOneCurrency';

const rates = {
  GBP: 0.765433,
  USD: 1,
  EUR: 0.899119,
  AUD: 1.449486,
};

const accounts = [
  {
    id: '1',
    title: 'test 1',
    currency: 'GBP',
    value: 28600,
  },
  {
    id: '2',
    title: 'test 2',
    currency: 'USD',
    value: 14700,
  },
  {
    id: '3',
    title: 'test 3',
    currency: 'AUD',
    value: 5300,
  },
  {
    id: '4',
    title: 'test 4',
    currency: 'EUR',
    value: 3490,
  },
];

describe('Working with currencies', () => {
  it('convert to the same currency', () => {
    expect(convertBetweenCurrencies('GBP', 1, 'GBP', rates)).toBeCloseTo(1);
  });

  it('convert between currencies', () => {
    expect(convertBetweenCurrencies('GBP', 1, 'USD', rates)).toBeCloseTo(1.3064);
    expect(convertBetweenCurrencies('USD', 1, 'GBP', rates)).toBeCloseTo(0.77);
  });

  it('count accounts in one currency', () => {
    expect(countAccountsInOneCurrency(rates, accounts, 'GBP')).toBeCloseTo(36290.39);
  });
});
