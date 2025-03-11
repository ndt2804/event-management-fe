// EventDetail.tsx
import { useParams } from 'react-router-dom';
import { useEventDetail } from '../hooks/useEventApi';
import { Skeleton } from '@radix-ui/themes';
import { CalendarIcon, MapPinIcon, TicketIcon } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";
import { Badge } from '@radix-ui/themes';

const EventDetail = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const { data: event, isLoading, error } = useEventDetail(eventId!);

    if (isLoading) return <Skeleton className="w-full h-80" />;
    if (error) return <p className="text-red-500">Error loading event details.</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold">{event?.title}</h2>
                <Badge className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-md">{event?.category}</Badge>
                <img src={event?.bannerUrl} alt={event?.title} className="w-full h-80 object-cover rounded-lg mt-4" />
                <p className="mt-4 text-gray-700">{event?.description}</p>
                <div className="mt-4 space-y-2 text-gray-600">
                    <p className="flex items-center gap-2"><MapPinIcon size={16} /> Location: {event?.location}</p>
                    <p className="flex items-center gap-2"><CalendarIcon size={16} /> Start: {new Date(event?.startDate).toLocaleString()}</p>
                    <p className="flex items-center gap-2"><CalendarIcon size={16} /> End: {new Date(event?.endDate).toLocaleString()}</p>
                    <p className="flex items-center gap-2"><TicketIcon size={16} /> Tickets: {event?.totalTickets} (Sold: {event?.soldTickets})</p>
                </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
                <Avatar.Root className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
                    <Avatar.Image src="https://via.placeholder.com/50" alt={event?.organizer.fullName} className="w-full h-full object-cover" />
                    <Avatar.Fallback className="flex items-center justify-center w-full h-full text-gray-500">{event?.organizer.fullName.charAt(0)}</Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <p className="font-semibold">{event?.organizer.fullName}</p>
                    <p className="text-sm text-gray-500">{event?.organizer.email}</p>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
