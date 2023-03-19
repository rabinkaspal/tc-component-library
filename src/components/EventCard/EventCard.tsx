import React from "react";
import Button from "../Button";
import "./EventCard.scss";

export interface EventProps {
    actionRequired?: boolean;
    actionType?: "primary" | "secondary" | "default";
    actionStatus?: "done" | "pending" | "error" | "default";
    actionLabel: string;
    eventTitle: string;
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
