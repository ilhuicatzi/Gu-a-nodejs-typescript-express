
import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";
import bash from "highlight.js/lib/languages/bash";
import { CopyIcon } from "../../assets/icons/CopyIcon";
import { Toaster, toast } from 'sonner'

hljs.registerLanguage("bash", bash);

type Props = {
  codeString: string,
}

function CodeBash({ codeString} : Props) {
  const highlightedCode = hljs.highlight(codeString, {
    language: "bash",
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
            className="block px-4 py-4 text-sm language-bash"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
      <Toaster />
    </section>
  );
}

export default CodeBash;
