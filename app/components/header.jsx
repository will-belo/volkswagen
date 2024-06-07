"use client"

import { Box, Divider } from "@mui/material"
import Image from "next/image"
import DrawerUI from "./drawer"
import useWindowSize from "@/app/hooks/useWindowsSize";
import { useEffect, useState } from "react";

import logo from "@/images/logo.png"
import Link from "next/link";

export default function PreHeader() {
    const [mobile, setMobile] = useState(false)
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width <= 1080) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }, [windowSize])

    return (
        <Box className="flex items-center justify-center bg-volks-blue-800 text-white px-4 py-6">
            {mobile && <DrawerUI />}
            {/* <DrawerUI /> */}
            <Box flexGrow={1}>
                <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
            </Box>
            <Box px={3}>
                <Link href="/">
                    <Image src={logo} width={250} height={50} alt="Logo" />
                </Link>
            </Box>
            <Box flexGrow={1}>
                <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
            </Box>
        </Box>
    )
}