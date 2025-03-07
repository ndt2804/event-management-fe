import { Formik, Form, Field, ErrorMessage } from 'formik';
import { EventValidation } from '../libs/validation/form-validation';
import { useNavigate } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import { useCreateEvent } from '../hooks/useEventApi';
import { useAuth } from '../context/auth-context';

interface FormValues {
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    saleStartTime: string;
    category: string;
    totalTickets: number;
}

const CreateEventPage = () => {
    const navigate = useNavigate();
    const createEventMutation = useCreateEvent();
    const { user } = useAuth();

    const initialValues: FormValues = {
        title: '',
        description: '',
        location: '',
        startDate: '',
        endDate: '',
        saleStartTime: '',
        category: '',
        totalTickets: 0,
    };

    const handleSubmit = (values: FormValues) => {
        const payload = {
            title: values.title,
            description: values.description,
            location: values.location,
            startDate: new Date(values.startDate).toISOString(),
            endDate: new Date(values.endDate).toISOString(),
            saleStartTime: new Date(values.saleStartTime).toISOString(),
            category: values.category,
            totalTickets: values.totalTickets,
            organizerId: user?.id || '',
        };

        createEventMutation.mutate(payload, {
            onSuccess: () => {
                navigate('/organizer/events');
            },
            onError: (error) => {
                console.error('Error creating event:', error);
            },
        });
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={EventValidation}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <Field
                                name="title"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <Field
                                as="textarea"
                                name="description"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* Location */}
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Location
                            </label>
                            <Field
                                name="location"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* Start Date */}
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                                Start Date
                            </label>
                            <Field
                                name="startDate"
                                type="datetime-local"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <ErrorMessage name="startDate" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* End Date */}
                        <div>
                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                                End Date
                            </label>
                            <Field
                                name="endDate"
                                type="datetime-local"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <ErrorMessage name="endDate" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* Sale Start Time */}
                        <div>
                            <label htmlFor="saleStartTime" className="block text-sm font-medium text-gray-700">
                                Sale Start Time
                            </label>
                            <Field
                                name="saleStartTime"
                                type="datetime-local"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <ErrorMessage name="saleStartTime" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <Field
                                name="category"
                                type="text"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* Total Tickets */}
                        <div>
                            <label htmlFor="totalTickets" className="block text-sm font-medium text-gray-700">
                                Total Tickets
                            </label>
                            <Field
                                name="totalTickets"
                                type="number"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                            <ErrorMessage name="totalTickets" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* Organizer ID (readonly) */}
                        {user && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Organizer ID</label>
                                <input
                                    type="text"
                                    value={user.id}
                                    readOnly
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                                />
                            </div>
                        )}

                        <div className="pt-4">
                            <Button type="submit" className="bg-green-500 text-white" disabled={isSubmitting}>
                                {isSubmitting ? 'Creating...' : 'Create Event'}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateEventPage;
