import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { MemeCard } from "@/components/memeCard";
import { getStoredMemes } from "@/utils/storage";

export default function ListPage() {
  const savedMemes = getStoredMemes();
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>List</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {savedMemes.map((meme) => (
              <MemeCard key={meme.id} meme={meme} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}