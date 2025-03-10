// LegalInfo.js
import IconBriefcase from "@/icons/IconBriefcase";
import IconBook from "@/icons/IconBook";
import IconDollar from "@/icons/IconDollar";

export default function LegalInfo() {
    return (
        <section aria-labelledby="informacje prawne" className="space-y-4 text-left max-w-[260px] mt-8 tablet:mt-0">
            {/* NIP */}
            <div className="flex gap-5 items-center desktop:gap-8 desktop:mb-8">
                <div className="w-6 flex-shrink-0">
                    <IconBriefcase name="briefcase" className="w-8 h-8" />
                </div>
                <div>
                    <p className="desktop:mb-4">NIP:</p>
                    <p className="font-medium">5261710045</p>
                </div>
            </div>

            {/* KRS */}
            <div className="flex items-center gap-5 desktop:gap-8 desktop:mb-8 tablet:hidden desktop:flex">
                <div className="w-6 flex-shrink-0">
                    <IconBook name="book" className="w-8 h-8" />
                </div>
                <div>
                    <p className="desktop:mb-4">KRS:</p>
                    <p className="font-medium">5261710045</p>
                </div>
            </div>

            <div className="flex items-center gap-5 desktop:gap-8 desktop:mb-8">
                <div className="w-6 flex-shrink-0">
                    <IconDollar name="dollar" className="w-8 h-8" />
                </div>
                <div className="flex flex-col flex-wrap break-words">
                    <p className="desktop:mb-4">Nr konta bankowego:</p>
                    <p className="font-medium tablet:hidden desktop:block">Santander Bank Polska</p>
                    <p className="font-medium">41 1090 2590 0000 0001 5299 0666</p>
                </div>
            </div>
        </section>
    );
}
