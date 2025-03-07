import { Button, Table } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../hooks/useEventApi';
import { Event } from '../libs/types/event';

const EventPage = () => {
    const navigate = useNavigate();
    const { data: events = [], isLoading, error } = useEvents();

    if (isLoading) return <p>Loading events...</p>;
    if (error) return <p>Error loading events.</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Events</h2>
            <Button
                onClick={() => navigate('/organizer/events/create')}
                className="bg-green-500 text-white px-4 py-2 rounded mb-4"
            >
                Create New Event
            </Button>

            <Table.Root className="w-full">
                <Table.Header className="bg-gray-50">
                    <Table.Row>
                        <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Location
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Start Date
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            End Date
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Organizer
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body className="divide-y divide-gray-200">
                    {events.length > 0 ? (
                        events.map((event: Event) => (
                            <Table.Row key={event.id}>
                                <Table.Cell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {event.title}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {event.description}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {event.location}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(event.startDate).toLocaleString()}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(event.endDate).toLocaleString()}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {event.organizer.fullName} <br />
                                    {event.organizer.email}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex space-x-2">
                                        <Button
                                            onClick={() => navigate(`/organizer/events/${event.id}/edit`)}
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            className="bg-red-500 text-white px-4 py-2 rounded"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    ) : (
                        <Table.Row>
                            <Table.Cell
                                colSpan={7}
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                            >
                                No events found. Start by creating one!
                            </Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table.Root>
        </div>
    );
};

export default EventPage;
