import star1 from '../../assets/teenyicons_star-solid.svg';
import star2 from '../../assets/teenyicons_star-solid-1.svg';
import star3 from '../../assets/teenyicons_star-solid-2.svg';
import credit from '../../assets/creditPerMonth.svg';
import rollover from '../../assets/rolloverOfUnusedCredits.svg';
import convenience from '../../assets/convenienceFee.svg';
import discount from '../../assets/discountOnFoodAndBeverages.svg';
import perks from '../../assets/MMRPerks.svg';
import flexible from '../../assets/100Flexible.svg';
import Card from '../../componnets/Card';
import './Info.css'
const Info = () => {
  return (
    <div className=" d-flex info mx-auto">
        <div className='info-container'>
            <div className='info-container__one d-none d-md-block d-lg-block'>
                <div className='stars'>
                    <img src={star1} alt="star" />
                    <img src={star3} alt="star" />
                    <img src={star2} alt="star" />
                </div>
                <h2>Reel Deal Monthly Movies</h2>
                <p className='my-2 fs-5'>Your flexible monthly membership to the latest movies</p>
            </div>
            <hr className='d-none d-md-block d-lg-block'/>
            <div className='info-container__two' >
              <h3 className='my-3'>What is MVP Subscription?</h3>
              <ol>
                <li className=''>MVP Subscription provides the member 1 movie credit per month</li>
                <li className=''>They can avail it at any Marcus theatre or Movie Tavern</li>
                <li className=''>Members earn 100 points and get a $5 reward redeemable on food & beverages + many more benefits</li>
              </ol>
            </div>
            <div className='footer'>
                <a href="#" className="btn btn-danger btn-md me-5 px-5 py-3">Get started</a>
                <a href="#" className=" learn fs-5 text-light text-decoration-underline">Learn more</a>
                <p className='d-lg-none d-md-none d-sm-block'>Marcus MVP is only available for use in our Mobile App.</p>
            </div>
        </div>

        <div className='card-container '>
        <div className='info-container__one d-lg-none d-md-none d-sm-block'>
                <div className='stars d-flex justify-content-center align-items-center'>
                    <img src={star1} alt="star" />
                    <h2>Reel Deal Monthly Movies</h2>
                    <img src={star2} alt="star" />
                </div>
                <p className=''>Your flexible monthly membership to the latest movies</p>
            </div>

        <div className='cards d-flex flex-wrap'>
            <Card image={credit} title="1 credit per month" para="One 2D standard movie per month*"/>
            <Card image={rollover} title="Free rollover of unused credits" para="Unused credits will be combined the following month" />
            <Card customStyle={{ width: '9rem' }}  image={perks} title="All MMR perks included" para="+ benefits" />
            <Card customStyle={{ width: '9rem' }} image={flexible} title="100% Flexible" para="Cancel anytime*" />
            <Card image={discount} title="20% Discount on all Food and Beverages" para="Excluding alcohol" />
            <Card image={convenience} title="0 Convenience Fees" para="Waived on all days on any tickets purchase" />
        </div>
        <p><span>1</span>Excludes IMAX and DBOX formats. No fees apply to PAssport Credits only. other fees apply to full priced tickets</p>
        <p><span>2</span>Excludes alcoholic beverages</p>
      </div>

        
    </div>
  )
}

export default Info