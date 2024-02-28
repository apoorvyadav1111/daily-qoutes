"use client";

import { ModeToggle } from "./mode-toggle";

export const Navbar = () => {
    return (
        <div className="z-50 fixed top-0 flex items-center w-full p-2">
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <ModeToggle/>
            </div>
        </div>
    )
}