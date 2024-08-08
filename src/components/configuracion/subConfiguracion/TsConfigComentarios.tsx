import { dataTsConfigComentarios } from "@/utils/codeConfig"

function TsConfigComentarios() {
  return (
    <div className="p-6">
    <h2 className="text-xl font-bold mb-4">
      Comentarios sobre tsconfig.json
    </h2>
    <ul className="list-disc pl-5 space-y-2 text-muted-foreground overflow-x-scroll min-[330px]:overflow-auto">
        {dataTsConfigComentarios.map((item) => (
            <li key={item.id} className="hover:text-foreground">
                <span className="text-primary font-extralight font-mono">
                   ` {item.elemento}`:
                </span>
                {item.descripcion}
            </li>
        ))}
    </ul>
  </div>
  )
}

export default TsConfigComentarios