import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

const ImageSlider = ({ images }) => {
    const [activeImageIndex, setActiveImageIndex] = React.useState(0);

    const setPreviousImageIndex = React.useCallback(() => {
        if (activeImageIndex === 0) {
            setActiveImageIndex(images.length - 1);
        } else {
            setActiveImageIndex(activeImageIndex - 1);
        }
    }, [images, activeImageIndex, setActiveImageIndex]);

    const setNextImageIndex = React.useCallback(() => {
        if (activeImageIndex === images.length - 1) {
            setActiveImageIndex(0);
        } else {
            setActiveImageIndex(activeImageIndex + 1);
        }
    }, [images, activeImageIndex, setActiveImageIndex]);

    if (!images.length) {
        return null;
    }

    return (
        <Slider className="pdpImgSlider">
            <Img fluid={images[activeImageIndex].localFile.childImageSharp.fluid} alt={images[activeImageIndex].alt || images[activeImageIndex].name} style={{position: "relative"}}/>
        </Slider>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.array.isRequired,
};

export default ImageSlider;