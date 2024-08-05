import CodeComponent from "@/components/code/CodeComponent";
import { CodeExample, CodeExample2 } from "@/utils/codeExample";
import CodeBash from "@/components/code/CodeBash";

function HomePage() {
  return (
    <main className="px-4 sm:px-16 ">
      <section className="w-3/4 mt-10">
        <h1 className="text-4xl my-5">Home Page</h1>
        <CodeBash codeString={CodeExample2} />
        <p className="dark:text-zinc-300 text-zinc-700">
          Welcome to the Home Page
        </p>
        <CodeComponent codeString={CodeExample} size="320px" />
      </section>
    </main>
  );
}

export default HomePage;
