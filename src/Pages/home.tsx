// import { Avatar, Button, Card, Flex, Text, Box } from "@radix-ui/themes";
// import { Calendar, MapPin, Ticket } from "lucide-react";

// const events = [
//     {
//         id: 1,
//         title: "Music Festival 2025",
//         date: "March 20, 2025",
//         location: "New York City, NY",
//         image: "https://source.unsplash.com/600x400/?concert",
//         price: "$50",
//     },
//     {
//         id: 2,
//         title: "Tech Conference 2025",
//         date: "April 15, 2025",
//         location: "San Francisco, CA",
//         image: "https://source.unsplash.com/600x400/?conference",
//         price: "$150",
//     },
// ];

// export default function Home() {
//     return (
//         <div className="p-6 space-y-12">
//             {/* Hero Section */}
//             <section className="text-center bg-gray-900 text-white py-20 px-6 rounded-lg">
//                 <h1 className="text-5xl font-bold">Find & Book Exciting Events</h1>
//                 <p className="mt-4 text-lg">Discover concerts, tech conferences, and sports events near you.</p>
//                 <Button className="mt-6" variant="solid" color="cyan" size="3">
//                     Explore Events
//                 </Button>
//             </section>

//             {/* Featured Events */}
//             <section>
//                 <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
//                 <Flex gap="4">
//                     {events.map((event) => (
//                         <Card key={event.id} className="w-80 p-4 shadow-lg">
//                             <img src={event.image} alt={event.title} className="rounded-lg mb-4" />
//                             <Text as="div" size="4" weight="bold">
//                                 {event.title}
//                             </Text>
//                             <Flex align="center" gap="2" mt="2">
//                                 <Calendar size={16} />
//                                 <Text size="2">{event.date}</Text>
//                             </Flex>
//                             <Flex align="center" gap="2" mt="1">
//                                 <MapPin size={16} />
//                                 <Text size="2">{event.location}</Text>
//                             </Flex>
//                             <Flex justify="between" align="center" mt="4">
//                                 <Text size="3" weight="bold">
//                                     {event.price}
//                                 </Text>
//                                 <Button variant="outline" color="cyan" size="2">
//                                     <Ticket size={16} /> Buy Ticket
//                                 </Button>
//                             </Flex>
//                         </Card>
//                     ))}
//                 </Flex>
//             </section>

//             {/* Newsletter Subscription */}
//             <section className="bg-gray-100 p-8 text-center rounded-lg">
//                 <h2 className="text-2xl font-semibold">Stay Updated</h2>
//                 <p className="mt-2 text-gray-600">Subscribe to get updates on upcoming events.</p>
//                 <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="mt-4 p-2 w-1/2 border rounded-lg"
//                 />
//                 <Button className="mt-4" variant="solid" color="cyan" size="3">
//                     Subscribe
//                 </Button>
//             </section>
//             <div className="space-y-10 p-6">
//                 {/* Hero Section */}
//                 <section className="text-center py-20 bg-gray-100">
//                     <h1 className="text-4xl font-bold">Find Your Next Experience</h1>
//                     <p className="text-gray-600 mt-2">Discover and book tickets for the best events near you.</p>
//                     <Button className="mt-4" variant="solid" color="cyan" size="3">
//                         Explore Events
//                     </Button>
//                 </section>

//                 {/* Featured Events */}
//                 <section className="space-y-6">
//                     <h2 className="text-2xl font-semibold">Featured Events</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {[1, 2, 3].map((event) => (
//                             <Card key={event} className="p-4">
//                                 <img src="https://via.placeholder.com/300" alt="Event" className="w-full rounded-md" />
//                                 <h3 className="mt-3 text-lg font-medium">Event Title</h3>
//                                 <p className="text-sm text-gray-500 flex items-center gap-1">
//                                     <Calendar size={16} /> March 20, 2025
//                                 </p>
//                                 <p className="text-sm text-gray-500 flex items-center gap-1">
//                                     <MapPin size={16} /> New York, NY
//                                 </p>
//                                 <Button className="mt-3" variant="soft">
//                                     Buy Ticket
//                                 </Button>
//                             </Card>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Categories */}
//                 <section className="space-y-6">
//                     <h2 className="text-2xl font-semibold">Browse by Categories</h2>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                         {["Music", "Sports", "Theatre", "Tech"].map((category) => (
//                             <Button key={category} variant="outline" size="3">
//                                 {category}
//                             </Button>
//                         ))}
//                     </div>
//                 </section>

