import Image from "next/image";

interface BackgroundImageProps {
    className?: string;
    sizes?: string;
    quality?: number;
}

export default function BackgroundImage({ className, sizes, quality }: BackgroundImageProps) {
    return (
        <div className={className}>
            <Image
                src="/images/contact-bg.png"
                alt="Obrazek przedstawiający retro telefon"
                fill
                sizes={sizes}
                className="object-contain object-right"
                quality={quality}
            />
        </div>
    );
}