import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllEvents, createEvent } from '../libs/api/api';
import { Event, CreateEventDto } from '../libs/types/event';

// Fetch all events
export const useEvents = () => {
    return useQuery<Event[], Error>({
        queryKey: ['events'],
        queryFn: getAllEvents,
    });
};

// Create a new event
export const useCreateEvent = () => {
    const queryClient = useQueryClient();

    return useMutation<Event, Error, CreateEventDto>({
        mutationFn: createEvent,
        onSuccess: () => {
            // Invalidate the query to trigger a refetch of events after creating a new event
            queryClient.invalidateQueries({ queryKey: ['events'] });  // Use object notation for better type safety
        },
        onError: (error) => {
            console.error("Error creating event:", error);
        },
    });
};
