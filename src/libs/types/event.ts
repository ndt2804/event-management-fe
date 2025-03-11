// src/types/eventTypes.ts

export interface Event {
    id: string;
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    saleStartTime: string;
    category: string;
    totalTickets: number;
    soldTickets: number;
    imageUrl?: string;
    organizer: {
        id: string;
        fullName: string;
        email: string;
    };
    ticketTypes: TicketType[];
}

export interface TicketType {
    id: string;
    name: string;
    price: number;
    tickets: Ticket[];
}

export interface Ticket {
    id: string;
    ticketNumber: string;
    isUsed: boolean;
    purchaseDate: string;
}

export interface CreateEventDto {
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    saleStartTime: string;
    category: string;
    totalTickets: number;
    banner: File;
    images: File[];
}
