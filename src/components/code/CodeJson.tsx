
import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";
import json from "highlight.js/lib/languages/json";
import { CopyIcon } from "../../assets/icons/CopyIcon";
import { Toaster, toast } from 'sonner'

hljs.registerLanguage("json", json);

type Props = {
  codeString: string,
}

function CodeJson({ codeString} : Props) {
  const highlightedCode = hljs.highlight(codeString, {
    language: "json",
  }).value;

    const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    toast.success('Codigo copiado!')
  }
  return (
    <section className="mb-6 mt-4 rounded-xl relative w-4/5">
      <div className="flex justify-end">
        <button 
        onClick={copyCode}
        className="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 p-1.5 rounded-s-md absolute top-0">
          <CopyIcon />
        </button>
      </div>
      <div className={`w-full bg-zinc-200 dark:bg-zinc-900/70 rounded-lg overflow-auto `}>
        <pre>
          <code
            className="block px-4 py-4 text-sm language-json"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
      <Toaster />
    </section>
  );
}

export default CodeJson;
