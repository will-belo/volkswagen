"use client"

import { Box, Divider } from "@mui/material"
import Image from "next/image"

export default function PreHeader() {
    return (
        <Box className="flex items-center justify-center bg-volks-blue text-white p-4">
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