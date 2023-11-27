
import PropTypes from 'prop-types'
import {
  CardBrand,
  BrandImage
} from './StyledMarcas'



const BrandCard = ( {BrandimageSrc, BrandimageAlt}) => {
  return (
    <>
        <CardBrand>
          <BrandImage>
            <img src={BrandimageSrc} alt={BrandimageAlt}/>
          </BrandImage>
        </CardBrand>
    </>
  )
}

BrandCard.propTypes = {
  BrandimageSrc: PropTypes.string,
  BrandimageAlt: PropTypes.string,
}


export default BrandCard