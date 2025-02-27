"use client";
import { useParams } from "next/navigation";
import { ComingSoon } from "@/components/ComingSoon/ComingSoon";

export default function MemorialPlacePage() {
    const { slug } = useParams();

    return (
        <div>
            <h1>{slug}</h1>
            <ComingSoon />
        </div>
    );
}
