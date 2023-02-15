import './App.css'
import BannerCardItem from './components/BannerCardItem/index'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1 card',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2 card',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3 card',
  },
]

const App = () => (
  <ul className="main-card">
    <BannerCardItem
      className={bannerCardsList[0].className}
      headerText={bannerCardsList[0].headerText}
      description={bannerCardsList[0].description}
      key={bannerCardsList[0].id}
    />
    <BannerCardItem
      className={bannerCardsList[1].className}
      headerText={bannerCardsList[1].headerText}
      description={bannerCardsList[1].description}
      key={bannerCardsList[1].id}
    />
    <BannerCardItem
      className={bannerCardsList[2].className}
      headerText={bannerCardsList[2].headerText}
      description={bannerCardsList[2].description}
      key={bannerCardsList[2].id}
    />
  </ul>
)

export default App
