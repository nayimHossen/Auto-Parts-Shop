import { Link } from "react-router-dom";

function Tags() {
  return (
    <div className="bg-white shadow-md border-2 p-7">
      <h1 className="text-1xl font-bold border-b-1 py-1 mb-3">Tages</h1>
      <ul className="flex flex-wrap gap-1">
        <li className="p-1 bg-[#ddd] text-sm rounded hover:underline">
          <Link to="#">Auto</Link>
        </li>
        <li className="p-1 bg-[#ddd] text-sm rounded hover:underline">
          <Link to="#">Gallery</Link>
        </li>
        <li className="p-1 bg-[#ddd] text-sm rounded hover:underline">
          <Link to="#">Shop</Link>
        </li>
        <li className="p-1 bg-[#ddd] text-sm rounded hover:underline">
          <Link to="#">Engine</Link>
        </li>
        <li className="p-1 bg-[#ddd] text-sm rounded hover:underline">
          <Link to="#">Auto</Link>
        </li>
        <li className="p-1 bg-[#ddd] text-sm rounded hover:underline">
          <Link to="#">Gallery</Link>
        </li>
        <li className="p-1 bg-[#ddd] text-sm rounded hover:underline">
          <Link to="#">Shop</Link>
        </li>
        <li className="p-1 bg-[#ddd] text-sm rounded hover:underline">
          <Link to="#">Engine</Link>
        </li>
      </ul>
    </div>
  );
}

export default Tags;
