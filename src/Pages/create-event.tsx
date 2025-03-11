import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCreateEvent } from "../hooks/useEventApi";
import { Button } from "@radix-ui/themes";

const EventValidation = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    startDate: Yup.string().required("Start date is required"),
    endDate: Yup.string().required("End date is required"),
    saleStartTime: Yup.string().required("Sale start time is required"),
    category: Yup.string().required("Category is required"),
    totalTickets: Yup.number().required("Total tickets are required").positive().integer(),
});

const CreateEvent = () => {
    const [banner, setBanner] = useState<File | null>(null);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const [illustrations, setIllustrations] = useState<File[]>([]);
    const [illustrationPreviews, setIllustrationPreviews] = useState<string[]>([]);

    const { mutate, isPending } = useCreateEvent();

    const handleBannerUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setBanner(file);
            setBannerPreview(URL.createObjectURL(file));
        }
    };

    const handleIllustrationsUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setIllustrations(files);
        setIllustrationPreviews(files.map(file => URL.createObjectURL(file)));
    };

    const handleSubmit = (values: any) => {
        if (!banner) {
            alert("Please upload a banner image");
            return;
        }

        const eventData = {
            ...values,
            banner,
            images: illustrations,
        };
        mutate(eventData);
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Create New Event</h2>
            <Formik initialValues={{
                title: "",
                description: "",
                location: "",
                startDate: "",
                endDate: "",
                saleStartTime: "",
                category: "",
                totalTickets: "",
            }}
                validationSchema={EventValidation}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-4">
                    <Field name="title" type="text" placeholder="Title" className="block w-full border p-2" />
                    <ErrorMessage name="title" component="div" className="text-red-500" />

                    <Field name="description" as="textarea" placeholder="Description" className="block w-full border p-2" />
                    <ErrorMessage name="description" component="div" className="text-red-500" />

                    <Field name="location" type="text" placeholder="Location" className="block w-full border p-2" />
                    <ErrorMessage name="location" component="div" className="text-red-500" />

                    <Field name="startDate" type="datetime-local" className="block w-full border p-2" />
                    <ErrorMessage name="startDate" component="div" className="text-red-500" />

                    <Field name="endDate" type="datetime-local" className="block w-full border p-2" />
                    <ErrorMessage name="endDate" component="div" className="text-red-500" />

                    <Field name="saleStartTime" type="datetime-local" className="block w-full border p-2" />
                    <ErrorMessage name="saleStartTime" component="div" className="text-red-500" />

                    <Field name="category" type="text" placeholder="Category" className="block w-full border p-2" />
                    <ErrorMessage name="category" component="div" className="text-red-500" />

                    <Field name="totalTickets" type="number" placeholder="Total Tickets" className="block w-full border p-2" />
                    <ErrorMessage name="totalTickets" component="div" className="text-red-500" />

                    {/* Upload Banner */}
                    <div>
                        <label>Banner Image</label>
                        <input type="file" accept="image/*" onChange={handleBannerUpload} />
                        {bannerPreview && <img src={bannerPreview} alt="Banner Preview" className="mt-2 w-full rounded-md" />}
                    </div>

                    {/* Upload Multiple Illustrations */}
                    <div>
                        <label>Illustration Images</label>
                        <input type="file" accept="image/*" multiple onChange={handleIllustrationsUpload} />
                        <div className="grid grid-cols-3 gap-2 mt-2">
                            {illustrationPreviews.map((src, index) => (
                                <img key={index} src={src} alt={`Illustration ${index}`} className="w-full rounded-md" />
                            ))}
                        </div>
                    </div>

                    <Button type="submit" className="bg-green-500 text-white" disabled={isPending || !banner}>
                        {isPending ? 'Creating...' : 'Create Event'}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateEvent;
