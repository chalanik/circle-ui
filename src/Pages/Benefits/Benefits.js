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
                    <BenefitsCard 
                        className="benefits-card-items"
                        image="./benefits1.svg"
                        title="Back up childcare from Bright Horizons"
                        text="A total of 40 days of backup childcare are available to you"
                    />
                    <BenefitsCard 
                        className="benefits-card-items"
                        image="./benefits2.svg"
                        title="Special day care and preschool offerings for employees"
                        text="The firm offeres education options with multiple partners"
                    />
                    <BenefitsCard 
                        className="benefits-card-items"
                        image="./benefits3.svg"
                        title="Newborn care education courses"
                        text="The Morgan Stanley Children’s Hospital offers classes for new parents and parents to-be"
                    />
                </div>
                <div className="benefits-card-container">
                    <BenefitsCard 
                        className="benefits-card-items"
                        image="./benefits4.svg"
                        title="Fertility Benefits"
                        text="The firm offers a $30,000 benefits for fertility treatment"
                    />
                    <BenefitsCard 
                        className="benefits-card-items"
                        image="./benefits5.svg"
                        title="Healthy meals for kids"
                        text="Nurture Life prepares organic, ready-to-eat meals for babies, toddlers and kids and delivers them straight to your door"
                    />
                    <BenefitsCard 
                        className="benefits-card-items"
                        image="./benefits6.svg"
                        title="Free premium membership to Care.com"
                        text="Need a babysitter, tutor, or elderly care? Your premium membership lets you find a wide variety of caregivers"
                    />
                </div>
            </div>
        </div>
        </>
    );
}

export default Benefits;