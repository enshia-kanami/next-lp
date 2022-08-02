import CompanyInfo from '../Company/CompanyInfo';
import News from '../News/News';
import NewsContent from '../News/NewsContent';
import Service from '../Service/Service';

export default function Top() {
  return (
    <>
      <CompanyInfo />
      <Service />
      <News />
      <NewsContent title='News1' text='NewsText' date='2022.5.10'></NewsContent>
      <NewsContent title='News2' text='NewsText' date='2022.6.10'></NewsContent>
      <NewsContent title='News3' text='NewsText' date='2022.7.15'></NewsContent>
    </>
  );
}
