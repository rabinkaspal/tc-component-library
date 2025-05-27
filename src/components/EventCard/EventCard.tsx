import React from "react";
import Button from "../Button";
import "./EventCard.scss";

export interface EventProps {
    /**
     * Indicates if an action is required for the event.
     * If true, an action button will be displayed.
     */
    actionRequired?: boolean;
    /**
     * Specifies the type of action button to display.
     * - "primary" for a primary action button
     * - "secondary" for a secondary action button
     * - If not specified, defaults to "default".
     */
    actionType?: "primary" | "secondary" | "default";
    /**
     * Indicates the status of the action.
     * This can be used to visually represent the state of the action.
     * - "done" for completed actions
     * - "pending" for actions that are in progress
     * - "error" for actions that have failed
     * - "default" for actions that have not been initiated
     */
    actionStatus?: "done" | "pending" | "error" | "default";
    /**
     * The label for the action button.
     * This will be displayed on the button when `actionRequired` is true.
     */
    actionLabel: string;
    /**
     * The title of the event.
     * This will be displayed prominently in the event card.
     */
    eventTitle: string;
    /**
     * The summary of the event.
     * This will be displayed in the event card.
     */
    eventSummary: string;
}

const EventCard = ({
    actionRequired = false,
    actionType = "default",
    actionStatus = "default",
    actionLabel = "Action",
    eventTitle = "Event Title",
    eventSummary = "Event Summary",
    ...props
}: EventProps) => {
    return (
        <div className={["tc-event", `tc-event--${actionType}`].join(" ")} {...props}>
            <div
                className={`tc-event-timeline_icon tc-event-timeline_icon--${actionStatus}`}
            >
                ◉
            </div>
            <div className="tc-event-row">
                <p className="tc-event-date">Tue Mar 28 2023 14:07:44 AEDT</p>
                <div>
                    <p className="tc-event-title">{eventTitle}</p>
                    {actionRequired && (
                        <Button
                            primary={actionType === "primary"}
                            size="small"
                            label={actionLabel}
                        />
                    )}
                </div>
                <p className="tc-event-summary">{eventSummary}</p>
            </div>
        </div>
    );
};

export default EventCard;
