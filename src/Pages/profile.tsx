import React from "react";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { Card, Flex, Avatar, Box, Text, Button, Separator } from "@radix-ui/themes";
const Profile = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    if (!isAuthenticated || !user) {
        navigate("/sign-in");
        return null;
    }

    return (
        <div className={'flex-1 w-full md:w-auto md:border-l lg:border-r bg-neutral-100 h-full md:overflow-y-auto'}>

            <div className="flex justify-center items-center min-h-screen w-full bg-gray-100 p-4">
                <div className="bg-white border-b w-full max-w-lg md:max-w-2xl">
                    {/* Background Image */}
                    <div
                        className="bg-cover bg-center h-[250px] md:h-[350px]"
                        style={{
                            backgroundImage: `url(https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?cs=srgb&dl=pexels-eberhardgross-1287075.jpg&fm=jpg)`,
                        }}
                    >
                        <div className="bg-gradient-to-b from-black/60 to-transparent h-full w-full text-white p-4 flex items-end">
                            <div className="md:px-4">
                                <div className="font-semibold text-lg">Anh Nhan Nguyen</div>
                                <div className="text-sm">3 Posts, 25K Views</div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex flex-row justify-between px-4">
                        {/* Avatar */}
                        <div
                            className="overflow-hidden rounded-full w-[100px] h-[100px] bg-cover bg-center border-2 border-white -mt-[32px] flex-shrink-0"
                            style={{
                                backgroundImage: `url('${user?.avatar || "https://via.placeholder.com/100"}')`,
                            }}
                        />
                        {/* Placeholder for future button/icon */}
                        <div className="pt-4">
                            <div className="border border-neutral-200 w-12 h-12 rounded-full flex justify-center items-center"></div>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="p-4">
                        <div className="text-[20px] font-semibold">{user?.fullName || "User Name"}</div>
                        <div className="flex flex-row text-neutral-500 gap-1 items-center">
                            <div className="text-[12px]">@{user?.fullName || "username"}</div>
                            <div>•</div>
                            <div className="text-[12px]">
                                Available to work <span className="underline">remotely</span>
                            </div>
                        </div>
                        <div className="text-[14px] mt-1 flex flex-col gap-0.5">
                            <p className="leading-relaxed whitespace-pre-wrap line-clamp-3">
                                This is a short bio or description of the user.
                            </p>
                            <div className="text-primary font-medium text-[12px] cursor-pointer mt-2">
                                More info
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
            <Card className="max-w-lg w-full p-6 shadow-lg rounded-xl bg-white">
                <Flex gap="4" align="center">
                    <Avatar
                        size="6"
                        src={user.avatar || "https://via.placeholder.com/100"}
                        radius="full"
                        fallback={user.email.charAt(0).toUpperCase()}
                    />
                    <Box>
                        <Text as="div" size="4" weight="bold">
                            {user?.fullName || "Unknown User"}
                        </Text>
                        <Text as="div" size="3" color="gray">
                            {user.email}
                        </Text>
                    </Box>
                </Flex>

                <Separator my="4" />
                <Separator my="4" />

                <Flex direction="column" gap="3">
                    <Button onClick={() => navigate("/edit-profile")}>Edit Profile</Button>
                    <Button color="red" onClick={logout}>Logout</Button>
                </Flex>
            </Card> */}
        </div>
    );
};


export default Profile;
