import { Link } from "react-router-dom";

interface SidebarProps {
  sections: { id: string; title: string }[];
  currentSection: string;
}

const Sidebar = ({ sections, currentSection }: SidebarProps) => {
  return (
    <nav className="fixed mt-5 flex flex-col gap-y-3 w-64 h-full overflow-y-auto text-muted-foreground">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={`#${section.id}`}
          className={`block py-1 px-2 transition duration-200 border-l-2 text-sm ${
            currentSection === section.id
              ? "text-blue-600 border-blue-600"
              : "border-transparent hover:text-blue-500"
          }`}
        >
          {section.title}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;