//                 {/* Testimonials */}
//                 <section className="space-y-6 bg-gray-50 p-6 rounded-md">
//                     <h2 className="text-2xl font-semibold text-center">What Our Users Say</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {[1, 2].map((testimonial) => (
//                             <Card key={testimonial} className="p-4">
//                                 <p className="italic">“This platform made it so easy to find and book amazing events!”</p>
//                                 <div className="flex items-center gap-3 mt-3">

//                                     <span className="font-medium">John Doe</span>
//                                 </div>
//                             </Card>
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }
// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../context/auth-context';
// import {
//     Calendar,
//     MapPin,
//     Users,
//     Ticket,
//     Search,
//     TrendingUp,
//     Star,
//     Music,
//     Theater,
//     Laptop,
//     Utensils,
//     Palette,
//     Activity
// } from 'lucide-react';

// interface Event {
//     id: string;
//     title: string;
//     date: string;
//     location: string;
//     imageUrl: string;
//     attendees: number;
//     price: number;
//     category: string;
// }

// const Home: React.FC = () => {
//     const [events, setEvents] = useState<Event[]>([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const { user } = useAuth();

//     const categories = [
//         { name: 'Music', icon: Music },
//         { name: 'Theater', icon: Theater },
//         { name: 'Technology', icon: Laptop },
//         { name: 'Food', icon: Utensils },
//         { name: 'Art', icon: Palette },
//         { name: 'Sports', icon: Activity }
//     ];

