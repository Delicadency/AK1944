"use client";
import { useParams } from "next/navigation";
import { ComingSoon } from "@/components/ComingSoon/ComingSoon";



// TODO: Implement full functionality for this page
// ClickUp Task: https://app.clickup.com/t/8697pfp2t

export default function MemorialPlacePage() {
    const { slug } = useParams();

    return (
        <div>
            <h1>{slug}</h1>
            <ComingSoon />
        </div>
    );
}
