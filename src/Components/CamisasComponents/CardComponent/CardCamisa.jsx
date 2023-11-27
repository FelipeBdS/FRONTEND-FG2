import PropTypes from 'prop-types';
import {
    DesktopCardContainer,
    DesktopCard,
    DesktopImageCard,
    Price,
    Description
} from './StyledCardCamisa';

const CardCamisa = ({ src, price, description }) => {
    return (
        <DesktopCardContainer>
            <DesktopCard>
                <DesktopImageCard src={src} alt="Imagem da Camisa" />
                <Price>{price}</Price>
                <Description>{description}</Description>
            </DesktopCard>
        </DesktopCardContainer>
    );
};

CardCamisa.propTypes = {
    src: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CardCamisa;