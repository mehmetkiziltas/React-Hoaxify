import React from 'react';
import { useTranslation } from 'react-i18next';
import './AutoUploadImage.css'

const AutoUploadImage = ({ image, uploading }) => {
    const { t } = useTranslation();
    return (
        <div style={{ position:"relative" }}>
            <img className="img-thumbnail"
                src={image}
                alt="hoax-attachment"
            />
            <div className="overlay" style={{opacity: uploading ? 1 : 0}}>
                <div className="d-flex justify-content-center h-100">
                    <div className="spinner-border text-light m-auto">
                        <span className="sr-only">{t('Loading...')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoUploadImage;