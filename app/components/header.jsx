"use client"

import { Box, Divider } from "@mui/material"

export default function PreHeader() {
    return (
        <Box className="flex items-center justify-center bg-volks-blue text-white p-4">
            <Box flexGrow={1}>
                <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
            </Box>
            <Box px={2}>
                <img src="https://placehold.co/250x50"></img>
            </Box>
            <Box flexGrow={1}>
                <Divider sx={{ borderBottomWidth: 1, borderColor: "white" }} />
            </Box>
        </Box>
    )
}