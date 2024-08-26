import { lusitana } from '@/app/ui/fonts';

export default function SklepsmaryLogo() {
    return(
        <div
        className={`
            ${lusitana.className} 
            flex 
            flex-row 
            items-center 
            leading-none
            text-white
            bg-cyan-800
            py-40
            px-12
            opacity-20
            rounded-full
        `}>
      <p className="text-[44px]">Sklepsmary.pl</p>
    </div>
    );
}