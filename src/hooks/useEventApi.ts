import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllEvents, createEvent, getEvent } from '../libs/api/api';
import { Event, CreateEventDto } from '../libs/types/event';
import { useAuth } from "../context/auth-context";

// Fetch all events
export const useEvents = () => {
    return useQuery<Event[], Error>({
        queryKey: ['events'],
        queryFn: getAllEvents,
    });
};


export const useEventDetail = (eventId: string) => {
    return useQuery({
        queryKey: ['event', eventId],
        queryFn: () => getEvent(eventId),
        enabled: !!eventId, // Only run query if eventId exists
    });
};


export const useCreateEvent = () => {
    const { user } = useAuth();

    return useMutation({
        mutationFn: async (eventData: any) => {
            const formData = new FormData();

            Object.keys(eventData).forEach((key) => {
                if (key !== "banner" && key !== "images") {
                    formData.append(key, String(eventData[key]));
                }
            });

            if (eventData.banner instanceof File) {
                formData.append("banner", eventData.banner);
            }

            if (Array.isArray(eventData.images)) {
                eventData.images.forEach((image: File) => {
                    formData.append("images", image);
                });
            }

            // 👇 Thêm user.id vào formData
            if (user?.id) {
                formData.append("organizerId", user.id);
            }

            return createEvent(formData);
        },
    });
};