//     useEffect(() => {
//         // Simulated API call
//         const fetchEvents = async () => {
//             const mockEvents: Event[] = [
//                 // ... your events data
//             ];
//             setEvents(mockEvents);
//         };
//         fetchEvents();
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Hero Section */}
//             <section className="relative h-[600px]">
//                 <div className="absolute inset-0">
//                     <img
//                         src="https://source.unsplash.com/random/1920x1080?concert"
//                         alt="Hero"
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-50" />
//                 </div>
//                 <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
//                     <h1 className="text-5xl font-bold text-white mb-6">Discover Amazing Events</h1>
//                     <p className="text-xl text-gray-200 mb-8">
//                         Find and book tickets for the best events in your city
//                     </p>
//                     <div className="flex max-w-2xl bg-white rounded-lg shadow-lg p-2">
//                         <input
//                             type="text"
//                             placeholder="Search events, venues, or artists..."
//                             className="flex-1 px-4 py-2 focus:outline-none"
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                         <button className="bg-blue-500 text-white px-6 py-2 rounded-md flex items-center">
//                             <Search className="w-5 h-5 mr-2" />
//                             Search
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-12 bg-white">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h2>
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//                         {categories.map((category) => (
//                             <button
//                                 key={category.name}
//                                 className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                             >
//                                 <category.icon className="w-8 h-8 mb-3 text-blue-500" />
//                                 <span className="text-gray-900 font-medium">{category.name}</span>
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section className="py-12 bg-gray-50">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex justify-between items-center mb-8">
//                         <h2 className="text-3xl font-bold text-gray-900">Trending Events</h2>
//                         <button className="flex items-center text-blue-500 hover:text-blue-600">
//                             <TrendingUp className="w-5 h-5 mr-2" />
//                             View All
//                         </button>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {events.slice(0, 3).map((event) => (
//                             <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
//                                 <div className="relative">
//                                     <img
//                                         src={event.imageUrl}
//                                         alt={event.title}
//                                         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                                     />
//                                     <div className="absolute top-4 right-4 bg-white rounded-full p-2">
//                                         <Star className="w-5 h-5 text-yellow-400" />
//                                     </div>
//                                 </div>
//                                 <div className="p-6">
//                                     <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
//                                     <div className="flex items-center text-sm text-gray-600 mb-2">
//                                         <Calendar className="w-4 h-4 mr-2" />
//                                         <span>{event.date}</span>
//                                     </div>
//                                     <div className="flex items-center text-sm text-gray-600 mb-2">
//                                         <MapPin className="w-4 h-4 mr-2" />
//                                         <span>{event.location}</span>
//                                     </div>
//                                     <div className="flex items-center text-sm text-gray-600 mb-4">
//                                         <Users className="w-4 h-4 mr-2" />
//                                         <span>{event.attendees} attendees</span>
//                                     </div>
//                                     <div className="flex justify-between items-center">
//                                         <span className="text-lg font-bold text-gray-900">${event.price}</span>
//                                         <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
//                                             <Ticket className="w-4 h-4 mr-2" />
//                                             Get Tickets
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Featured Events Section */}
//             <section className="py-12 bg-white">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Events</h2>
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                         {events.slice(0, 2).map((event) => (
//                             <div key={event.id} className="flex bg-gray-50 rounded-lg overflow-hidden">
//                                 <img
//                                     src={event.imageUrl}
//                                     alt={event.title}
//                                     className="w-1/3 object-cover"
//                                 />
//                                 <div className="flex-1 p-6">
//                                     <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
//                                     <p className="text-gray-600 mb-4">
//                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
//                                     </p>
//                                     <div className="flex items-center text-sm text-gray-600 mb-2">
//                                         <Calendar className="w-4 h-4 mr-2" />
//                                         <span>{event.date}</span>
//                                     </div>
//                                     <div className="flex items-center text-sm text-gray-600 mb-4">
//                                         <MapPin className="w-4 h-4 mr-2" />
//                                         <span>{event.location}</span>
//                                     </div>
//                                     <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
//                                         Learn More
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Newsletter Section */}
//             <section className="py-12 bg-blue-500">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-3xl font-bold text-white mb-4">Never Miss an Event</h2>
//                     <p className="text-blue-100 mb-8">Subscribe to our newsletter for updates and exclusive offers</p>
//                     <div className="max-w-xl mx-auto flex">
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="flex-1 px-4 py-3 rounded-l-md focus:outline-none"
//                         />
//                         <button className="bg-blue-700 text-white px-6 py-3 rounded-r-md hover:bg-blue-800">
//                             Subscribe
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-gray-900 text-gray-300 py-12">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         <div>
//                             <h3 className="text-white text-lg font-semibold mb-4">About</h3>
//                             <p className="text-sm">
//                                 Your premier destination for discovering and booking the best events in your area.
//                             </p>
//                         </div>
//                         <div>
//                             <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
//                             <ul className="space-y-2">
//                                 <li><a href="#" className="hover:text-white">Browse Events</a></li>
//                                 <li><a href="#" className="hover:text-white">Sell Tickets</a></li>
//                                 <li><a href="#" className="hover:text-white">Help Center</a></li>
//                                 <li><a href="#" className="hover:text-white">Contact Us</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
//                             <ul className="space-y-2">
//                                 {categories.map(category => (
//                                     <li key={category.name}>
//                                         <a href="#" className="hover:text-white">{category.name}</a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
//                             <div className="flex space-x-4">
//                                 {/* Add your social media icons here */}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
//                         <p>&copy; 2024 EventBox. All rights reserved.</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/auth-context';
import {
    Calendar,
    MapPin,
    Users,
    Ticket,
    Search,
    TrendingUp,
    Star,
    Music,
    Theater,
    Laptop,
    Utensils,
    Palette,
    Activity,
    ChevronRight,
    Instagram,
    Twitter,
    Facebook,
    Linkedin
} from 'lucide-react';

// ... (keep the Event interface and other imports)
interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    attendees: number;
    price: number;
    imageUrl: string;
}

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const events: Event[] = [
        {
            id: 1,
            title: "Summer Music Festival",
            date: "July 15, 2024",
            location: "Central Park, New York",
            attendees: 5000,
            price: 89.99,
            imageUrl: "https://source.unsplash.com/random/800x600?concert"
        },
        {
            id: 2,
            title: "Tech Conference 2024",
            date: "September 22, 2024",
            location: "Convention Center, San Francisco",
            attendees: 3000,
            price: 299.99,
            imageUrl: "https://source.unsplash.com/random/800x600?technology"
        },
        {
            id: 3,
            title: "Food & Wine Expo",
            date: "October 5, 2024",
            location: "Expo Hall, Chicago",
            attendees: 2000,
            price: 59.99,
            imageUrl: "https://source.unsplash.com/random/800x600?food"
        },
        {
            id: 4,
            title: "International Film Festival",
            date: "November 10, 2024",
            location: "Cinema Complex, Los Angeles",
            attendees: 1500,
            price: 129.99,
            imageUrl: "https://source.unsplash.com/random/800x600?cinema"
        }
    ];
    const categories = [
        { name: 'Music', icon: Music },
        { name: 'Theater', icon: Theater },
        { name: 'Technology', icon: Laptop },
        { name: 'Food & Drink', icon: Utensils },
        { name: 'Art', icon: Palette },
        { name: 'Sports', icon: Activity },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[700px]">
                <div className="absolute inset-0">
                    <img
                        src="https://source.unsplash.com/random/1920x1080?concert"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
                    <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in-down">
                        Discover Amazing Events
                    </h1>
                    <p className="text-2xl text-gray-200 mb-8 animate-fade-in-up">
                        Find and book tickets for the best events in your city
                    </p>
                    <div className="flex max-w-2xl bg-white rounded-lg shadow-lg p-2 animate-fade-in">
                        <input
                            type="text"
                            placeholder="Search events, venues, or artists..."
                            className="flex-1 px-4 py-3 focus:outline-none text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-8 py-3 rounded-md flex items-center text-lg font-semibold">
                            <Search className="w-5 h-5 mr-2" />
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Browse Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
                            >
                                <category.icon className="w-12 h-12 mb-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
                                <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trending Events Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900">Trending Events</h2>
                        <button className="flex items-center text-blue-500 hover:text-blue-600 text-lg font-semibold">
                            View All
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.slice(0, 3).map((event) => (
                            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                                        <Star className="w-6 h-6 text-yellow-400" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                                    <div className="flex items-center text-sm text-gray-600 mb-2">
                                        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 mb-2">
                                        <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 mb-4">
                                        <Users className="w-5 h-5 mr-2 text-blue-500" />
                                        <span>{event.attendees} attendees</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-gray-900">${event.price}</span>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center transition-colors">
                                            <Ticket className="w-5 h-5 mr-2" />
                                            Get Tickets
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Events Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Events</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {events.slice(0, 2).map((event) => (
                            <div key={event.id} className="flex bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="w-2/5 object-cover"
                                />
                                <div className="flex-1 p-8">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{event.title}</h3>
                                    <p className="text-gray-600 mb-6">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                                    </p>
                                    <div className="flex items-center text-sm text-gray-600 mb-3">
                                        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 mb-6">
                                        <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                                        <span>{event.location}</span>
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md transition-colors text-lg font-semibold">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Never Miss an Event</h2>
                    <p className="text-xl text-blue-100 mb-10">Subscribe to our newsletter for updates and exclusive offers</p>
                    <div className="max-w-xl mx-auto flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-l-md focus:outline-none text-lg"
                        />
                        <button className="bg-blue-700 text-white px-8 py-4 rounded-r-md hover:bg-blue-800 transition-colors text-lg font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <h3 className="text-white text-xl font-semibold mb-6">About EventBox</h3>
                            <p className="text-sm leading-relaxed">
                                Your premier destination for discovering and booking the best events in your area. We bring people together through the power of live experiences.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-white transition-colors">Browse Events</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sell Tickets</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-semibold mb-6">Categories</h3>
                            <ul className="space-y-3">
                                {categories.map(category => (
                                    <li key={category.name}>
                                        <a href="#" className="hover:text-white transition-colors">{category.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-semibold mb-6">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                        <p>&copy; 2024 EventBox. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;