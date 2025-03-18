// ContactInfo.js
import { IconMapPin } from "@/icons/IconMapPin";
import { IconMail } from "@/icons/IconMail";
import { IconPhone } from "@/icons/IconPhone";

export default function ContactInfo() {
    return (
        <section aria-labelledby="contact-info" className="mb-10 text-[1.125rem] text-greenMain font-source-sans">
            {/* Adres */}
            <div className="space-y-4">
                <div className="flex items-center gap-3 desktop:gap-8 desktop:mb-8">
                    <IconMapPin className="w-8 h-8" />
                    <div>
                        <p className="desktop:mb-4">Adres siedziby:</p>
                        <p className="font-medium">39-200 Dębica, ul. Rzeszowska 15</p>
                    </div>
                </div>

                {/* E-mail */}
                <div className="flex items-center gap-3 desktop:gap-8 desktop:mb-8">
                    <IconMail className="w-8 h-8" />
                    <div>
                        <p className="desktop:mb-4">E-mail:</p>
                        <a href="mailto:ak.debica@gmail.com" className="font-medium">
                            ak.debica@gmail.com
                        </a>
                    </div>
                </div>

                {/* Telefon */}
                <div className="flex items-center gap-3 desktop:gap-8 desktop:mb-8">
                    <IconPhone className="w-8 h-8" />
                    <div>
                        <p className="desktop:mb-4">Telefon:</p>
                        <a href="tel:+48505248666" className="font-medium">
                            +48 505 248 666
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
