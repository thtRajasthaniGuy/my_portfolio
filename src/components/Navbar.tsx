export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white dark:bg-black z-50">
      <h1 className="text-xl font-bold">Govind Maheshwari</h1>
      <ul className="flex gap-6">
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#blog" className="hover:underline">Blog</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}
