"use client"

import { Box, Divider } from "@mui/material"
import Image from "next/image"
import DrawerUI from "./drawer"
import useWindowSize from "@/src/hooks/useWindowsSize";
import { useEffect, useState } from "react";

export default function PreHeader() {
    const [mobile, setMobile] = useState(false)
    const windowSize = useWindowSize();

    useEffect(() => {
        if(windowSize.width <= 1080){
            setMobile(true)
        } else {
            setMobile(false)
        }
        console.log(windowSize.width);
    }, [windowSize])

    return (
        <Box className="flex items-center justify-center bg-volks-blue text-white p-4">
            {mobile && <DrawerUI/> }
            {/* <DrawerUI /> */}
            <Box flexGrow={1}>
                <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
            </Box>
            <Box px={2}>
                <Image src="https://placehold.co/250x50" width={250} height={50} alt="Logo" />
            </Box>
            <Box flexGrow={1}>
                <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
            </Box>
        </Box>
    )
}