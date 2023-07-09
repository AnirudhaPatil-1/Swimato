import React from "react";
import Accordion from "../components/Accordion";

const HelpScreen = () => {
	let FAQ = [
		{
            id: "01",
            question: "What is Swiggy Customer Care Number?",
            answer: "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. "
        },
        {
            id: "02",
            question:
                "I entered the wrong CVV, why did my transaction still go through?",
            answer: "The logic of validations of CVV resides with either payment gateways or banks. It is absolutely the choice of banks to have CVV as a mandatory input field or not. As per RBI guidelines, 2-Factor-Authentication is not mandatory for less than Rs 2000 rupees transaction. It is not in control of Swiggy. As an organization, we don't store any card information."
        },
        {
            id: "03",
            question: "Can I edit my order?",
            answer: 'In order to edit your order, please click on "Help" and then "I wantto modify items in my order". We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started.',
        },
        {
            id: "04",
            question: "I want to cancel my order",
            answer: 'In order to cancel your order, please click on "Help" and then "I want to cancel my order". Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders.',
        },
        {
            id: "05",
            question: "Is there a minimum order value?",
            answer: "We have no minimum order value and you can order for any amount. ",
        },
        {
            id: "06",
            question: "How long do you take to deliver?",
            answer: "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
        },
	];
	return (
		<div className="helpScreenContainer">
			<div>
				<h2 className="color_light">Help and Support</h2>
				<p className="color_light">
					Let's take a step ahead and help you better
				</p>
			</div>

			<div className="accordionContainer">
				{FAQ.map((accordion) => {
					return <Accordion text={accordion.question} />;
				})}
			</div>
		</div>
	);
};

export default HelpScreen;