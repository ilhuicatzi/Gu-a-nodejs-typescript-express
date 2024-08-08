import { useMemo } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";
import javascript from "highlight.js/lib/languages/javascript";
import { CopyIcon } from "../../assets/icons/CopyIcon";
import { Toaster, toast } from "sonner";

// Registrar el lenguaje solo una vez
hljs.registerLanguage("javascript", javascript);

type Props = {
  codeString: string;
};

function CodeComponent({ codeString }: Props) {
  // Memoizar el código resaltado para evitar recalcular en cada render
  const highlightedCode = useMemo(() => {
    return hljs.highlight(codeString, { language: "javascript" }).value;
  }, [codeString]);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      toast.success("Código copiado!");
    } catch (error) {
      toast.error("Error al copiar el código.");
    }
  };

  return (
    <section className="my-8 rounded-xl relative w-4/5">
      <div className="flex justify-end">
        <button
          onClick={copyCode}
          className="bg-zinc-200 absolute dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 p-1.5 rounded-md"
          aria-label="Copiar código"
          title="Copiar código"
        >
          <CopyIcon />
        </button>
      </div>
      <div className="w-full pt-4 bg-zinc-200 dark:bg-zinc-900/70 rounded-lg overflow-auto">
        <pre>
          <code
            className="block px-4 pb-4 text-sm"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
      <Toaster />
    </section>
  );
}

export default CodeComponent;