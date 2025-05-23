import { title } from "@/components/shared/primitives";
import DefaultLayout from "@/layouts/default";

export const NotFoundPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Not Found</h1>
        </div>
      </section>
    </DefaultLayout>
  );
}