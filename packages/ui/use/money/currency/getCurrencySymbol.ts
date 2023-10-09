import { CurrencyVariants } from './currency';
import { Currency } from './currency.enum';

export function getCurrencySymbol(currency: CurrencyVariants): string | null {
  switch (currency) {
    case Currency.Ruble:
      return `₽`;
    case Currency.Dollar:
    case Currency.MexicanPeso:
      return `$`;
    case Currency.SingaporeDollar:
      return `S$`;
    case Currency.AustralianDollar:
      return `A$`;
    case Currency.HongKongDollar:
      return `HK$`;
    case Currency.CanadianDollar:
      return `C$`;
    case Currency.Euro:
      return `€`;
    case Currency.Pound:
      return `£`;
    case Currency.Baht:
      return `฿`;
    case Currency.TurkishLira:
      return `₺`;
    case Currency.YuanRenminbi:
      return `CN¥`;
    case Currency.Yen:
      return `¥`;
    case Currency.IsraeliShekel:
      return `₪`;
    case Currency.IndianRupee:
      return `₹`;
    case Currency.SwissFranc:
      return `₣`;
    case Currency.ArmenianDram:
      return `֏`;
    case Currency.Won:
      return `₩`;
    case Currency.Tenge:
      return `₸`;
    case Currency.Hryvnia:
      return `₴`;
    case Currency.UzbekSum:
      return `So'm`;
    case Currency.KyrgyzstanSom:
      return `c`;
    case Currency.Dirham:
      return `Dh`;
    case Currency.TajikistaniSomoni:
      return `SM`;
    case Currency.MalaysianRinggit:
      return `RM`;
    case Currency.BelarusianRuble:
      return `Rbl`;
    case Currency.GeorgianLari:
      return `₾`;
    case Currency.AzerbaijaniManat:
      return `₼`;
    case Currency.SriLankanRupee:
      return `Rs.`;
    case Currency.SerbianDinar:
      return `DIN`;
    case Currency.SaudiRiyal:
      return `SR`;
    case Currency.MongolianTugrik:
      return `₮`;
    case Currency.SouthAfricanRand:
      return `R`;
    case Currency.IranianRial:
      return `IR`;
    case Currency.IndonesianRupiah:
      return `Rp`;
    case Currency.VietnameseDong:
      return `đ`;
    case Currency.NewTurkmenManat:
      return `TMT`;
    case Currency.BrazilianReal:
      return `R$`;
    default:
      return null;
  }
}
