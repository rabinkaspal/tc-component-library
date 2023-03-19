import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EventCard from "./EventCard";

export default {
    title: "TCComponentLibrary/EventCard",
    component: EventCard,
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = args => <EventCard {...args} />;

export const PrimaryActionPending = Template.bind({});
PrimaryActionPending.args = {
    actionRequired: true,
    actionType: "primary",
    actionStatus: "pending",
    actionLabel: "Pay Now",
    eventTitle: "Application Fees Required",
    eventSummary: "Payment Pending. Amount $180.",
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    actionRequired: true,
    actionType: "primary",
    actionStatus: "error",
    actionLabel: "Edit Shareholders",
    eventTitle: "Deed Validation Failed",
    eventSummary: "Failed to validate details. Shareholders information missing.",
};

export const SecondarySuccess = Template.bind({});
SecondarySuccess.args = {
    actionRequired: true,
    actionType: "secondary",
    actionStatus: "done",
    actionLabel: "View Documents",
    eventTitle: "Shareholder Received Legal Advice",
    eventSummary: "Each Applicant received legal advice.",
};

export const SecondaryPending = Template.bind({});
SecondaryPending.args = {
    actionRequired: true,
    actionType: "secondary",
    actionStatus: "pending",
    actionLabel: "Sign Agreement",
    eventTitle: "john.doe@email.com added as a Shareholder",
    eventSummary: "Agreement Signature Pending.",
};

export const SecondaryDefaultNoAction = Template.bind({});
SecondaryDefaultNoAction.args = {
    actionRequired: false,
    actionType: "secondary",
    actionLabel: "View Report",
    eventTitle: "Valuation Report Updated",
    eventSummary: "Valuer uploaded an updated PropertyAssesment Report.",
};

export const SecondaryDefaultAction = Template.bind({});
SecondaryDefaultAction.args = {
    actionRequired: true,
    actionType: "secondary",
    actionLabel: "View Report",
    eventTitle: "Valuation Report Updated",
    eventSummary: "Valuer uploaded an updated PropertyAssesment Report.",
};

export const DefaultSuccess = Template.bind({});
DefaultSuccess.args = {
    actionRequired: false,
    actionStatus: "done",
    eventTitle: "Application Fees Received",
    eventSummary: "Payment Successful. Amount: $180",
};

export const DefaultSuccessAction = Template.bind({});
DefaultSuccessAction.args = {
    actionRequired: true,
    actionLabel: "View Receipt",
    actionStatus: "done",
    eventTitle: "Application Fees Received",
    eventSummary: "Payment Successful. Amount: $180",
};

export const DefaultNoAction = Template.bind({});
DefaultNoAction.args = {
    actionRequired: false,
    actionStatus: "default",
    eventTitle: "Application Fees Received",
    eventSummary: "Payment Successful. Amount: $180",
};
