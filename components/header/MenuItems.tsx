import Link from "next/link";
import { SheetClose } from "../ui/sheet";
async function MenuItems( ) {
  const menuStly =
    " border-b-2 border-primary-foreground/40 p-2 px-4 w-full   hover:bg-primary";

  return (
    <div className="flex flex-col items-center justify-around gap-4 capitalize text-foreground w-full ">
      <SheetClose asChild>
        <Link href={`/`} prefetch={false} className={menuStly}>
          home
        </Link>
      </SheetClose>

      <SheetClose asChild>
        <Link
          href={`/services`}
          as={`/services`}
          prefetch={false}
          className={menuStly}
        >
          service
        </Link>
      </SheetClose>
      <SheetClose asChild>
        <Link
          href={`/worksample`}
          as={`/worksample`}
          prefetch={false}
          className={menuStly}
        >
          sample
        </Link>
      </SheetClose>
    </div>
  );
}

export default MenuItems;
