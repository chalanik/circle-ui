import React from "react";
import './Benefits.css';
import BenefitsCard from "../../Layout/BenefitsCard/BenefitsCard";

function Benefits() {
    return (
        <>
        <div className="benefits-wrapper-container">
            <div className="benefits-container">
                <div className="benefits-title"> The firm is pleased to offer you the following benefits </div>
                <div className="benefits-card-container">
                    <BenefitsCard className="benefits-card-items"/>
                    <BenefitsCard className="benefits-card-items"/>
                    <BenefitsCard className="benefits-card-items"/>
                </div>
                <div className="benefits-card-container">
                    <BenefitsCard className="benefits-card-items"/>
                    <BenefitsCard className="benefits-card-items"/>
                    <BenefitsCard className="benefits-card-items"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Benefits;