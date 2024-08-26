import AcmeLogo from "@/app/ui/acme-logo";
import { Button } from "@/app/ui/button";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import SklepsmaryLogo from "./ui/sklepsmary-logo";

export default function Page(){
    return (
        <main className="flex min-h-dvh flex-col items-center justify-center p-24 relative">
            <div className="p-14 text-blue-900 w-1/3 absolute left-0">
                <h1>Lorem ipsum dolor</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem, fuga debitis deserunt, quos error at qui magni quisquam eligendi labore numquam officia nam a odit pariatur. Velit, atque nisi.
                Commodi, fuga minus optio dolores ipsam eveniet cupiditate consequatur laudantium mollitia. Saepe, fugit! Nihil sed voluptatibus amet natus magni delectus autem voluptates tempora. Nihil odio maiores, nobis at iusto suscipit.
                Dolorum facilis est culpa porro perferendis dolore veniam eos! Praesentium repellendus est, consequuntur cumque beatae molestias numquam provident atque, dolorem magni error ex quaerat molestiae voluptatum sint, possimus harum maxime.
                Quae ab excepturi quod odit ipsum voluptas repellendus fuga tempora, ut hic atque harum delectus corrupti reiciendis, in voluptatibus dignissimos laborum ea culpa, iusto temporibus voluptate. Totam repudiandae adipisci natus?</p>
            </div>
            <div className="flex gap-4 flex-col absolute top-1 right-1 p-4">
                <div className="flex flex-row-reverse gap-4">
                    <Button><GlobeAltIcon className="absolute inset-5 top-0"/>Smary</Button>
                    <Button><GlobeAltIcon className="absolute inset-5 top-0"/>Silikony</Button>
                    <Button><GlobeAltIcon className="absolute inset-5 top-0"/>Oleje</Button>
                </div>
                <div className="flex flex-row-reverse gap-4">
                    <Button><GlobeAltIcon className="absolute inset-5 top-0"/>Powloki</Button>
                    <Button><GlobeAltIcon className="absolute inset-5 top-0"/>Spray smar</Button>
                </div>
                <div className="flex flex-row-reverse gap-4">
                    <Button><GlobeAltIcon className="absolute inset-5 top-0"/>Smary</Button>
                </div>
            </div>
            <div className="">
                <SklepsmaryLogo/>
            </div>
            <div className="bg-slate-700 text-white p-4 w-svw absolute bottom-0 text-right">
                <p>kulkilozyskowe.elub.pl.BINGO.27.EN 20-08-2024</p>
            </div>
        </main>
    );
}